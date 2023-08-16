// Menghitung luas segitiga
function hitungLuasSegitiga() {
  let alas = document.getElementById("alas").value;
  let tinggi = document.getElementById("tinggi").value;

  let luas = 0.5 * alas * tinggi;

  document.getElementById("output").innerHTML = "Luas Segitiga = " + luas;
}

// Tombol Reset
function resetForm() {
  let inputAlas = document.getElementById("alas");
  let inputTinggi = document.getElementById("tinggi");
  let output = document.getElementById("output");

  inputAlas.value = "";
  inputTinggi.value = "";
  output.innerHTML = "";
}

// Menghitung keliling segitiga
function hitungKeliling() {
  let sisiA = document.getElementById("sisia").value;
  let sisiB = document.getElementById("sisib").value;
  let sisiC = document.getElementById("sisic").value;

  let keliling = parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC);

  document.getElementById("results").innerHTML = keliling;
}

function reset() {
  let inputSisiA = document.getElementById("sisia");
  let inputSisiB = document.getElementById("sisib");
  let inputSisiC = document.getElementById("sisic");
  let results = document.getElementById("results");

  inputSisiA.value = "";
  inputSisiB.value = "";
  inputSisiC.value = "";
  results.innerHTML = "";
}


function ulang() {
  let inputAlas2 = document.getElementById("alas2");
  let inputTall2 = document.getElementById("tall2");
  let outbut2 = document.getElementById("outbut2");

  inputAlas2.value = "";
  inputTall2.value = "";
  outbut2.innerHTML = "";
}
