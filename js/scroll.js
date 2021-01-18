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

window.addEventListener("wheel", (event) => {

  if(window.scrollY%window.innerHeight === 0){
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

homeBtn.addEventListener("click", () => {
  openNav();
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

aboutUsBtn.addEventListener("click", () => scrollTo(aboutUs));

offerBtn.addEventListener("click", () => scrollTo(offer));

statusBtn.addEventListener("click", () => scrollTo(status));
