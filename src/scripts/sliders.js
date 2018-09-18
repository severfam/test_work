new Slider({
    data: '.reviews .wrapper .comments .comment',
    btnPrev: '.reviews .wrapper .buttons .prev',
    btnNext: '.reviews .wrapper .buttons .next'
});

function Slider(obj) {
    this.images = document.querySelectorAll(obj.data);
    var slider = this;
    var i = 0;
    var slider = this;
    this.prev = function () {
        slider.images[i].classList.remove('showed');
        i--;
       if (i < 0) {
            i = slider.images.length - 1;
        }
        slider.images[i].classList.add('showed');
    }
    this.next = function () {
        slider.images[i].classList.remove('showed');
        i++;
        if (i >= slider.images.length) {
            i = 0;
        }
        slider.images[i].classList.add('showed');
    }
    document.querySelector(obj.btnPrev).onclick =  slider.prev;
    document.querySelector(obj.btnNext).onclick =  slider.next;
}
//////////////////////////////////////////////////////////////////////
new SliderUlLi ({
    items: '.galary-1 .items',
    allItem: '.galary-1 .items .item',
    btnPrev: '.galary-1 .button_prev',
    btnNext: '.galary-1 .button_next'
});
new SliderUlLi ({
    items: '.galary-2 .items',
    allItem: '.galary-2 .items .item',
    btnPrev: '.galary-2 .button_prev',
    btnNext: '.galary-2 .button_next'
});
new SliderUlLi ({
    items: '.galary-3 .items',
    allItem: '.galary-3 .items .item',
    btnPrev: '.galary-3 .button_prev',
    btnNext: '.galary-3 .button_next'
});
new SliderUlLi ({
    items: '.galary-4 .items',
    allItem: '.galary-4 .items .item',
    btnPrev: '.galary-4 .button_prev',
    btnNext: '.galary-4 .button_next'
});
new SliderUlLi ({
    items: '.galary-5 .items',
    allItem: '.galary-5 .items .item',
    btnPrev: '.galary-5 .button_prev',
    btnNext: '.galary-5 .button_next'
});
new SliderUlLi ({
    items: '.galary-6 .items',
    allItem: '.galary-6 .items .item',
    btnPrev: '.galary-6 .button_prev',
    btnNext: '.galary-6 .button_next'
});
function SliderUlLi(obj){
    this.items = document.querySelector(obj.items);
    this.data = document.querySelectorAll(obj.allItem);

    var slider = this;
    var pos = 0;
    this.prev = function () {
        pos = pos - 1;
        if (pos < 0) {
            pos = slider.data.length-1;
            slider.setTransform();
        }else{
            pos = Math.max(pos, 0);
            slider.setTransform();
        }
    }
    this.next = function () {
        pos= pos + 1;
        if(pos > slider.data.length-1){
            pos = 0;
            slider.setTransform();
        }else{
            pos = Math.min(pos, slider.data.length -1);
            slider.setTransform();
        };
    }
    this.setTransform = function (){
        slider.items.style['transform'] = 'translate3d(' + (-pos *
            (slider.items.offsetWidth + 3)) + 'px,0,0)';
    }

    document.querySelector(obj.btnPrev).onclick =  slider.prev;
    document.querySelector(obj.btnNext).onclick =  slider.next;
    window.addEventListener('resize', this.setTransform);
}
