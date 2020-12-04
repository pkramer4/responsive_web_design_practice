let slides = document.getElementsByClassName('slide');
let test = document.getElementById('test');
let leftButton = document.getElementById('left');
let rightButton = document.getElementById('Right');

let frontSlide = 0;

//changes all slides but current Index slide to translucent
function showCurrentSlide(testIndex) {
  for (var i = 0; i<slides.length;  i++) {
    if (i == testIndex) {
        slides[i].classList.remove('hidden');
        slides[i].classList.add('showing');
    } else {
      slides[i].classList.remove('showing');
      slides[i].classList.add('hidden');
    }
  }
}

//allows user to change slide to left
function imgLeft() {
  if (frontSlide == 0) {
    frontSlide = slides.length - 1;
    showCurrentSlide(frontSlide);
  } else {
    frontSlide -= 1;
    showCurrentSlide(frontSlide);
  }
}

function imgRight() {
  if (frontSlide == slides.length - 1) {
    frontSlide = 0;
    showCurrentSlide(frontSlide);
  } else {
    frontSlide += 1;
    showCurrentSlide(frontSlide);
  }
}

setInterval(function() {
  imgRight();
},
6000);

let navDiv = document.getElementById('navDiv');

navDiv.onclick = function() {
  navDiv.classList.add('open');
}
