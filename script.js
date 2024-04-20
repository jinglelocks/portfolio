var btnWebDev = document.getElementById('btn-web-dev');
document.querySelector('content-web-dev');

function toggleDiv() {
  console.log('test');
  btnWebDev.classList.add('web-dev-selected');
  console.log('test');
}

btnWebDev.addEventListener('click', toggleDiv);