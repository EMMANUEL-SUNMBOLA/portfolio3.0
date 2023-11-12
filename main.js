const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-wrapper");

let active = false;

const flipTheSwitch = () => {
  active = !active;
  hamburger.setAttribute("aria-expanded", `${active}`);
  navMenu.setAttribute("data-visible", `${active}`);
};

hamburger.addEventListener("click", flipTheSwitch);
