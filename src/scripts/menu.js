var wWidth = 0;
var wHeight = 0;

var dropDowns = document.querySelectorAll('.dropdown');

var bBackIsDisplayed = false;
var bIconIsDisplayed = false;
	
window.addEventListener("resize", checkSize);

function btnClose(){
	document.getElementById("back").style.display="none";
	
	document.getElementById("icon").style.display="block";
	document.getElementById("myDropdown2").style.display="none";
	document.getElementById("myDropdown3").style.display="none";
	document.getElementById("myDropdown4").style.display="none";
	bIconIsDisplayed = true;
	bBackIsDisplayed = false;	
	
	var x = document.getElementById("myTopnav");
	x.className = "topnav";
	/*****/
	document.querySelector('.mainmenu__logo').style.display = 'flex';
	document.querySelector('.mainmenu__search').style.display = 'block';
	document.querySelector('.mainmenu__basket').style.display = 'block';
	var dropdowns = document.getElementsByClassName("dropdown-content");
	for (var d = 0; d < dropdowns.length; d++) {			
		var openDropdown = dropdowns[d];	
		openDropdown.style.display="none";
	}
	document.querySelector('.upsection').style.display = "none";
	document.querySelector('.container').classList.remove('burgerInfo');
	document.querySelector('.container').style.display="block";
	
	/*****/
}

function btnBackFunction(e) {
	var attr = e.getAttribute('data-value');
	var s = 'myDropdown'+ attr;
	if(attr != 2){
		document.getElementById(s).style.display="none";
		document.getElementById("myDropdown2").style.display="block";
		document.getElementById("spanBack").innerHTML="Все товары";
		document.getElementById("aArrowBack").setAttribute("data-value", 2);	
		document.getElementById("aBack").setAttribute("data-value", 2);
	}else{
		document.querySelector('.container').style.display="flex";
		document.getElementById("back").style.display="none";
		document.getElementById("myTopnav").style.display="block";
		document.getElementById("icon").style.display="none";
		var sub = document.querySelectorAll('.dropdown');
		for (var i =0; i < sub.length-1; i++){
			sub[i+1].style.display = "none";
		}
		bIconIsDisplayed = true;
		bBackIsDisplayed = false;
	}
}

function checkSize() {
	if (document.getElementById("myDropdown").classList.contains('show')){
		document.getElementById("myDropdown").classList.remove("show");
	}		
	
	if(document.getElementById("myTopnav").classList.contains('responsive')){
		document.getElementById("myTopnav").classList.remove("responsive");
	}

	
	for(var i=0; i < dropDowns.length; i++){
		Array.from(document.querySelectorAll('.dropdown-'+(i+1)))
    	.forEach(function(val) {
        	val.style.display = 'none';
	});
	}

			
	wWidth = window.innerWidth;
	wHeight = window.innerHeight;
        		
	if(wWidth > 730) {
		
		document.getElementById("myDropdown2").style.display="none";
		document.getElementById("icon").style.display="none";
		document.getElementById("back").style.display="none";
		document.querySelector('.upsection').style.display ="block";   
		document.getElementById("myTopnav").style.display="flex";
		bBackIsDisplayed = false;
		bIconIsDisplayed = true;
	} else {
			
			document.getElementById("myTopnav").style.display="flex";
			document.getElementById("back").style.display="none";
			document.getElementById("icon").style.display="inline-block";
			document.querySelector('.upsection').style.display ="none"; 
	}
	document.getElementById("back").style.display="none";
}	
//Event of burger click	
function myFunction() {
	var x = document.getElementById("myTopnav");
	document.getElementById("myTopnav").style.display="block";
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
	document.querySelector('.icon').style.display= "none";
	document.querySelector('.mainmenu__logo').style.display= "none";
	document.querySelector('.mainmenu__search').style.display= "none";
	document.querySelector('.mainmenu__basket').style.display= "none";
	document.querySelector('.upsection').style.display = "block";
	document.querySelector('.container').classList.add('burgerInfo');
	var nero = document.querySelectorAll('.nero');
	for (var i=0; i< nero.length; i++){
		nero[i].classList.remove('nero');
	}
	

}

function subMenuFn(e) {
	document.querySelector('.container').style.display="none";
	//console.log(document.querySelector('.container').style.display);
	var attr = e.getAttribute('data-value');
	//document.getElementById("myDropdown").classList.toggle("show");
	if(wWidth > 730) {
		document.getElementById("myDropdown").classList.toggle("show");	
	}else {
		document.getElementById("myTopnav").style.display="none";
	    document.getElementById("icon").style.display="none";
	    document.getElementById("back").style.display="block";
	 	if (attr==2) {
			document.getElementById("myDropdown2").style.display="block";				
			document.getElementById("spanBack").innerHTML="Все товары";
			document.getElementById("spanBack").setAttribute("data-value", 2);
			document.getElementById("aArrowBack").setAttribute("data-value", 2);
			document.getElementById("aBack").setAttribute("data-value", 2);
			document.querySelector('.mainmenu__logo').style.display = 'none';
			document.querySelector('.mainmenu__search').style.display = 'none';
		 }
		 if (attr > 2){
			document.getElementById("myDropdown" + attr).style.display="block";
			var z = 'a[data-value="'+ attr + '"]';
			document.querySelector('#myDropdown2').style.display = "none";
			document.getElementById("spanBack").innerHTML = document.querySelector(z).textContent;
			document.getElementById("spanBack").setAttribute("data-value", 2);
			document.getElementById("aArrowBack").setAttribute("data-value", attr);
			document.getElementById("aBack").setAttribute("data-value", attr)
		 }
		
	   	bIconIsDisplayed = false;
	   	bBackIsDisplayed = true;		   
	}
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e){
	if (!e.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var d = 0; d < dropdowns.length; d++) {			
			var openDropdown = dropdowns[d];	
			if (openDropdown.classList.contains('show')) {	
					openDropdown.classList.remove('show');
				}
			}
		}
}
	
document.addEventListener("DOMContentLoaded", function(event) {	
	checkSize();		
	bBackIsDisplayed = false;
	bIconIsDisplayed = false;	
	if(wWidth <= 730){
		bIconIsDisplayed = true;
	}
});	
	
