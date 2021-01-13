window.onload = () => {
  const droneBox = document.querySelector(".drone-box");

  droneBox.style.transform = "translateX(calc(-100% - 15px))";

  const pageHeader = document.querySelector(".page-header");

  if (window.scrollY > 20) {
    pageHeader.style.top = "8vh";
  } else {
    pageHeader.style.top = "50vh";
  }
};

window.onscroll = () => {
  const pageHeader = document.querySelector(".page-header");
  if (window.scrollY > 20) {
    pageHeader.style.top = "8vh";
  } else {
    pageHeader.style.top = "50vh";
  }
};
