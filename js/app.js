(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($("#shownewnav .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		// hero-slider
		$(".hero-slider").flexslider({
			controlNav: false,
			directionNav: true,
			animation: "fade",
			prevText:'<i class="fa fa-angle-left"></i>',
			nextText:'<i class="fa fa-angle-right"></i>',
		});
	});

})(jQuery, document, window);

// Modal code

var modalNew = document.getElementById('imgModalDiv');
var imagesNew = document.getElementsByClassName('imagelist-img');
var captionTextNew = document.getElementById("captionModal");


for (var i = 0; i < imagesNew.length; i++) {
	var img = imagesNew[i];
	img.onclick = function(evt) {
		modalNew.style.display = "block";
		captionTextNew.innerHTML = this.alt;
	}
}

var span = document.getElementsByClassName("closeModal")[0];
span.onclick = function() {
	modalNew.style.display = "none";
}

// Modal escaping
$(document).keyup(function(e) {
	if (e.keyCode == 27) { // 27 is the escape key
	    modalNew.style.display = "none";
   }
});

// Switching images in Modal code

var slideIndex = 1;
var currentSlide = 1;
var currentSlideInt = 0;

function showCurrentImage(clicked_id) {
	currentSlide = clicked_id;
	slideIndex = currentSlide; 
	currentSlideInt = parseInt(currentSlide);
}
              
showDivs(currentSlideInt);
              
function plusDivs(y) { showDivs(currentSlideInt += y); }
function currentDiv(n) { showDivs(currentSlideInt); }

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("modalSlides");
	if (n > x.length) {currentSlideInt = 1;}    
    if (n < 1) {currentSlideInt = x.length}
    for (i = 0; i < x.length; i++) { x[i].style.display = "none"; }	
	x[currentSlideInt-1].style.display = "block";  
}

function showMapInfo() {
	var x = document.getElementById("mapInfo");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function showFullRules() {
	var x = document.getElementById("FullRules");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function showBasicRules() {
	var x = document.getElementById("BasicRules");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}