/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const output = document.getElementById("output");
document.getElementById("submit-btn").addEventListener("click", converter);

function converter() {
  const kg = document.getElementById("search").value;

  kg === ""
    ? (output.innerHTML = `<div>Užpildykite lauką</div>`)
    : (output.innerHTML = `<div>Svarai: ${kg * 2.2046} lb.</div><div>Gramai: ${
        kg * 0.001
      } g.</div><div>Uncijos: ${kg * 35.274} oz.</div>`);
}
