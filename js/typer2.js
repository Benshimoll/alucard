const textoCompleto2 = "Luego de días evitando la idea de estar juntos, uno de esos días que nunca imaginé nos cruzamos miradas y nos dijimos lo que ambos sentimos ese sentir de querer dar todo por el todo y no poder decir que no, la verdad fue uno de mis mejores momentos a tu lado gracias por darme la oportunidad de ser el hombre que soy en hoy en dia.";

const contenedorTexto = document.getElementById('parrafo2');
let i = 0;
const velocidad = 100;
let timeoutId;

export function escribir2() {
    if (i < textoCompleto2.length) {
        contenedorTexto.textContent += textoCompleto2.charAt(i);
        i++;
        timeoutId = setTimeout(escribir2, velocidad);
    }
}

export function detenerEscritura2() {
    clearTimeout(timeoutId);
    timeoutId = null;
    i = 0;
    contenedorTexto.textContent = '';
}
