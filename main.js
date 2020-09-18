fetch('sample.json')
  .then(response => response.json())
  .then(data => console.log(data));


const vielasPoga = document.getElementById('vielas-poga');
const aprikojumsPoga = document.getElementById('aprikojums-poga');
const aprikojumsRindas = document.getElementsByClassName('aprikojums');
const vielasRindas = document.getElementsByClassName('viela');

vielasPoga.addEventListener('click', function() {
    vielasPoga.classList.toggle('selected');

    for (let i = 0; i < aprikojumsRindas.length; i++) {
        aprikojumsRindas[i].classList.toggle('slepts');
    }
});

aprikojumsPoga.addEventListener('click', function() {
    aprikojumsPoga.classList.toggle('selected');

    for (let i = 0; i < vielasRindas.length; i++) {
        vielasRindas[i].classList.toggle('slepts');
    }
});