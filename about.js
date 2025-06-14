const text = '원종은'
const typingText = document.getElementById('typing-text')
let index = 0

function type() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index)
    index++
    setTimeout(type, 200)
  } else {
    setTimeout(() => {
      typingText.innerHTML = ''
      index = 0
      type()
    }, 1000)
  }
}

type()

const togglebtn = document.getElementById('toggle-btn')
const moreInfo = document.getElementById('more-info')
let isVisible = false

togglebtn.addEventListener('click', () => {
  isVisible = !isVisible
  moreInfo.style.display = isVisible ? 'block' : 'none'
  togglebtn.textContent = isVisible ? '접기' : '...'
})

document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('.profile-info ul li')
  let delay = 300

  listItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('active')
    }, delay * (index + 1))
  })
})

window.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.bar')

  bars.forEach((bar) => {
    const percent = bar.getAttribute('data-percent')
    bar.style.setProperty('--target-width', percent + '%')
    bar.style.animation = 'grow 1.5s forwards'
  })
})

// function typeWriterEffect() {
//   if (charIndex < textToType.length) {
//     if (textToType.charAt(charIndex) === '\n') {
//       typingElement.innerHTML += '<br>'
//     } else {
//       typingElement.innerHTML += textToType.charAt(charIndex)
//     }
//     charIndex++
//     setTimeout(typeWriterEffect, typingSpeed)
//   }
// }
