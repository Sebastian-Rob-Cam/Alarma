let statusZone = true; 
let passContainer;

function savePass() {
    alert('Verificando tu contrasena...');
    const inputValue = document.getElementById('input');
    passContainer = inputValue.value;
    console.log(passContainer);
    resticcion();
}

let masterPassClose = 1234;
let zone = document.getElementById('zone');

function resticcion() {
    do {
        alert("Tu contrasena es correcta");
        if(statusZone === true) {
            zone.style.backgroundColor = 'red';
            statusZone = false;
        } else if(statusZone === false) {
            zone.style.backgroundColor = 'green';
        }
    } while (passContainer === masterPass);
}

function showAlarm() {
    zone.addEventListener('mouseover', ()=> {
        alert('Por favor sal de aqui!');
    })
}