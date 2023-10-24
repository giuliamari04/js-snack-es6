"use strict";

let arr = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

let pictures =['BradPitt.jpg', 'JohnnyDepp.jpg', 'LadyGaga.jpg', 'CristianoRonaldo.jpg', 'GeorginaRodriguez.jpg', 'ChiaraFerragni.jpg', 'Fedez.jpg', 'GeorgeClooney.jpg', 'AmalClooney.jpg', 'Maneskin.jpg']
const tableName = "Tavolo Vip";

const vip = arr.map((guestName, index) => ({
  tableName: tableName,
  guestName: guestName,
  place: index + 1,
  picture: pictures[index] 
}));

console.log(vip);

const TavoloVip = document.getElementById('TavoloVip');
const TavolodeiVip = vip.filter(guestvip => guestvip.tableName === "Tavolo Vip");

TavolodeiVip.forEach(guest => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <div class="card w-100 border-0" >
    <img src="img/${guest.picture}" class="card-img-top" alt="foto vip">
    <div class="card-body  p-0">
      <h5 class="card-title my-fs">${guest.guestName}</h5>
      <p class="card-text">posto nr.${guest.place}</p>
    </div>
  </div>
    `;
    TavoloVip.appendChild(listItem)

    console.log(guest.guestName + " al posto nr. " + guest.place);
});

const crocjohnson = document.querySelector('.crocjohnson');

setTimeout(function () {
    crocjohnson.classList.remove('opacity-0');
}, 5 * 1000);