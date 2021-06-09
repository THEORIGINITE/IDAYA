var slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
  displaySlides((slide_index += n));
}
function currentSlide(n) {
  displaySlides((slide_index = n));
}
function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}
setInterval(() => {
    nextSlide(1);
}, 4000);




const header = document.getElementById('header');
window.document.addEventListener('scroll' , ()=>{
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 30) {
    document.querySelector(".nav_first").style.background = "white";

    document.querySelector(".container_header_hro").style.maxWidth = "1000%";
  } else{
    document.querySelector(".nav_first").style.background = "none";

  }
})