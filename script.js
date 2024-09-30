
function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarNumero(temperaturaCelsius) {
    if (isNaN(temperaturaCelsius)) {
        alert("Por favor ingresa un número válido.");
        // Swal.fire({
        //     position: "top-end",
        //     icon: "error",
        //     title: "Por favor ingrese un número",
        //     showConfirmButton: false,
        //     timer: 1500
        // });
        return false;
    }
    return true;

}

function cambioColorBton(btn, color) {
    const btnc = document.getElementById(btn);
    btn.addEventListener('click', function () {
        btnc.style.backgroundColor = color;
    });
}

function convertirTemperaturaF() {

    let temperaturaCelsius = document.getElementById("temperatura").value;
    temperaturaCelsius = parseFloat(temperaturaCelsius);

    if (!verificarNumero(temperaturaCelsius)) {
        return;  // Si no es un número válido, salimos de la función
    }
    
    let tempFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

    asignarTexto('h4', `La temperatura es: ${tempFahrenheit} °F` )

    //limpiarCaja()

}

function limpiarCaja() {
    document.querySelector('#temperatura').value = '';
    asignarTexto('');
}


function convertirTemperaturaK() {
    // const boton = document.getElementById('btnF');

    // boton.addEventListener('click', function(){
    //     boton.style.backgroundcolor='red';
    // });

    let temperaturaCelsius = document.getElementById("temperatura").value;
    temperaturaCelsius = parseFloat(temperaturaCelsius); 

    if (!verificarNumero(temperaturaCelsius)) {
        return;  
    }

    let tempKelvin = temperaturaCelsius + 273.15

    asignarTexto('h4', `La temperatura es: ${tempKelvin} °K`);

    // limpiarCaja()

}



