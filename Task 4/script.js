/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const output = document.getElementById("output");
fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      output.innerHTML += `<div ><div id=brand>${data[i].brand}</div><div id=models${i}></div></div>`;
      for (let y = 0; y < data.length; y++) {
        const models = document.getElementById(`models${i}`);
        models.innerHTML = `<p>${data[i].models}</p>`;
      }
    }
  });
