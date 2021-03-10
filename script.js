let shapes = document.querySelectorAll('.draggable');
let active;

console.log(shapes);

for (let i = 0; i < shapes.length; i++) {
  shapes[i].addEventListener('click', (e) => {
    removeActive();
    shapes[i].classList.add('active');
    // e.stopPropagation();
  });
  // shapes[i].addEventListener('mouseout', (e) => {
  //   removeActive();
  // });
}

function removeActive() {
  active = getActive();
  if (active) {
    active.classList.remove('active');
  }
}

function getActive() {
  return document.querySelector('.active');
}

window.addEventListener('mousedown', (e) => {
  active = getActive();
  if (active) {
    active.style.position = 'absolute';

    document.body.append(active);

    moveTo(e.pageX, e.pageY);

    function moveTo(pageX, pageY) {
      active.style.left = pageX - active.offsetWidth / 2 + 'px';
      active.style.top = pageY - active.offsetHeight / 2 + 'px';
    }

    function onMouseMove(e) {
      moveTo(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);
    active.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
    };

    removeActive();
  }
});
