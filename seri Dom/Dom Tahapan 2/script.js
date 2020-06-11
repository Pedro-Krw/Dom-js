// ? MENGUNAKAN EventListener
const p3 = document.querySelector(".p3");

p3.addEventListener("mouseenter", function () {
  p3.style.backgroundColor = "lightgreen";
  p3.style.cursor = "pointer";
  p3.style.transition = "3s";
  p3.innerHTML = "Pace batszz";
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
