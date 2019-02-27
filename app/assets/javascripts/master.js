const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector("header");
const headerOpen = "header--open";
const noScroll = "no-scroll";
let topBarVisible = false;
headerMenu.onclick = () => {
  if (topBarVisible) {
    document.documentElement.classList.remove(noScroll);
    header.classList.remove(headerOpen);
  } else {
    document.documentElement.classList.add(noScroll);
    header.classList.add(headerOpen);
  }
  topBarVisible = !topBarVisible;
};
