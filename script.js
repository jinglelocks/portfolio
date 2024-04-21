/* ----
Portfolio website styling and functionality v1.0.0
April 2024
---- */

// Variables ----

const btnWebDev = document.getElementById("btn-web-dev");
const btnSpatial = document.getElementById("btn-spatial");
const btnAutomation = document.getElementById("btn-automation");
const btnMgmt = document.getElementById("btn-mgmt");

const contentWebDev = document.querySelector(".content-web-dev");
const contentSpatial = document.querySelector(".content-spatial");
const contentAutomation = document.querySelector(".content-automation");
const contentMgmt = document.querySelector(".content-mgmt");

// Arrays ----

let contentArray = [
  contentWebDev,
  contentSpatial,
  contentAutomation,
  contentMgmt,
];

let buttonArray = [btnWebDev, btnSpatial, btnAutomation, btnMgmt];

// Functions----

function contentSwitch(e) {
  e.preventDefault()
  let button = e.target;
  let buttonID = e.target.id;
  let content;

  if (buttonID === "btn-web-dev") {
    content = contentWebDev;
  } else if (buttonID === "btn-spatial") {
    content = contentSpatial;
  } else if (buttonID === "btn-automation") {
    content = contentAutomation;
  } else if (buttonID === "btn-mgmt") {
    content = contentMgmt;
  }

  toggleDiv(content, button);
}

function toggleDiv(content, button) {
  for (let i = 0; i < contentArray.length; i++) {
    contentArray[i].classList.remove("content-selected");
    buttonArray[i].classList.remove("btn-selected");
  }
  content.classList.add("content-selected");
  button.classList.add("btn-selected");
}

function init() {
  for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", contentSwitch);
  }
}

init();
