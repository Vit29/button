
document.getElementById('buttom-circle')
.addEventListener('click', () => {
  document.querySelector('button').classList.toggle('active')
  document.querySelector('.icon-x').classList.toggle('display-none')
  document.querySelector('.icon-check').classList.toggle('display-block')
  document.getElementById('buttom-circle').classList.toggle('toogle')
})

