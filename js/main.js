const openNav = () => {
  document.querySelector(".nav-opener").classList.toggle("opened");
  document.querySelector(".main-nav").classList.toggle("opened");

  const navElements = document.getElementsByClassName("nav-element");

  for (let i = 0; i < navElements.length; i++) {
    window.setTimeout(() => {
      navElements[i].classList.toggle("opened");
    }, 100 * i);
  }
};