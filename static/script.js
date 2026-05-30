const audiosInspirate = [
    '/static/audios/inspirate/frase1.mp3',
    '/static/audios/inspirate/frase2.mp3',
    '/static/audios/inspirate/frase3.mp3',
    '/static/audios/inspirate/frase4.mp3',
    '/static/audios/inspirate/frase5.mp3',
    '/static/audios/inspirate/frase6.mp3',
    '/static/audios/inspirate/frase7.mp3',
    '/static/audios/inspirate/frase8.mp3',
    '/static/audios/inspirate/frase9.mp3',
    '/static/audios/inspirate/frase10.mp3',
    '/static/audios/inspirate/frase11.mp3',
    '/static/audios/inspirate/frase12.mp3',
    '/static/audios/inspirate/frase13.mp3',
    '/static/audios/inspirate/frase14.mp3',
    '/static/audios/inspirate/frase15.mp3',
    '/static/audios/inspirate/frase16.mp3',
    '/static/audios/inspirate/frase17.mp3',
    '/static/audios/inspirate/frase18.mp3',
    '/static/audios/inspirate/frase19.mp3',
    '/static/audios/inspirate/frase20.mp3'
];

const audiosMemardos = [
    '/static/audios/memardos/meme1.mp3',
    '/static/audios/memardos/meme2.mp3',
    '/static/audios/memardos/meme3.mp3',
    '/static/audios/memardos/meme4.mp3',
    '/static/audios/memardos/meme5.mp3',
    '/static/audios/memardos/meme6.mp3',
    '/static/audios/memardos/meme7.mp3',
    '/static/audios/memardos/meme8.mp3',
    '/static/audios/memardos/meme9.mp3',
    '/static/audios/memardos/meme10.mp3'
];

let playlistInspirate = [];
let playlistMemardos = [];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function reproducirAudio(tipo) {
    let listaOriginal, listaTrabajo, statusElement;

    if (tipo === 'inspirate') {
        listaOriginal = audiosInspirate;
        listaTrabajo = playlistInspirate;
        statusElement = document.getElementById('status-inspirate');
    } else {
        listaOriginal = audiosMemardos;
        listaTrabajo = playlistMemardos;
        statusElement = document.getElementById('status-memardos');
    }

    if (listaTrabajo.length === 0) {
        listaTrabajo.push(...listaOriginal);
        shuffle(listaTrabajo);
        statusElement.innerText = "¡Biblioteca recargada!";
    }

    const rutaAudio = listaTrabajo.pop();
    const reproductor = new Audio(rutaAudio);
    reproductor.play();

    statusElement.innerText = `Faltan ${listaTrabajo.length} por escuchar.`;
}

document.getElementById('btn-inspirate').addEventListener('click', () => reproducirAudio('inspirate'));
document.getElementById('btn-memardos').addEventListener('click', () => reproducirAudio('memardos'));