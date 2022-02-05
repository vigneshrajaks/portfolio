function pagetransition() {
  const tl = gsap.timeline();
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "top left",
    stagger: 0.2,
  });
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.1,
  });
}

function contentAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  const newTl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.to(" .nav-items li", {
    y: "0%",
    duration: 0.5,
    stagger: 0.25,
  });

  tl.to(".hero-title-text, .hero-smile", {
    // translateY: -10,
    y: "0%",
    duration: 1.3,
    stagger: 0.25,
  });
  //   tl.to(".hero-subtitle", {
  //     y: "0%",
  //     duration: 0.5,
  //   });
  //   tl.from(".hero-title", {
  //     duration: 0.5,
  //     translateY: 50,
  //     opacity: 0,
  //   });
  tl.from(
    ".hero-subtitle",
    {
      duration: 1,
      translateY: 50,
      opacity: 0,
    },
    "-=1"
  );

  newTl.to(".about-title", {
    y: "0%",
    duration: 1,
    delay: 0.5,
  });

  newTl.to(
    ".about-img",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1,
    },
    "-=1"
  );
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pagetransition();
        await delay(1500);
        done();
      },
      async enter(data) {
        contentAnimation();
      },

      async once(data) {
        contentAnimation();
      },
    },
  ],
});

/* ****************** */
/* SCROLL REVEAL  */
/* ****************** */

const sr = ScrollReveal({
  distance: "150px",
  duration: 2200,
  //   reset: true,
});

sr.reveal(`.project-text-box, .hire-me-wrapper, .footer-wrapper`, {
  origin: "bottom",
  interval: 200,
  opacity: 0,
  delay: 150,
  easing: "ease",
});

sr.reveal(`.project-img-box, .mail`, {
  origin: "top",
  interval: 200,
  opacity: 0,
  delay: 150,
  easing: "ease",
});

sr.reveal(`.footer-wrapper`, {
  origin: "bottom",
  opacity: 0,
  easing: "ease",
});
