var btnUp = document.querySelector('.btnup');

window.onscroll = function () {
    
    var scrolled = window.pageYOffset;    
    if (document.body.clientWidth < 500) {
        btnUp.style.display = 'none';
    }else{
    if ((scrolled > 500 )&&(document.body.clientWidth > 500)) {
        btnUp.style.display = 'block';
    }
    if ((scrolled < 500 )&& (document.body.clientWidth > 500)) {
        btnUp.style.display = 'none';
    }
}
}

btnUp.onclick = function(){
    //window.scrollTo(0, 0);
    up();
    
}

function up() {
    var t;
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        t = setTimeout('up()',20);
    } else clearTimeout(t);
  return false;
}