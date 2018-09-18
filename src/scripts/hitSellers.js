var description = document.querySelectorAll('.hitsell .wrapper .products .productItem');
 
for (var i=0; i < description.length; i++) {
  description[i].onmouseover = function() {
    this.children[0].style.visibility = 'visible';
    
  };
  description[i].onmouseout = function () {
    this.children[0].style.visibility = 'hidden';
  }
}

//
var wrap = document.querySelector('.wrap');
var items = document.querySelector('.items');
var itemCount = document.querySelectorAll('.item').length;
var scroller = document.querySelector('.scroller');
var pos = 0;

function setTransform() {
    items.style['transform'] = 'translate3d(' + (-pos *
        (items.offsetWidth + 3)) + 'px,0,0)';
}

function prev(){
    pos = pos - 1;
    if (pos <0) {
        pos = itemCount-1;
        setTransform();
    }else{
    pos = Math.max(pos, 0);
    setTransform();}
}

function next(){
    console.log('next');
    pos= pos +1;
    if(pos > itemCount-1){
        pos = 0;
        setTransform();
    }else{
    pos = Math.min(pos, itemCount -1);
    setTransform();}
}

window.addEventListener('resize', setTransform);