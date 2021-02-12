const scrollTo = (element, block = "center") => {
  element.scrollIntoView({
    behavior: "smooth",
    block: block,
  });
  openNav();
};

const home = document.querySelector("body");
const homeBtn = document.querySelector("#homeBtn");

const aboutUs = document.querySelector(".aboutus-section");
const aboutUsBtn = document.querySelector("#aboutusBtn");

const offer = document.querySelector(".offer-section");
const offerBtn = document.querySelector("#offerBtn");

const status = document.querySelector(".status-section");
const statusBtn = document.querySelector("#statusBtn");

const info = document.querySelector(".info-section");
const infoBtn = document.querySelector("#infoBtn");

const scrollAnimationElements = document.getElementsByClassName(
  "scroll-animation"
);

window.addEventListener("wheel", (event) => {
  if (window.scrollY % window.innerHeight === 0) {
    if (event.deltaY > 0) {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    } else if (event.deltaY < 0) {
      window.scrollBy({
        top: -window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }
});

window.addEventListener("scroll", () => scrollAnimation());

const scrollAnimation = () => {

  for (let i = 0; i < scrollAnimationElements.length; i++) {

    const element = scrollAnimationElements[i];

    const scrollY = window.scrollY;
    const wHeight = window.innerHeight;

    const eOffsetTop = element.offsetTop;

    const transformBy = 300;

    if (scrollY + wHeight > eOffsetTop) {
      if (scrollY + wHeight > eOffsetTop + wHeight)
        element.style.transform = `translateY(-${transformBy}px)`;
      else element.style.transform = `translateY(0)`;
    } else element.style.transform = `translateY(${transformBy}px)`;
    
  }

};

homeBtn.addEventListener("click", () => {
  openNav();
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

aboutUsBtn.addEventListener("click", () => scrollTo(aboutUs));

offerBtn.addEventListener("click", () => scrollTo(offer));

statusBtn.addEventListener("click", () => scrollTo(status));

infoBtn.addEventListener("click", () => scrollTo(info));
