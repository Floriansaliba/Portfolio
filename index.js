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
    <img class="project__image-box__image" src="./assests/pictures/projects/${project.image}">
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
    <p id="modal__description">${filteredProject[0].about}</p>
     <div id="modal__images" id="modal__images"></div>
    <ul id="modal__tags" id="tags"></ul>
    
    `;
    displayModal();

    const wePageLink = `<a href=${filteredProject[0].link} target="_blank"><svg class="modal-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></a>`;
    const githubLink = `<a href=${filteredProject[0].github} target="_blank"><svg class="modal-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>`;

    const fillModal = () => {
      if (filteredProject[0].link === "" && filteredProject[0].github === "") {
        modalFrame.innerHTML = modalContent;
      } else if (
        filteredProject[0].link === "" &&
        filteredProject[0].github !== ""
      ) {
        modalFrame.innerHTML = modalContent + githubLink;
      } else if (
        filteredProject[0].link !== "" &&
        filteredProject[0].github === ""
      ) {
        modalFrame.innerHTML = modalContent + wePageLink;
      } else if (
        filteredProject[0].link !== "" &&
        filteredProject[0].github !== ""
      ) {
        modalFrame.innerHTML = modalContent + wePageLink + githubLink;
      }
    };

    fillModal();

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
