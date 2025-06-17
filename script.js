/* Menu */

const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  nav.style.visibility = "visible";
  nav.classList.add("visible");
  closeMenu.style.visibility = "visible";
  menu.style.visibility = "hidden";
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("visible");
  closeMenu.style.visibility = "hidden";
  menu.style.visibility = "visible";

  setTimeout(() => {
    nav.style.visibility = "hidden";
  }, 0);
});

/* Main */

const main = document.querySelector(".main");

/* Content */
const about = document.getElementById("about");
const aboutContent = document.getElementById("about-content");

aboutContent.addEventListener("click", () => {
  about.classList.toggle("active");
  projects.classList.remove("active");
  contact.classList.remove("active");

  main.style.visibility = "hidden";

  if (!about.classList.contains("active")) {
    main.style.visibility = "visible";
  }

  nav.classList.remove("visible");
  closeMenu.style.visibility = "hidden";
  menu.style.visibility = "visible";

  setTimeout(() => {
    nav.style.visibility = "hidden";
  }, 0);
});

/* Projects */
const projects = document.getElementById("projects");
const projectsContent = document.getElementById("projects-content");

projectsContent.addEventListener("click", () => {
  projects.classList.toggle("active");
  about.classList.remove("active");
  contact.classList.remove("active");

  main.style.visibility = "hidden";

  if (!projects.classList.contains("active")) {
    main.style.visibility = "visible";
  }

    nav.classList.remove("visible");
  closeMenu.style.visibility = "hidden";
  menu.style.visibility = "visible";

  setTimeout(() => {
    nav.style.visibility = "hidden";
  }, 0);
});

/* Contact */
const contact = document.getElementById("contact");
const contactContent = document.getElementById("contact-content");

contactContent.addEventListener("click", () => {
  contact.classList.toggle("active");
  projects.classList.remove("active");
  about.classList.remove("active");

  main.style.visibility = "hidden";

  if (!contact.classList.contains("active")) {
    main.style.visibility = "visible";
  }

    nav.classList.remove("visible");
  closeMenu.style.visibility = "hidden";
  menu.style.visibility = "visible";

  setTimeout(() => {
    nav.style.visibility = "hidden";
  }, 0);
});
