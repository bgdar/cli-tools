# cli-tools

tools command line yang di buat dengan node js untuk Networking

gunakan pnpm , install dengan npm

```bash
    npm install pnpm
```

install dependensi yang di gunakan

```bash
    pnpm install
```

## DAFTAR PERINTAH

### Command **ping**

> ping akan melakukan koneksi ke server web-site atau IP dan menampilkan IP Target serta port yang terbuka

menjalankan langsung menggunakan typescript langsung dengan ts-node

```bash
    pnpm exec ts-node src/app.ts ping google.com
```

atau beberapa perintah sekaligus

```bash
    pnpm exec ts-node src/app.ts ping "google.com,yaho.com,youtube.com"
```

jika menjalankan dengan node js , built terlebih dahulu dengan typescript dan hasilnya ada di folder dist

```bash
    npx tsc
    cd dist
```

lalu jalnakan

```bash
    node dist/app ping google.com
```

### Daftar Port yang akan di scanning untuk Website dan Layanan Terkait

| **Port** | **Protokol** | **Layanan/Judul**        | **Deskripsi**                                                         |
| -------- | ------------ | ------------------------ | --------------------------------------------------------------------- |
| 20       | TCP          | FTP (Data)               | Port untuk transfer data FTP.                                         |
| 21       | TCP          | FTP (Control)            | Port untuk kontrol koneksi FTP.                                       |
| 22       | TCP          | SSH                      | Port untuk koneksi Secure Shell (SSH), digunakan untuk remote access. |
| 25       | TCP          | SMTP                     | Port untuk pengiriman email (Simple Mail Transfer Protocol).          |
| 53       | TCP/UDP      | DNS                      | Port untuk layanan Domain Name System (DNS).                          |
| 67       | UDP          | DHCP (Server)            | Port untuk server DHCP (Dynamic Host Configuration Protocol).         |
| 68       | UDP          | DHCP (Client)            | Port untuk client DHCP.                                               |
| 80       | TCP          | HTTP                     | Port untuk layanan web (Hypertext Transfer Protocol).                 |
| 110      | TCP          | POP3                     | Port untuk mengambil email (Post Office Protocol version 3).          |
| 123      | UDP          | NTP                      | Port untuk sinkronisasi waktu (Network Time Protocol).                |
| 135      | TCP/UDP      | MS RPC                   | Port untuk Microsoft Remote Procedure Call.                           |
| 137      | TCP/UDP      | NetBIOS Name Service     | Port untuk layanan nama NetBIOS.                                      |
| 138      | TCP/UDP      | NetBIOS Datagram Service | Port untuk layanan datagram NetBIOS.                                  |
| 139      | TCP/UDP      | NetBIOS Session Service  | Port untuk layanan sesi NetBIOS.                                      |
| 143      | TCP          | IMAP                     | Port untuk mengakses email (Internet Message Access Protocol).        |
| 161      | UDP          | SNMP                     | Port untuk Simple Network Management Protocol (SNMP).                 |
| 162      | UDP          | SNMP Trap                | Port untuk SNMP Trap.                                                 |
| 389      | TCP/UDP      | LDAP                     | Port untuk Lightweight Directory Access Protocol (LDAP).              |
| 443      | TCP          | HTTPS                    | Port untuk layanan web aman (HTTP Secure).                            |
| 445      | TCP          | SMB                      | Port untuk Server Message Block (SMB), digunakan untuk berbagi file.  |
| 465      | TCP          | SMTPS                    | Port untuk SMTP over SSL (pengiriman email aman).                     |
| 514      | UDP          | Syslog                   | Port untuk layanan logging (Syslog).                                  |
| 587      | TCP          | SMTP Submission          | Port alternatif untuk pengiriman email (SMTP Submission).             |
| 636      | TCP/UDP      | LDAPS                    | Port untuk LDAP over SSL (LDAP Secure).                               |
| 993      | TCP          | IMAPS                    | Port untuk IMAP over SSL (IMAP Secure).                               |
| 995      | TCP          | POP3S                    | Port untuk POP3 over SSL (POP3 Secure).                               |
| 1433     | TCP          | MS SQL Server            | Port untuk Microsoft SQL Server.                                      |
| 1521     | TCP          | Oracle Database          | Port untuk Oracle Database.                                           |
| 2049     | TCP/UDP      | NFS                      | Port untuk Network File System (NFS).                                 |
| 2082     | TCP          | cPanel                   | Port untuk akses cPanel (default).                                    |
| 2083     | TCP          | cPanel (SSL)             | Port untuk akses cPanel aman (SSL).                                   |
| 2086     | TCP          | WHM                      | Port untuk WebHost Manager (WHM).                                     |
| 2087     | TCP          | WHM (SSL)                | Port untuk WebHost Manager aman (SSL).                                |
| 2095     | TCP          | Webmail                  | Port untuk akses webmail.                                             |
| 2096     | TCP          | Webmail (SSL)            | Port untuk akses webmail aman (SSL).                                  |
| 2181     | TCP          | Apache ZooKeeper         | Port untuk Apache ZooKeeper.                                          |
| 2375     | TCP          | Docker                   | Port untuk Docker API (tidak aman).                                   |
| 2376     | TCP          | Docker (SSL)             | Port untuk Docker API aman (SSL).                                     |
| 3000     | TCP          | Node.js                  | Port default untuk aplikasi Node.js.                                  |
| 3306     | TCP          | MySQL                    | Port untuk MySQL Database.                                            |
| 3389     | TCP          | RDP                      | Port untuk Remote Desktop Protocol (RDP).                             |
| 5432     | TCP          | PostgreSQL               | Port untuk PostgreSQL Database.                                       |
| 5900     | TCP          | VNC                      | Port untuk Virtual Network Computing (VNC).                           |
| 5984     | TCP          | CouchDB                  | Port untuk CouchDB.                                                   |
| 6379     | TCP          | Redis                    | Port untuk Redis Database.                                            |
| 8080     | TCP          | HTTP Alternatif          | Port alternatif untuk layanan web.                                    |
| 8443     | TCP          | HTTPS Alternatif         | Port alternatif untuk layanan web aman.                               |
| 8888     | TCP          | phpMyAdmin               | Port default untuk phpMyAdmin.                                        |
| 9000     | TCP          | Portainer                | Port untuk Portainer (manajemen Docker).                              |
| 9090     | TCP          | Prometheus               | Port untuk Prometheus (monitoring).                                   |
| 9200     | TCP          | Elasticsearch            | Port untuk Elasticsearch.                                             |
| 9300     | TCP          | Elasticsearch (Cluster)  | Port untuk komunikasi cluster Elasticsearch.                          |
| 27017    | TCP          | MongoDB                  | Port default untuk MongoDB.                                           |

### Catatan

- **Port 0-1023**: Port yang dikenal sebagai "well-known ports" dan biasanya digunakan untuk layanan sistem.
- **Port 1024-49151**: Port terdaftar (registered ports) yang digunakan oleh aplikasi atau layanan tertentu.
- **Port 49152-65535**: Port dinamis (ephemeral ports) yang digunakan untuk koneksi sementara.

### Referensi Tambahan

- Daftar lengkap port dan layanan dapat ditemukan di [IANA Service Name and Transport Protocol Port Number Registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml).
