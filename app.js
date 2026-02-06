// # Start Hitung Loan
document.getElementById("btnHitung").addEventListener("click", hitung);
function hitung() {
  let input = document.getElementById("nilai1").value;
  let pinjaman = parseInt(input);
  console.log(pinjaman);

  // start format maat uang rupiah
  let formatUang = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  // end format maat uang rupiah

  try {
    if (pinjaman > 0 && input !== "") {
      let pinjamanInput = document.getElementById("nilai1").value; // ambil value input pinjaman
      console.log(formatUang.format(pinjamanInput));

      let bunga = document.getElementById("nilai2").value; // ambil value input bunga
      console.log(bunga);

      let tenor = document.getElementById("nilai3").value; // ambil value input tenor
      console.log(tenor);

      // perhitungan bunga flat
      let instalment = pinjamanInput / tenor; // pinjaman * tenor
      console.log(formatUang.format(instalment));

      let totalBunga = instalment * (bunga / 100); // cicilan * bunga%
      console.log(formatUang.format(totalBunga));

      let totalBeban = instalment + totalBunga; //pokok + bunga
      console.log("Total angsuran perbulan : " + formatUang.format(totalBeban));
      window.alert(formatUang.format(totalBeban));
    } else {
      throw "nama tidak boleh kosong atau 0";
    }
  } catch (error) {
    alert("Error: " + error);
    window.location.href = "login.html";
  }
}
// # End Hitung Loan

// # Start Login
document.getElementById("btnCari").addEventListener("click", login);
function login() {
  const nik = "230934";
  const getNik = document.getElementById("nik").value;
  console.log(getNik);
  try {
    if (getNik === "") {
      throw "nik tidak boleh kosong";
    }
    if (getNik === nik) {
      window.location.href = "coba.html";
    } else {
      throw "nik salah!";
    }
  } catch (error) {
    alert("Error: " + error);
    window.location.href = "login.html";
  }
}
// # End Login