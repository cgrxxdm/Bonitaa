const yesBtn =document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Era obvio que dirias que si, tamo <3')
});

const noBtn =document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function() {
    const ramdomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+ '%');
    noBtn.style.setProperty('left',ramdomX+'%');
    noBtn.style.setProperty('transform',`translate(-${ramdomX}%,-${randomY}%)`);
})