
const firebaseConfig = {
  apiKey: "AIzaSyBOcF8cEFiG9x5f8Tjjch5BGLs1PYMd7rk",
  authDomain: "walkscrocs-db.firebaseapp.com",
  databaseURL: "https://walkscrocs-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "walkscrocs-db",
  storageBucket: "walkscrocs-db.appspot.com",
  messagingSenderId: "750633501958",
  appId: "1:750633501958:web:041ce83d3d6d997ce6403a"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("transaksi");

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const data = {
    penginput: document.getElementById("penginput").value,
    customer: document.getElementById("customer").value,
    tanggal: document.getElementById("tanggal").value,
    masuk: document.getElementById("masuk").value,
    keluar: document.getElementById("keluar").value,
    metode: document.getElementById("metode").value,
    dp: document.getElementById("dp").value,
    kekurangan: document.getElementById("kekurangan").value,
    keterangan: document.getElementById("keterangan").value,
    timestamp: Date.now()
  };
  db.push(data);
  this.reset();
});

db.on("value", (snapshot) => {
  const container = document.getElementById("data-container");
  container.innerHTML = "";
  const data = snapshot.val();
  for (let key in data) {
    const d = data[key];
    container.innerHTML += `
      <div class="entry">
        <strong>${d.tanggal}</strong> - ${d.penginput} | ${d.customer}<br />
        Masuk: <b>${d.masuk || 0}</b> | Keluar: <b>${d.keluar || 0}</b><br />
        Metode: ${d.metode} | DP: ${d.dp || 0} | Kekurangan: ${d.kekurangan || 0}<br />
        <i>${d.keterangan}</i>
      </div>
    `;
  }
});
