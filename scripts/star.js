window.addEventListener("load", (event) => {
  console.log("ページが完全に読み込まれました");
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 597,
        density: { enable: true, value_area: 7733.646887996271 },
      },
      color: { value: "#ffe100" },
      shape: {
        type: "star",
        stroke: { width: 5, color: "#ffe100" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          opacity_min: 0.35731397341259186,
          sync: false,
        },
      },
      size: {
        value: 8.017060304327615,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 224.4776885211732,
        color: "#ffffff",
        opacity: 0.1683582663908799,
        width: 1.122388442605866,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "bubble" },
        resize: true,
      },
      modes: {
        grab: { distance: 401.97822008916586, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
});
