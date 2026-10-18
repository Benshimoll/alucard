const textoCompleto3 = "Ya en este tiempo estoy orgullo de todo aquello que pasamos risas, momentos felices, momentos cuales no los estuvimos tanto la verdad estoy súper enamorado de lo que conocí y que voy a seguir eligiendo siempre la verdad te amare siempre, tanto y cuál sea el motivo nunca será suficiente para demostrarte lo mucho que te amo, feliz cumpleaños mi papoisita hermosa.";

const contenedorTexto = document.getElementById('parrafo3');
let i = 0;
const velocidad = 100;
let timeoutId;

export function escribir3() {
    if (i < textoCompleto3.length) {
        contenedorTexto.textContent += textoCompleto3.charAt(i);
        i++;
        timeoutId = setTimeout(escribir3, velocidad);
    }
}

export function detenerEscritura3() {
    clearTimeout(timeoutId);
    timeoutId = null;
    i = 0;
    contenedorTexto.textContent = '';
}
