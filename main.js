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








async function raditNoliktavasDatus()
{
  let datiNoServera = await fetch('noliktava.json');
  let datiJson;

  if (datiNoServera.ok) 
  {
    datiJson = await datiNoServera.json();
  }

  //let datiJson = await dati.json();
  let datiNoliktava = datiJson['noliktava'];
  
  let tabula = document.getElementById('public-db-table-body');
  tabula.innerHTML = '';

  //datiNoliktava.length - saņemto ierakstu skaits
  //datiNoliktava['0'] - pirmais ieraksts
  //datiNoliktava['0']['Nosaukums'] - pirmā ieraksta nosaukums

  for (i = 0; i < datiNoliktava.length; i++)
  {
    //i - loop indekss 0,1,2,3,4....

    tipsClass = datiNoliktava[i]['Tips'];
    tipsClass = tipsClass.toLowerCase();
    tipsClass = tipsClass.replace('ī','i');

    tabula.innerHTML = tabula.innerHTML+`
    <tr class="`+tipsClass+`">
    <td> `+datiNoliktava[i]['ID']+` </td>
    <td> `+datiNoliktava[i]['Nosaukums']+` </td>
    <td> `+datiNoliktava[i]['Tips']+` </td>
    <td> `+datiNoliktava[i]['Apakštips']+` </td>
    <td> `+datiNoliktava[i]['Skaits']+` </td>
    <td> `+datiNoliktava[i]['Svars']+` </td>
    <td> `+datiNoliktava[i]['Komentāri']+` </td>
    </tr>`;


  }//loop beigas


}//beidzas raditNoliktavasDatus(dati)

raditNoliktavasDatus();










////////////////////////////////////
////////////////////////////////////
//////////SNIPPETS BELOW ///////////

//fetch('sample.json')
//  .then(response => response.json())
//  .then(data => console.log(data));

/*
async function ieladetDatus(adrese) 
{
  fetch(adrese).then(sanemtDatus);
}

ieladetDatus('noliktava.json');


async function sanemtDatus(dati)
{
  //console.log(dati);
  //datiOutput = await dati.json();
  console.log( await dati.json() );
}
*/