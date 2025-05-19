let contenedores = document.querySelectorAll('.cuadro')
let botonReiniciar = document.querySelector('#reiniciar')
let h2 = document.querySelector('h2')
let h1 = document.querySelector('felicitacion')
let indicador = Math.floor(Math.random() * contenedores.length)
let contador = 0;
h2.innerText = `Intentos:${contador}`
h2.style = "color:white;"
const premio = (event) => {
    if (event.target.id == indicador) {
        contador++;
        event.target.style = 'background-color:green;';
        h2.textContent = `Intentos:${contador}`
        h2.innerText
        h2.style = "color:white;"
        alert(`Eres un genio, lo lograstes al intento ${contador}`);
        elimina()
    }
    else {
        contador++;
        event.target.style = 'background-color:red;';
        h2.textContent = `Intentos:${contador}`
        h2.innerText
          h2.style = "color:white;"
    }

}

botonReiniciar.addEventListener('click', () => {
    elimina()
})

const elimina = () => {
    contenedores.forEach(Element => {
        Element.style = "background-color:;";
        contador = 0;
    });
    h2.textContent = `Intentos:${contador}`
    h2.style = "color:white;"
    h2.innerText
    indicador = Math.floor(Math.random() * contenedores.length);
}
