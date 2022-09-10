const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".open_menu");
const closeMenu = document.querySelector(".close_menu");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);
      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-50% 0px -50% 0px" }
);

window.addEventListener("load", () => {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 400px
        breakpoint: 400,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 800px
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });
  new Glider(document.querySelector(".carousel__bass"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".carousel__indicadores__bass",
    arrows: {
      prev: ".carousel__anterior__bass",
      next: ".carousel__siguiente__bass",
    },
    responsive: [
      {
        // screens greater than >= 400px
        breakpoint: 400,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 800px
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  $("#onload").fadeOut();
  $("body").removeClass("hidden");
  menuScroll();
  // window.sr = ScrollReveal();

  // sr.reveal(".guitars", {
  //   duration: 3000,
  //   origin: "bottom",
  //   distance: "-100px",
  // });

  // sr.reveal(".bass", {
  //   duration: 3000,
  //   origin: "right",
  //   distance: "-100px",
  // });

  // sr.reveal(".sucursales", {
  //   duration: 3000,
  //   origin: "top",
  //   distance: "-100px",
  // });

  // sr.reveal(".extra__fender__guitars", {
  //   duration: 3000,
  //   origin: "right",
  //   distance: "-100px",
  // });

  // sr.reveal(".extra__squier__bass", {
  //   duration: 3000,
  //   origin: "right",
  //   distance: "-100px",
  // });

  // sr.reveal(".extra__2", {
  //   duration: 3000,
  //   origin: "bottom",
  //   distance: "-100px",
  // });
});

function menuScroll() {
  scroll = document.documentElement.scrollTop;
  nav = document.querySelector(".nav_bar");
  if (scroll > 20) {
    nav.classList.add("nav_mod");
  } else if (scroll < 20) {
    nav.classList.remove("nav_mod");
  }
}

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

window.addEventListener("scroll", () => {
  menuScroll();
});

new TypeIt("#initial_span_typeit", {
  speed: 50,
  startDelay: 900,
})
  .type("Lo mejor en audio e instrumentos. ", { delay: 100 })
  .pause(300)
  .type(`Solo en <strong style = "color: #e5e5e5">Terror Music</strong>`, {
    delay: 200,
  })
  .go();

const menuLinks = document.querySelectorAll(`.menu a[href^="#"]`);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});