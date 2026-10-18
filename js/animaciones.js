const pausa = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')
const text3 = document.getElementById('text3')
const text4 = document.getElementById('text4')
const text5 = document.getElementById('text5')
const text6 = document.getElementById('text6')
const text7 = document.getElementById('text7')
const text8 = document.getElementById('text8')
const text9 = document.getElementById('text9')
const text10 = document.getElementById('text10')
const text11 = document.getElementById('text11')
const lockBtn = document.getElementById('lock-btn')
const lockContainer = document.getElementById('candado-conatiner')
const imgLock = document.getElementById('img-lock')
const imgUnlock = document.getElementById('img-unlock')
const recuerdos = document.getElementById('seccion-recuerdos')


async function apodosAnim() {
    /* aparicion */
    text1.style.opacity = "1"
    await pausa(500)
    text3.style.opacity = "1"
    await pausa(500)
    text10.style.opacity = "1"
    await pausa(500)
    text2.style.opacity = "1"
    await pausa(500)
    text4.style.opacity = "1"
    await pausa(500)
    text6.style.opacity = "1"
    await pausa(500)
    text11.style.opacity = "1"
    await pausa(500)
    text5.style.opacity = "1"
    await pausa(500)
    text7.style.opacity = "1"
    await pausa(700)
    text9.style.opacity = "1"
    await pausa(700)
    text8.style.opacity = "1"
    await pausa(2000)

    /* movimiento */
    text7.style.translate = "-70px 260px"
    await pausa(550)
    text7.style.transform = "rotate(0deg)"
    await pausa(550)
    text8.style.translate = "0px -100px"
    await pausa(550)
    text5.style.translate = "120px 80px"
    await pausa(550)
    text4.style.translate = "0px 70px"
    await pausa(550)
    text6.style.translate = "-50px -50px"
    await pausa(550)
    text3.style.translate = "-40px 200px"
    await pausa(550)
    text9.style.translate = "0px -120px"
    await pausa(1000)

    /* boton */
    lockContainer.style.opacity = "1"
}

async function botonCandado() {
    imgLock.style.opacity = "0"
    imgUnlock.style.opacity = "1"
    lockBtn.style.animation = "none"
    await pausa(1000)
    text8.style.translate = "-450px 0px"
    text9.style.translate = "0px -500px"
    await pausa(300)
    text7.style.translate = "450px 0px"
    await pausa(300)
    text5.style.translate = "-500px 0px"
    text11.style.translate = "0px 300px"
    await pausa(300)
    text6.style.translate = "500px 0px"
    text4.style.translate = "0px -1000px"
    await pausa(300)
    text2.style.translate = "0px 1000px"
    await pausa(300)
    text10.style.translate = "500px 0px"
    await pausa(300)
    text3.style.translate = "-500px -500px"
    text1.style.translate = "500px 500px"
    await pausa(200)
    text8.style.display = "none" 
    text9.style.display = "none"
    text7.style.display = "none"
    text5.style.display = "none"
    text11.style.display = "none"
    text6.style.display = "none"
    text4.style.display = "none"
    text2.style.display = "none"
    text10.style.display = "none"
    text3.style.display = "none"
    text1.style.display = "none"
    await pausa(200)
    lockBtn.style.scale = "0"
    await pausa(1100)
    lockBtn.style.display = "none"
    recuerdos.style.display = "flex"
    await pausa(500)
    recuerdos.style.opacity = "1"
}

window.addEventListener('DOMContentLoaded', apodosAnim)
lockBtn.addEventListener('click', botonCandado)