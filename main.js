let slideIndex = 0

document.addEventListener('DOMContentLoaded', function () {
  showSlides() // 슬라이드쇼 시작
  typeWriterEffect() // 타이핑 효과 시작
})

function showSlides() {
  let i
  let slides = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('dot')

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }

  slideIndex++

  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex - 1].style.display = 'block'

  dots[slideIndex - 1].className += ' active'

  setTimeout(showSlides, 2500)
}

function currentSlide(n) {
  slideIndex = n
  showManualSlide()
}

function showManualSlide() {
  let i
  let slides = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('dot')

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' activition', '')
  }

  slides[slideIndex - 1].style.display = 'block'

  dots[slideIndex - 1].className += ' activition'
}

const textToType = 'Welcome\n to the homepage\n of WonJongEun'
const typingElement = document.querySelector('#main h1')
let charIndex = 0
const typingSpeed = 100

function typeWriterEffect() {
  if (charIndex < textToType.length) {
    if (textToType.charAt(charIndex) === '\n') {
      typingElement.innerHTML += '<br>'
    } else {
      typingElement.innerHTML += textToType.charAt(charIndex)
    }
    charIndex++
    setTimeout(typeWriterEffect, typingSpeed)
  }
}
