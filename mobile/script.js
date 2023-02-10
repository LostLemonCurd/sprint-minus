let burger = document.querySelector('#burger');
console.log(burger);
let nav = document.querySelector('#nav');
console.log(nav);


burger.addEventListener('click', function(){
    console.log('entered event');
    if (nav.classList.contains('navOff')){
        nav.classList.replace('navOff', 'navOn'); 
    } else {
        nav.classList.replace('navOn', 'navOff');
    }
});

