//  add class names

let covers = document.querySelectorAll('.cover');

const hover = (e) => {
    e.target.classList.remove('goDown');
    e.target.classList.add('goUp');
}

const leave = (e) => {
    e.target.classList.remove('goUp');
    e.target.classList.add('goDown');
}

for ( let i = 0; i < covers.length; i++ ) {
    covers[i].addEventListener('mouseenter', hover);
    covers[i].addEventListener('mouseleave', leave);
}
