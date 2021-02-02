const menu = document.getElementById('menu-list')
const btMenu = document.getElementById('menu-bt')
const navbar = document.querySelector('nav')

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgb(239, 83, 80, 0.9)`);
  window.scrollY < 100 && (navbar.style.background = `transparent`);
});

btMenu.addEventListener('click', function() {
  if(menu.style.display === 'none') {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
})


function hover(x) {
  x.childNodes[1].style.display = 'block'
}

function outHover(x) {
  x.childNodes[1].style.display = 'none'
}

