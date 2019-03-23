/*
*   author: Wiebe Ranzijn MD1A
*/

// menu bar navigation
let move_content = document.querySelector('.move_content'),
    move_menu = document.querySelector('.move_menu'),
    move_all = document.querySelector('.move_all');

move_content.addEventListener('click', () => location.href = 'contentMoves.html');
move_menu.addEventListener('click', () => location.href = 'menuMoves.html');
move_all.addEventListener('click', () => location.href = 'allMoves.html');


// menu icon btn
let btn_menu = document.querySelector('.btn_menu');
btn_menu.addEventListener('click', () => {
    if (btn_menu.classList[1]) {
        btn_menu.classList.remove('clicked');
        console.log(btn_menu.classList);
        menuClose();
        return;
    }
    btn_menu.classList.add('clicked');
    menuOpen();
    console.log(btn_menu.classList);
});


// open & close side menu
let side_menu = document.querySelector('.side_menu');
function menuOpen() {
    side_menu.style.left = '0px';
}
function menuClose() {
    side_menu.style.left = '-300px';
}
