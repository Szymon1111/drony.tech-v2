window.onload = () => {
  const droneBox = document.querySelector(".drone-box");
  const videoCourtine = document.querySelector(".video-courtine");

  droneBox.style.transform = "translateX(calc(-100% - 15px))";

  window.setTimeout(() => {
    droneBox.style.background = "transparent";
    videoCourtine.style.opacity = "0.5";
  }, 1500);

  const pageHeader = document.querySelector(".page-header");

  if (window.scrollY > 20) {
    pageHeader.style.top = "8vh";
  } else {
    pageHeader.style.top = "50vh";
  }
};

window.onscroll = () => {
  const pageHeader = document.querySelector(".page-header");
  const pageHeaderBackground = document.querySelector(
    ".page-header-background"
  );
  if (window.scrollY > 20) {
    pageHeader.style.top = "8vh";
  } else {
    pageHeader.style.top = "50vh";
  }

  if (window.scrollY >= window.innerHeight)
    pageHeaderBackground.style.opacity = "1";
  else pageHeaderBackground.style.opacity = "0";
};
