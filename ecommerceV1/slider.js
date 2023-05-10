let slideIndex = 1;
// initializes the slideIndex to 1 
showSlides(slideIndex);
// first slide should be displayed when page loads. 


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// controlled by next and previous buttons te determine to move forward or backwards. calls the slow slides function

// Thumbnail image controls
// controls which slide to display 
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}