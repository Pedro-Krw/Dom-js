// ? MENGUNAKAN EventListener
const p3 = document.querySelector(".p3");

p3.addEventListener("mouseenter", function () {
  p3.style.backgroundColor = "blue";
  p3.style.cursor = "pointer";
  p3.style.transition = "3s";
});
p3.addEventListener("mouseleave", function () {
  p3.style.backgroundColor = "red";
  p3.style.cursor = "pointer";
  p3.style.transition = "1s";
});
