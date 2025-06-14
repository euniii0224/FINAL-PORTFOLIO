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

const canvas = document.getElementById('snow')
const ctx = canvas.getContext('2d')

let width, height
function resize() {
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = width
  canvas.height = height
}
resize()
window.addEventListener('resize', resize)

const snowflakes = []
const maxFlakes = 100

function random(min, max) {
  return Math.random() * (max - min) + min
}

class Snowflake {
  constructor() {
    this.x = random(0, width)
    this.y = random(-height, 0)
    this.radius = random(1, 4)
    this.speed = random(1, 3)
    this.wind = random(-0.5, 0.5)
  }
  update() {
    this.y += this.speed
    this.x += this.wind
    if (this.y > height) {
      this.y = random(-10, 0)
      this.x = random(0, width)
    }
  }
  draw() {
    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
  }
}

for (let i = 0; i < maxFlakes; i++) {
  snowflakes.push(new Snowflake())
}

function animate() {
  ctx.clearRect(0, 0, width, height)
  snowflakes.forEach((flake) => {
    flake.update()
    flake.draw()
  })
  requestAnimationFrame(animate)
}

animate()
