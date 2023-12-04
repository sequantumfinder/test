var typed = new Typed(".text", {
  strings: ["FrontEnd Developer", "Youtuber", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const togglebtn = document.querySelector(".nav-toggle");
const navmenu = document.querySelector(".navbar");

togglebtn.addEventListener("click", function () {
  navmenu.classList.toggle("showmenu");
});
