const toggles = document.querySelectorAll('.task-toggle')
const contents = document.querySelectorAll('.task-content')

toggles.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const content = contents[idx]
    const arrow = btn.querySelector('.arrow')
    const isOpen = content.style.display === 'block'
    content.style.display = isOpen ? 'none' : 'block'
    arrow.textContent = isOpen ? '▼' : '▲'
  })
})

const images = document.querySelectorAll('.task-images .slide-image')
let currentIndex = 0

document.getElementById('prevBtn').addEventListener('click', () => {
  images[currentIndex].classList.remove('active')
  currentIndex = (currentIndex - 1 + images.length) % images.length
  images[currentIndex].classList.add('active')
})

document.getElementById('nextBtn').addEventListener('click', () => {
  images[currentIndex].classList.remove('active')
  currentIndex = (currentIndex + 1) % images.length
  images[currentIndex].classList.add('active')
})
