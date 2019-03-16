const modaal = document.querySelectorAll('.cover');

for (let i = 0; i < modaal.length; i++) {
    let modaalNode = modaal[i];
    modaalNode.parentNode.removeChild(modaalNode);
}