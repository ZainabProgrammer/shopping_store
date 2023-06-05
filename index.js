let cartBtn = document.querySelector("#cartBtn");
let cartContainer = document.querySelector(".cart");
let closeBtn1 = document.getElementById("close1");
let closeBtn2 = document.getElementById("close2");
let closeBtn3 = document.getElementById("close3");
let loginBtn = document.querySelector("#loginBtn");
let loginContainer = document.querySelector(".login");
let menuBtn = document.querySelector("#menuBtn");
let navbar = document.querySelector(".navbar");

cartBtn.addEventListener("click", function () {
  cartContainer.classList.add("recovery");
});
closeBtn1.addEventListener("click", function () {
  cartContainer.classList.remove("recovery");
});
loginBtn.addEventListener("click", function () {
  loginContainer.classList.add("main");
});
closeBtn2.addEventListener("click", function () {
  loginContainer.classList.remove("main");
});
menuBtn.addEventListener("click", function () {
  navbar.classList.add("compns");
});

closeBtn3.addEventListener("click", function () {
  navbar.classList.remove("compns");
});
