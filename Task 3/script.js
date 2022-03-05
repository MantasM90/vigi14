/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
let output = document.getElementById("output");

document.getElementById("btn").addEventListener("click", getUsers);

function getUsers() {
  document.getElementById("message").classList.add("hidden");
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      for (let index = 0; index < data.length; index++) {
        output.innerHTML += `<div><div>${data[index].login}</div><img src=${data[index].avatar_url} alt=${data[index].login} /></div>`;
      }
    });
}
