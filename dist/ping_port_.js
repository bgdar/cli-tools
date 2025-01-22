import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import dns from "dns";
import isPortReachable from "is-port-reachable";
yargs(hideBin(process.argv))
    //jika host 1 = ping google.com
    // jika host banyak = "google.com,yahoo.com,youtube.com"
    // test =  pnpm exec ts-node src/app.ts ping  "google.com,yahoo.com,youtube.com,dpr.go.id"
    .command("ping <hostname>", "Melakukan ping ke hostname untuk komunikasi dan membuka port", (yargs) => {
    return yargs.positional("hostname", {
        describe: "Hostname atau alamat IP yang akan diping",
        type: "string",
        demandOption: true, // Wajib diisi
    });
}, (argv) => {
    let dataHost = [];
    let count = 0;
    const ports = [3000, 80, 3002, 3006];
    const hostnames = argv.hostname.split(",").map((host) => host.trim());
    const processLookup = async (index) => {
        if (index >= hostnames.length || count >= 10) {
            console.log("Limit maksimal data yang diproses: 10");
            console.table(dataHost); // Tampilkan hasil dalam format tabel
            return;
        }
        const hostname = hostnames[index];
        dns.resolve(hostname, "A", async (err, addresses) => {
            if (err) {
                console.error(`Terjadi kesalahan pada hostname ${hostname}:`, err.message);
            }
            else {
                const ipAddress = addresses[0];
                let reachablePort;
                // Lakukan pemindaian port
                for (const port of ports) {
                    const isReachable = await isPortReachable(port, {
                        host: hostname,
                    });
                    if (isReachable) {
                        console.log(`Port ${port} di ${hostname} dapat diakses`);
                        reachablePort = port;
                        break;
                    }
                }
                // Simpan hasil lookup dan port yang dapat diakses
                dataHost.push({ hostname, ipAddress, port: reachablePort });
                count++;
            }
            // Lanjutkan ke hostname berikutnya
            processLookup(index + 1);
        });
    };
    // Mulai proses lookup
    processLookup(0);
})
    //perintah selanjutnya
    //.command(j)
    .help() // Menambahkan bantuan (--help)
    .alias("help", "h") // Alias untuk help
    .parse(); // Parse argumen
