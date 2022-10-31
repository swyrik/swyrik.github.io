var linkElements = document.querySelectorAll(".links li a");
var linksPanel = document.querySelector(".linkspanel");
var linksPanelBg = document.querySelector(".linkspanel-bg");
var linkPanelElements = document.querySelectorAll(".linkspanel li a");
var experienceElements = document.querySelectorAll("div.experience > div");
var companyElements = document.querySelectorAll(".companies li a");
var mainDivElements = document.querySelectorAll(".main > div");

document.addEventListener("DOMContentLoaded", () => {
  // work experience
  companyElements.forEach((element) => {
    if (element.classList.contains("companyActive")) {
      experienceElements.forEach((expElement) => {
        if (
          (!expElement.classList.contains("show") ||
            !expElement.classList.contains("show_grid")) &&
          expElement.id == element.parentElement.id
        ) {
          expElement.classList.add("show");
        }
      });
    }
  });

  // Main Div Elements
  document.querySelector("div.main > div:first-child").classList.add("show");
  document.querySelector(".links li a:first-child").classList.add("linkActive");
});

linkElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    makeLinkElementActive(e.target);
  });
});

function makeLinkElementActive(e) {
  linkElements.forEach((element) => {
    element.classList.remove("linkActive");
  });
  e.classList.add("linkActive");

  mainDivElements.forEach((element) => {
    element.classList.remove("show");
    element.classList.remove("show_grid");
    if (element.classList.contains(e.parentElement.id)) {
      if (element.classList.contains("workexperience")) {
        element.classList.add("show_grid");
      } else {
        element.classList.add("show");
      }
    }
  });
}

linkPanelElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    makeLinkElementActive(e.target);
  });
});

function makeLinkElementActive(e) {
  hideLinks();
  linkPanelElements.forEach((element) => {
    element.classList.remove("linkActive");
  });
  e.classList.add("linkActive");
  mainDivElements.forEach((element) => {
    element.classList.remove("show");
    element.classList.remove("show_grid");
    if (element.classList.contains(e.parentElement.id)) {
      if (element.classList.contains("workexperience")) {
        element.classList.add("show_grid");
      } else {
        element.classList.add("show");
      }
    }
  });
}

companyElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    makeCompaniesElementActive(e.target);
  });
});

function makeCompaniesElementActive(e) {
  companyElements.forEach((element) => {
    element.classList.remove("companyActive");
  });
  e.classList.add("companyActive");
  experienceElements.forEach((expElement) => {
    if (
      !expElement.classList.contains("show") &&
      expElement.id == e.parentElement.id
    ) {
      expElement.classList.add("show");
    } else {
      expElement.classList.remove("show");
    }
  });
}

function showLinks() {
  linksPanel.style.visibility = "visible";
  linksPanelBg.style.display = "block";
}

function hideLinks() {
  linksPanel.style.visibility = "hidden";
  linksPanelBg.style.display = "none";
}
