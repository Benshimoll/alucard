const textoCompleto1 = "Quizás y era un día normal algo que ni tu ni yo imaginábamos hacer, ir caminando hacia nuestras cosas pensando en que vamos a hacer ese día tu por tu camino y yo por el mío sin esperar nada, sin sorpresas, sin sonrisas falsas ni nada solo un sentir neutro un poco hasta apagado, cuando levantamos la cabeza yo te vi y lo primero que pensé fue que hermosa es, sus ojos, su cara, su sonrisa torpe, y sus rulitos hermosos, es perfecta.. quedé embobado contigo y me viste a mi también yo sin pensar que realmente te llegaría a atraer me desilusione una vez más seguí con mi camino mi corazón sentia mucho, quería dar mucho pero mi mente lo veía casi imposible casi inimaginable, así que simplemente me fui con amor muy grande en las manos.";

const contenedorTexto = document.getElementById('parrafo1');
let i = 0;
const velocidad = 100;
let timeoutId;

export function escribir1() {
    if (i < textoCompleto1.length) {
        contenedorTexto.textContent += textoCompleto1.charAt(i);
        i++;
        timeoutId = setTimeout(escribir1, velocidad);
    }
}

export function detenerEscritura1() {
    clearTimeout(timeoutId);
    timeoutId = null;
    i = 0;
    contenedorTexto.textContent = '';
}
