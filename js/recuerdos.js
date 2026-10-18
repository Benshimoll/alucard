import {escribir1, detenerEscritura1} from './typer1.js'
import {escribir2, detenerEscritura2} from './typer2.js'
import { escribir3, detenerEscritura3 } from './typer3.js'

const pausa = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const body = document.body
const recuerdo1 = document.getElementById('recuerdo1')
const recuerdo2 = document.getElementById('recuerdo2')
const recuerdo3 = document.getElementById('recuerdo3')
const seccionRecuerdos = document.getElementById('seccion-recuerdos')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const tit1 = document.getElementById('titulo1')
const tit2 = document.getElementById('titulo2')
const tit3 = document.getElementById('titulo3')
const pergaminoCont = document.getElementById('pergamino-container')
const xButton1 = document.createElement('button')
const xButton2 = document.createElement('button')
const xButton3 = document.createElement('button')
const papoiSiguiente = document.createElement('button')
const title = document.createElement('h1')
const gif = document.createElement('img')
    xButton1.textContent = 'X'
    xButton1.className = 'x-button'
    xButton2.textContent = 'X'
    xButton2.className = 'x-button'
    xButton3.textContent = 'X'
    xButton3.className = 'x-button'
    papoiSiguiente.textContent = 'Que esté apagada'
    papoiSiguiente.className = 'sig-button'
    title.textContent = "¿Qué se necesita para encender una vela?"
    title.className = 'fin-title'
    gif.src = "assets/img/gif.gif"
    gif.alt = "Orange-cat.laugh"
    gif.style.width = "200px"
    gif.style.height = "200px"
    gif.className = "gif"
let recuerdo1Abierto = false
let recuerdo2Abierto = false
let recuerdo3Abierto = false


async function abrirRecuerdo1() {
    recuerdo1Abierto = true
    recuerdo1.style.animation = "none"
    img1.style.opacity = "0"
    recuerdo1.style.zIndex = "999"
    await pausa(600)
    recuerdo1.style.translate = "0px 0px"
    recuerdo1.classList.add('background-color-class')
    await pausa(200)
    recuerdo1.appendChild(xButton1)
    tit1.style.display = "block"
    tit1.style.opacity = "1"
    recuerdo1.style.height = "800px"
    recuerdo1.style.justifyContent = "flex-start"
    img1.style.display = "none"
    await pausa(1000)
    if (recuerdo1Abierto) escribir1()
}

async function abrirRecuerdo2() {
    recuerdo2Abierto = true
    recuerdo2.style.animation = "none"
    img2.style.opacity = "0"
    recuerdo2.style.zIndex = "999"
    await pausa(600)
    recuerdo2.style.translate = "0px 0px"
    recuerdo2.classList.add('background-color-class')
    await pausa(200)
    recuerdo2.appendChild(xButton2)
    tit2.style.display = "block"
    recuerdo2.style.height = "800px"
    recuerdo2.style.justifyContent = "flex-start"
    img2.style.display = "none"
    await pausa(1000)
    if (recuerdo2Abierto) escribir2()
}

async function abrirRecuerdo3() {
    recuerdo3Abierto = true
    recuerdo3.style.animation = "none"
    img3.style.opacity = "0"
    recuerdo3.style.zIndex = "999"
    await pausa(600)
    recuerdo3.style.translate = "0px 0px"
    recuerdo3.classList.add('background-color-class')
    await pausa(200)
    recuerdo3.appendChild(xButton3)
    tit3.style.display = "block"
    recuerdo3.style.height = "800px"
    recuerdo3.style.justifyContent = "flex-start"
    img3.style.display = "none"
    await pausa(1000)
    if (recuerdo3Abierto) escribir3()
}

async function cerrarRecuerdo1(e) {
    e.stopPropagation()
    recuerdo1Abierto = false
    detenerEscritura1()
    img1.style.display = "block"
    recuerdo1.style.justifyContent = "center"
    recuerdo1.style.translate = "0px 0px"
    recuerdo1.style.height = "200px"
    tit1.style.display = "none"
    recuerdo1.classList.remove('background-color-class')
    img1.style.opacity = "1"
    recuerdo2.style.display = "flex"
    await pausa(600)
    recuerdo2.style.opacity = "1"
    recuerdo1.style.zIndex = ""
}

async function cerrarRecuerdo2(e) {
    e.stopPropagation()
    recuerdo2Abierto = false
    detenerEscritura2()
    img2.style.display = "block"
    recuerdo2.style.justifyContent = "center"
    recuerdo2.style.translate = "0px 0px"
    recuerdo2.style.height = "200px"
    tit2.style.display = "none"
    recuerdo2.classList.remove('background-color-class')
    img2.style.opacity = "1"
    recuerdo3.style.display = "flex"
    await pausa(600)
    recuerdo3.style.opacity = "1"
    recuerdo2.style.zIndex = ""
}

async function cerrarRecuerdo3(e) {
    e.stopPropagation()
    recuerdo3Abierto = false
    detenerEscritura3()
    img3.style.display = "block"
    recuerdo3.style.justifyContent = "center"
    recuerdo3.style.translate = "0px 0px"
    recuerdo3.style.height = "200px"
    tit3.style.display = "none"
    recuerdo3.classList.remove('background-color-class')
    img3.style.opacity = "1"
    await pausa(600)
    recuerdo3.style.zIndex = ""
    await pausa(1000)
    recuerdo1.style.opacity = "0"
    await pausa(1000)
    recuerdo1.style.display = "none"
    recuerdo2.style.opacity = "0"
    await pausa(1000)
    recuerdo2.style.display = "none"
    recuerdo3.style.opacity = "0"
    await pausa(1000)
    recuerdo3.style.display = "none"
    await pausa(1000)
    seccionRecuerdos.appendChild(title)
    await pausa(3500)
    seccionRecuerdos.appendChild(papoiSiguiente)
    await pausa(1000)
    seccionRecuerdos.appendChild(gif)
}

async function siguiente() {
    title.style.translate = "0px -300px"
    papoiSiguiente.style.translate = "0px -300px"
    gif.style.translate = "0px -300px"
    await pausa(500)
    title.style.translate = "0px 900px"
    papoiSiguiente.style.translate = "400px -300px"
    gif.style.translate = "-400px -300px"
    await pausa(500)
    title.style.display = "none"
    papoiSiguiente.style.display = "none"
    gif.style.display = "none"
    seccionRecuerdos.style.display = "none"
    body.style.backgroundColor = "black"
    await pausa(1000)
        window.location.href = "https://www.google.com"
}

recuerdo1.addEventListener('click', abrirRecuerdo1)
recuerdo2.addEventListener('click', abrirRecuerdo2)
recuerdo3.addEventListener('click', abrirRecuerdo3)
xButton1.addEventListener('click', cerrarRecuerdo1)
xButton2.addEventListener('click', cerrarRecuerdo2)
xButton3.addEventListener('click', cerrarRecuerdo3)
papoiSiguiente.addEventListener('click', siguiente)
