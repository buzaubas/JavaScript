// function getRandom(){
//     const rndInt = Math.floor(Math.random() * 100) + 1;
//     return rndInt;
// }

// function randomize() {
//     const count = document.getElementById('count');
//     count.innerText = getRandom();
// }

// const coords = document.getElementById('coords');
// coords.onmousemove = (event) => {
//     console.log(event.offsetX);
//     coords.innerText = `X = ${event.offsetX}, Y = ${event.offsetY}`;
// }

// coords.onmousedown = () => {
//     console.log('Click-click');
// }

// coords.oncontextmenu = (e) =>{
//     e.preventDefault();
//     console.log('Clack-clack');
// }

function showHide() {
    const item = document.getElementById('showHide');
    if (item.style.display !== 'none') {
        item.style.display = 'none';
    } else{
        item.style.display = 'block';
    }
}