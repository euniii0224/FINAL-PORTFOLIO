/*const container = document.querySelector('.team-container')
const leftBtn = document.querySelector('.left-btn')
const rightBtn = document.querySelector('.right-btn')
const cards = document.querySelectorAll('.member-card')

let scrollAmount = 0

function updateScrollAmount() {
  if (cards.length === 0) return
  // 카드 너비 + gap (노트북은 gap 40px, 모바일은 0)
  const gap = window.innerWidth <= 768 ? 0 : 40
  scrollAmount = cards[0].offsetWidth + gap
}

window.addEventListener('resize', () => {
  updateScrollAmount()
})

updateScrollAmount()

leftBtn.addEventListener('click', () => {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
})

rightBtn.addEventListener('click', () => {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
})*/
