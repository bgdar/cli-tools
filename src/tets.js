const fs = require("fs");

const path = require("path");

// Membaca file JSON
fs.readFile(path.join(__dirname, "./data/daftarPorts.json"), (err, data) => {
  if (err) {
    // Tangani error jika terjadi
    throw err;
  }

  // Konversi data buffer ke string
  const dataString = data.toString();

  // Parsing string JSON ke objek JavaScript
  const daftarPort = JSON.parse(dataString);

  // Gunakan data yang sudah di-parsing
  console.log(daftarPort);
});
