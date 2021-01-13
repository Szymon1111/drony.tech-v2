const scrollTo = (element, block = "center") => {
  element.scrollIntoView({
    behavior: "smooth",
    block: block,
  });
};

const home = document.querySelector("body");
const homeBtn = document.querySelector("#homeBtn");

const aboutUs = document.querySelector(".aboutus-section");
const aboutUsBtn = document.querySelector("#aboutusBtn");

const offer = document.querySelector(".offer-section");
const offerBtn = document.querySelector("#offerBtn");

window.addEventListener("wheel", (event) => {
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
});

homeBtn.addEventListener("click", () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

aboutUsBtn.addEventListener("click", () => {
  scrollTo(aboutUs);
});

offerBtn.addEventListener("click", () => {
  scrollTo(offer);
});
