function Popup(options){
    this.modal = document.querySelector(options.modal);
    this.overlay = document.querySelector(options.overlay);
    
    var popup = this;
    
    this.open = function(content){
        popup.modal.innerHTML = content;
        popup.overlay.classList.add('open');
        popup.modal.classList.add('open');
    }
    
    this.close = function(){
        popup.overlay.classList.remove('open');
        popup.modal.classList.remove('open');
    }
    
    this.overlay.onclick = popup.close;
}


    var p = new Popup({
        modal: '.modal',
        overlay: '.overlay'
    });
    
    document.querySelector('.up__city').onclick = function(){
        var form = document.querySelector('.for-city-popup');
        p.open(form.innerHTML);
        var city = document.querySelector('.up__city span').innerHTML;
        document.getElementById('city').innerHTML = city;
        document.querySelector('.no').onclick = function(){
            var form = document.querySelector('.for-cityChoice-popup');
            p.open(form.innerHTML);
            var search = document.getElementById('citySearch');
            var cities = document.querySelectorAll('.cityChoice-popup ul li');
            var n = [];
            for(var i = 0; i < cities.length; i++){
                n.push(cities[i].innerHTML);
                cities[i].onclick = function(){
                    search.value = this.innerHTML;
                    document.querySelector('.up__city span').innerHTML = this.innerHTML;
                }
            }
            search.onchange = function(){
                var s = 0;
                for(var i = 0; i < n.length; i++){
                    if (n[i] == this.value) {
                        s++;
                    }
                }
                if (s > 0){
                    document.querySelector('.up__city span').innerHTML = this.value;
                } else {
                    alert('Информацию о возможности доставки товара в Ваш город уточняйте у оператора.');
                    document.querySelector('.up__city span').innerHTML = 'Ижевск';
                };       
            }
            document.querySelector('.closePopup i').onclick = function(){
                p.close();            
            };
            
        };
        document.querySelector('.yes').onclick = function(){
            p.close();            
        };
        document.querySelector('.closePopup i').onclick = function(){
            p.close();            
        };
    };