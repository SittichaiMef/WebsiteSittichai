let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer!', 'Back-End Developer!'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,

})
//let navLinks = document.querySelectorAll('nav ul li a')

//let sections = document.querySelectorAll('section')

//window.addEventListener('scroll', function (){
//const scrollPos = window.scrollY
//sections.forEach(section => {
//if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
//navLinks.forEach(link => {
//link.classList.remove('active');
//if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
//link.classList.add('ative')
// }
// });
// }
//});
//});

function functionToActiveNav(element) {
    const elements_a = document.querySelectorAll('.nav-li-manu-a');
    elements_a.forEach((element_li_a) => {
        element_li_a.classList.remove('active');
    });
    let children = element.querySelector('a')
    children.classList.add("active");
    
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
