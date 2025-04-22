const form = document.getElementById("form");
const container = document.getElementById("data-container");
let data = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const tanggal = document.getElementById("tanggal").value;
  const customer = document.getElementById("customer").value;
  const jenis = document.getElementById("jenis").value;
  const jumlah = document.getElementById("jumlah").value;
  const keterangan = document.getElementById("keterangan").value;
  const metode = document.getElementById("metode").value;

  const entry = { tanggal, customer, jenis, jumlah, keterangan, metode };
  data.push(entry);
  displayData();

  // Format pesan WhatsApp
  const message = encodeURIComponent(
    `📌 Transaksi Baru:\n` +
    `Tanggal: ${tanggal}\n` +
    `Customer: ${customer}\n` +
    `${jenis}: Rp ${jumlah}\n` +
    `Keterangan: ${keterangan}\n` +
    `Metode Pembayaran: ${metode}`
  );

  // Kirim ke WhatsApp
  const phone = "6285171002907";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

  form.reset();
});

function displayData() {
  container.innerHTML = "";
  data.forEach((d) => {
    container.innerHTML += `
      <div class="entry">
        <strong>${d.tanggal}</strong><br/>
        ${d.customer} | ${d.keterangan}<br/>
        ${d.jenis}: Rp ${d.jumlah}<br/>
        Metode: ${d.metode}
      </div>
    `;
  });
}
