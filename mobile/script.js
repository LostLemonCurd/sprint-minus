let burger = document.querySelector('#burger');
console.log(burger);
let nav = document.querySelector('#nav');
console.log(nav);


burger.addEventListener('click', function(){
    console.log('entered event');
    let countNav = 0
    if (countNav%2){
        nav.classList.replace('navOff', 'navOn'); 
        countNav ++;
    } else {
        nav.classList.replace('navOn', 'navOff');
        countNav ++;
    }
});

