import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import dns from "dns";
import net from "net";
import fs from "fs";
import path from "path";

//fungsi start==================

const checkPort = (
  host: string,
  port: number,
  timeout: number = 2000
): Promise<boolean> => {
  return new Promise((resolve) => {
    const socket = new net.Socket();

    // Jika koneksi berhasil, port terbuka
    socket.on("connect", () => {
      socket.destroy(); // Tutup koneksi
      resolve(true);
    });

    // Jika terjadi error, port tidak terbuka
    socket.on("error", () => {
      resolve(false);
    });

    // Jika timeout tercapai, port tidak terbuka
    socket.setTimeout(timeout);
    socket.on("timeout", () => {
      socket.destroy(); // Tutup koneksi
      resolve(false);
    });

    // Coba koneksi ke host dan port
    socket.connect(port, host);
  });
};

const getDaftarPort = (hostname: string) => {
  fs.readFile(path.join(__dirname, "./data/daftarPorts.json"), (err, data) => {
    const dataString = data.toString();
    const dataObj = JSON.parse(dataString);
    const ports = dataObj["ports"]; // ambil object ports dari json file
    type data = {
      port: number;
      protocol: string;
      service: string;
      description: string;
    };
    ports.forEach((data: data) => {
      const { port } = data;
      checkPort(hostname, port)
        .then((isPortOpen) => {
          console.table(
            `${data}=> ${isPortOpen ? "Terbuka (✧‿✧)" : "tidak terbuka (⊙﹏⊙)"}`
          );
        })
        .catch((err) => {
          console.error(`Terjadi kesalahan pada port ${port}:`, err.message);
        });
    });
  });
};

//fungsi end=================

// Definisikan tipe untuk argv
interface PingArgs {
  hostname: string;
}
yargs(hideBin(process.argv))
  .command<PingArgs>(
    "ping <hostname>",
    "Melakukan ping ke hostname untuk komunikasi dan memindai port",
    (yargs) => {
      return yargs.positional("hostname", {
        describe: "Hostname atau alamat IP yang akan diping",
        type: "string",
        demandOption: true, // Wajib diisi
      });
    },
    (argv) => {
      interface Data {
        hostname: string;
        ipAddress: string;
      }
      const dataHost: Array<Data> = [];

      const hostnames = argv.hostname.split(",").map((host) => host.trim());

      const processLookup = (index: number) => {
        if (index >= hostnames.length) {
          console.table(dataHost); // Tampilkan hasil dalam format tabel
          return;
        }
        const hostname = hostnames[index];
        dns.resolve(hostname, "A", (err, addresses) => {
          if (err) {
            console.error(`Terjadi kesalahan pada  ${hostname}:`, err.message);
          } else {
            const ipAddress = addresses[0];
            //pengecekan port
            // ports.forEach((port) => {
            //   checkPort(hostname, port)
            //     .then(() => {
            //       console.log(`Port ${port} di ${hostname} dapat diakses`);
            //     })
            //     .catch((err) => {
            //       console.error(
            //         `Port ${port} di ${hostname} tidak dapat diakses`
            //       );
            //       console.error(err);
            //     });
            // });
            //panggil dan cek daftar port
            getDaftarPort(hostname);

            // Simpan hasil lookup dan port yang dapat diakses
            dataHost.push({ hostname, ipAddress });
          }
          // Lanjutkan ke hostname berikutnya
          processLookup(index + 1);
        });
      };
      // Mulai proses lookup
      processLookup(0);
    }
  )
  .help() // Menambahkan bantuan (--help)
  .alias("help", "h") // Alias untuk help
  .parse(); // Parse argumen
