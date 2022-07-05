window.addEventListener("load", (event) => {
  console.log("ページが完全に読み込まれました");

  ScrollReveal({
    reset: false,
    distance: "50px",
    duration: 1000,
    delay: 100,
    opacity: 0,
    viewFactor: 0.2,
    interval: 100,
  });

  ScrollReveal().reveal(".main-title,.sub-title", {
    delay: 200,
    origin: "bottom",
    interval: 200,
  });
  ScrollReveal().reveal(".img-wrap", {
    delay: 200,
    scale: 0.5,
  });
  ScrollReveal().reveal(".left", {
    delay: 200,
    origin: "left",
  });
  ScrollReveal().reveal(".right", {
    delay: 200,
    origin: "right",
  });
  ScrollReveal().reveal(".mobile-img", {
    delay: 200,
    origin: "top",
    interval: 400,
  });
  ScrollReveal().reveal(".works__item", {
    delay: 200,
    origin: "bottom",
  });

});
