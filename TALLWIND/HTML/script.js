const botonModo = document.getElementById('modoOscuro')

if (localStorage.getItem('modoOscuro') === 'true') {
  document.body.classList.add('dark')
  botonModo.textContent = '☀️'
}

botonModo.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  const modoActivo = document.body.classList.contains('dark')
  localStorage.setItem('modoOscuro', modoActivo)
  botonModo.textContent = modoActivo ? '☀️' : '🌙'
})

const año = new Date().getFullYear()
document.getElementById('year').textContent = año

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Gracias por tu mensaje, te contactaremos pronto.')
  formulario.reset()
})
