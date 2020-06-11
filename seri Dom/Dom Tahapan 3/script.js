// ? BErmain dengan Warna Dan Berinteraksi Dengan Dom//
const ubah = document.getElementById("ajaib");
ubah.addEventListener("click", function () {
  let acak = Math.floor(Math.random() * 5);
  if (acak < 1) {
    acak = document.body.style.backgroundColor = "black";
  } else if (acak > 1 && acak <= 2) {
    acak = document.body.style.backgroundColor = "blue";
  } else if (acak > 2 && acak <= 3) {
    acak = document.body.style.backgroundColor = "salmon";
  } else if (acak > 3 && acak <= 4) {
    acak = document.body.style.backgroundColor = "magenta";
  } else {
    acak = document.body.style.backgroundColor = "lime";
    return acak;
  }
});
