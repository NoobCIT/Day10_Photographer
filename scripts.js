let closeButton = document.querySelector('.close-button');
let menu = document.querySelector('.menu');
closeButton.addEventListener('click', showMenu);

function showMenu() {
  closeButton.classList.toggle('show');
  menu.classList.toggle('show');
}

menu.addEventListener('click', navToItem);

function navToItem() {
  if (event.target.nodeName == 'A') {
    closeButton.classList.toggle('show');
    menu.classList.toggle('show');
  }
}
