// !pengunaan Dom Events Pada javasvript Membuat interaksi dengan halaman HTML

(function () {
  let komputer = Math.floor(Math.random() * 5);
  if (komputer < 1) {
    komputer = "satu";
  } else if (komputer > 1 && komputer <= 2) {
    komputer = "dua";
  } else if (komputer > 2 && komputer <= 3) {
    komputer = "tiga";
  } else if (komputer > 3 && komputer <= 4) {
    komputer = "empat";
  } else {
    komputer = "Akhir";
  }

  alert(komputer);
})();

(function () {
  console.log("Pedro ganteng");
})();
