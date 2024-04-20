const btnWebDev = document.getElementById('btn-web-dev');
const btnSpatial = document.getElementById('btn-spatial');
const btnAutomation = document.getElementById('btn-automation');
const btnMgmt = document.getElementById('btn-mgmt');

const contentWebDev = document.querySelector('.content-web-dev');
const contentSpatial = document.querySelector('.content-spatial');
const contentAutomation = document.querySelector('.content-automation');
const contentMgmt = document.querySelector('.content-mgmt');

let contentVisible = false;

function contentSwitch(e) {
  let content;
  let target = e.target.id;

  if (target === 'btn-web-dev') {
    content = contentWebDev;
  } else if (target === 'btn-spatial') {
    content = contentSpatial
  } else if (target === 'btn-automation') {
    content = contentAutomation
  } else if (target === 'btn-mgmt') {
    content = contentMgmt
  };

  toggleDiv(content, e.target);
};

function toggleDiv(content, target) {
    let contentArray = [contentWebDev, contentSpatial, contentAutomation, contentMgmt]
    let buttonArray = [btnWebDev, btnSpatial, btnAutomation, btnMgmt]
    for (let i = 0; i < contentArray.length; i++) {
      // if (contentArray[i].classList.contains('content-selected')) {
        contentArray[i].classList.remove('content-selected')
        buttonArray[i].classList.remove('btn-selected')
      // };
    };
    content.classList.add('content-selected');
    target.classList.add('btn-selected')
  };

btnWebDev.addEventListener('click', contentSwitch);
btnSpatial.addEventListener('click', contentSwitch);
btnAutomation.addEventListener('click', contentSwitch);
btnMgmt.addEventListener('click', contentSwitch);