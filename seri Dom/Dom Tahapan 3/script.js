// ? BErmain dengan Warna Dan Berinteraksi Dengan Dom//
const ubah = document.getElementById("ajaib");
ubah.addEventListener("click", function () {
  // document.body.style.backgroundColor = "lime";
  document.body.classList.toggle("biru-muda");
});

//?Membuat button baru melalui Vanila JavaScript//
const random = document.createElement("button");
const tulisan = document.createTextNode("acak warna");
random.appendChild(tulisan);
random.setAttribute("type", "button");
ubah.after(random);

random.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
