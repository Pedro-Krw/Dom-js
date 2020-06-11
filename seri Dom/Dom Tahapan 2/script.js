// ? MENGUNAKAN EventListener Mendenganrkan User
const p3 = document.querySelector(".p3");

function pengalih() {
  let a = (p3.style.backgroundColor = "red");
  let b = (p3.style.color = "white");
  let semua = a != b;
  return semua;
}
function inject() {
  let c = (p3.style.color = "black");
  let d = (p3.style.backgroundColor = "lime");
  let total = c != d;
  return total;
}
p3.addEventListener("mouseenter", function () {
  p3.style.backgroundColor = "lightgreen";
  p3.style.cursor = "pointer";
  p3.style.transition = "3s";
  p3.innerHTML = Math.floor(Math.random() * 5);
  if (p3.innerHTML < 1) {
    p3.innerHTML = ["pace", inject()];
  } else if (p3.innerHTML > 1 && p3.innerHTML <= 2) {
    p3.innerHTML = ["NAPI", inject()];
  } else if (p3.innerHTML > 2 && p3.innerHTML <= 3) {
    p3.innerHTML = ["Anonymous", pengalih()];
  } else if (p3.innerHTML > 3 && p3.innerHTML <= 4) {
    p3.innerHTML = ["error", inject()];
  } else {
    p3.innerHTML = ["lacak", inject()];
  }
});
p3.addEventListener("mouseleave", function () {
  p3.style.backgroundColor = "lightblue";
  p3.style.cursor = "pointer";
  p3.style.transition = "1s";
  p3.innerHTML = "paragraf 3";
});

const perubahan = document.querySelector("a");
perubahan.addEventListener("mouseenter", function () {
  perubahan.innerHTML = "jaga jarak potem";
  perubahan.style.backgroundColor = "lime";
  perubahan.style.borderRadius = "12px";
});
const perubahan2 = document.querySelector("a");
perubahan2.addEventListener("mouseleave", function () {
  perubahan2.innerHTML = "Instagram pedro korwa";
  perubahan2.style.backgroundColor = "white";
  perubahan2.style.borderRadius = "0";
});
