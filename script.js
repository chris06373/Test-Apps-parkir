let logParkir = [];

function getJenisKendaraan() {
  const jenis = document.querySelector('input[name="jenis"]:checked');
  return jenis ? jenis.value : 'Tidak diketahui';
  }

function tambahLog(plat, jenis, status) {
  const waktu = new Date().toLocaleString('id-ID');
  logParkir.push({ plat, jenis, status, waktu });
  renderLog();
  }

function renderLog() {
  const logList = document.getElementById("log-list");
  logList.innerHTML = ""; // kosongkan log

// Tampilkan histori terbaru di atas
[...logParkir].reverse().forEach((log) => {
  const li = document.createElement("li");
  li.textContent = `${log.status} | ${log.plat} | ${log.jenis} | ${log.waktu}`;
  logList.appendChild(li);
    });
  }

function masuk() {
  const plat = document.getElementById("plat").value.trim();
    if (!plat) {
    alert("Nomor plat tidak boleh kosong!");
    return;
    }
  const jenis = getJenisKendaraan();
  tambahLog(plat, jenis, "MASUK");
  document.getElementById("plat").value = ""; // reset input
}

function keluar() {
  const plat = document.getElementById("plat").value.trim();
  if (!plat) {
  alert("Nomor plat tidak boleh kosong!");
  return;
  }
  const jenis = getJenisKendaraan();
  tambahLog(plat, jenis, "KELUAR");
  document.getElementById("plat").value = ""; // reset input
}
