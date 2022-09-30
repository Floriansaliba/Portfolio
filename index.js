import projects from "./services/constant/projects.js";

// init AOS

AOS.init();

// Click sur l'élémént de scroll

let viewportHeight = window.innerHeight;
console.log(viewportHeight);

const scrollButton = document.getElementsByClassName("scroll-down")[0];

scrollButton.addEventListener("click", () => {
  window.scroll({
    top: viewportHeight,
    left: 0,
    behavior: "smooth",
  });
});

// AFFICHAGE DES PROJETS

const projectsFrame = document.getElementById("projects");

const showProjects = () => {
  projects.forEach((project) => {
    projectsFrame.innerHTML += `
  <div class="project" id=${project.id}>
  <div class="project__image-box">
    <img class="project__image-box__image" src="assests/pictures/projects/${project.image}">
  </div>
  <div class="project__image-box__hover-frame">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/></svg>
  </div>
  <div class="project__text-box">
    <h3 class="project__text-box__title">${project.title}</h3>
    <p class="project__text-box__description">${project.description}</p>
  </div>
</div>
  `;
  });
};
showProjects();

// AFFICHAGE DE LA MODALE

const modal = document.getElementById("modal");
const modalFrame = document.getElementById("modal__frame");
console.log(modalFrame);

const displayModal = () => {
  modal.className = "modal-opened";
};

const closeModal = () => {
  modal.className = "modal-closed";
};

// Click SUR UN PROJET

const projectElements = document.querySelectorAll(".project");

projectElements.forEach((project) => {
  //Listener sur le projet cliqué
  project.addEventListener("click", () => {
    const projectId = Number(project.id);
    const filteredProject = projects.filter((project) => {
      return project.id === projectId;
    });
    const modalContent = `
    <div id="modal__close">X</div>
    <h2 id="modal__title">${filteredProject[0].title}</h2>
    <p id="modal__description">${filteredProject[0].description}</p>
     <div id="modal__images" id="modal__images"></div>
    <ul id="modal__tags" id="tags"></ul>
    `;
    displayModal();
    modalFrame.innerHTML = modalContent;

    const closeButton = document.getElementById("modal__close");
    const tags = document.getElementById("modal__tags");
    const images = document.getElementById("modal__images");

    // Affichage des tags
    filteredProject[0].technologies.forEach((tag) => {
      tags.innerHTML += `<li class="modal-tags">${tag}</li>`;
    });

    // Affichage des images
    filteredProject[0].images.forEach((image) => {
      images.innerHTML += `<img class="modal-image" src="./assests/pictures/projects/${image}">`;
    });

    //Permettre la fermeture
    closeButton.addEventListener("click", () => {
      closeModal();
    });
  });
});

// Lorsque l'utilisateur scroll jusqu'en haut de la page

const contactBar = document.getElementsByClassName("contact-bar")[0];
const header = document.getElementsByClassName("header")[0];

document.addEventListener("scroll", (e) => {
  if (scrollY === 0) {
    contactBar.style.display = "flex";
    header.style.top = "50px";
  } else {
    contactBar.style.display = "none";
    header.style.top = "0";
  }
});

// Event when user is at the bottom of the page

// window.onscroll = function () {
//   if (
//     window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
//     document.getElementById("top") === null
//   ) {
//     document.body.innerHTML += `<div id="top">
//     <svg id="top__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
//   </div>`;
//   } else {
//     const arrow = document.getElementById("top");
//     if (document.getElementById("top")) {
//       arrow.remove();
//     }
//   }
// };

// DROPDOWN

const dropdownHead = document.querySelectorAll(".dropdown__head");

const ToggleDisplay = (e) => {
  if (e.style.display === "none") {
    e.style.display = "flex";
  } else {
    e.style.display = "none";
  }
};

const ToggleArrows = (firstElement, secondElement) => {
  if (firstElement.style.display === "flex") {
    firstElement.style.display = "none";
    secondElement.style.display = "flex";
  } else {
    firstElement.style.display = "flex";
    secondElement.style.display = "none";
  }
};

dropdownHead.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    ToggleDisplay(dropdown.nextElementSibling);
    ToggleArrows(
      dropdown.getElementsByClassName("down")[0],
      dropdown.getElementsByClassName("up")[0]
    );
  });
});

//MAP

const init = () => {
  const parcThabor = {
    lat: 48.1143884,
    lng: -1.669494,
  };

  const zoomLevel = 7;

  let map = L.map("map").setView([48.113387683515874, -1.677975194680944], 11);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  var marker = L.marker([48.08128768398237, -1.718399453796193]).addTo(map);
};

init();

// Scroll to top

const goToTopElement = document.getElementById("top");

goToTopElement.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
