let upButton = document.querySelector('.up-button');
let activateButton = document.querySelector('.activate-button');
let charCounter = document.querySelector('.char-counter');
let benefits = document.querySelector('.a');
let list_items = document.querySelectorAll('.list_item');

function scrol(){
     window.scrollTo(0, 2900);
}
function visibility(){
    activateButton.classList.toggle('hidden');
}
function opacity(){
    benefits.classList.remove('opacity');
}
function list_item_lets(){
    for(var i = 0; i <list_items.length; i++)
        setTimeout(list_item_opacity,1000,i);
    
}



function list_item_anim(){
    for(let item of list_items)
   item.classList.remove('list_item_anim');
}
function list_item_opacity(item){
   list_items[item].classList.remove('list_item_opacity');
    
}
window.onscroll = function () {
    charCounter.textContent = window.pageYOffset;
  if (window.pageYOffset > 1000) {
    upButton.classList.add('shown');
  }
    else{
        upButton.classList.remove('shown');
    }
};
upButton.onclick = function () {
  window.scrollTo(0, 0);
};


activateButton.onclick = function () {
setTimeout(scrol, 1500);
    this.classList.add('bounceOut');
 setTimeout(visibility,990);
 setTimeout(opacity, 2000);
 setTimeout(list_item_anim,2200); 
 setTimeout(list_item_lets,2200);
};

if(window.pageYOffset > 1000) {
  benefits.classList.add('flex');
};
