
new btnBasket({
    bodyImg: '.focusItem__footer-1 .focusItem__body img',
    facadeImg: '.focusItem__footer-1 .focusItem__facade img',
    btn: '.focusItem__footer-1 .focusItem__button'
});
new btnBasket({
    bodyImg: '.focusItem__footer-2 .focusItem__body img',
    facadeImg: '.focusItem__footer-2 .focusItem__facade img',
    btn: '.focusItem__footer-2 .focusItem__button'
});
new btnBasket({
    bodyImg: '.focusItem__footer-3 .focusItem__body img',
    facadeImg: '.focusItem__footer-3 .focusItem__facade img',
    btn: '.focusItem__footer-3 .focusItem__button'
});
new btnBasket({
    bodyImg: '.focusItem__footer-4 .focusItem__body img',
    facadeImg: '.focusItem__footer-4 .focusItem__facade img',
    btn: '.focusItem__footer-4 .focusItem__button'
});
new btnBasket({
    bodyImg: '.focusItem__footer-5 .focusItem__body img',
    facadeImg: '.focusItem__footer-5 .focusItem__facade img',
    btn: '.focusItem__footer-5 .focusItem__button'
});
new btnBasket({
    bodyImg: '.focusItem__footer-6 .focusItem__body img',
    facadeImg: '.focusItem__footer-6 .focusItem__facade img',
    btn: '.focusItem__footer-6 .focusItem__button'
});
function btnBasket(obj){
    var a = document.querySelectorAll(obj.bodyImg);
    var b = document.querySelectorAll(obj.facadeImg);
    var btn = document.querySelector(obj.btn);

    for(var i = 0; i < a.length; i++){
        a[i].onclick = function(e){
            if (this.classList.contains('img__active')){
                this.classList.remove('img__active');
            }else{
                for(var j=0; j < a.length; j++){
                    if (a[j].classList.contains('img__active')){
                        a[j].classList.remove('img__active');
                    } 
                }
                this.classList.toggle('img__active');
                colorBtnBasket ();
            }
            colorBtnBasket ();
        }
    }

    for(var i = 0; i < b.length; i++){
        b[i].onclick = function(e){
            if (this.classList.contains('img__active')){
                this.classList.remove('img__active');
            }else{
                for(var j=0; j < b.length; j++){
                    if (b[j].classList.contains('img__active')){
                        b[j].classList.remove('img__active');
                    } 
                }
                this.classList.toggle('img__active');
                colorBtnBasket ();
            }
            colorBtnBasket ();
        }
    }
    
    function colorBtnBasket (){
        var flag1 = false;
        var flag2 = false;
         for(var i = 0; i < a.length; i++){
            if(a[i].classList.contains('img__active')){
                flag1=true;            
            }
        }
    
        for(var i = 0; i < b.length; i++){
            if(b[i].classList.contains('img__active')){
                flag2=true;            
            }
        }
        
        if((flag1)&&(flag2)){  
            btn.classList.add('button-active');
        }else{
            btn.classList.remove('button-active');
        }
    }
}