"use strict";

let arr = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const tableName = "Tavolo Vip";

const vip = arr.map((guestName, index) => ({
  tableName: tableName,
  guestName: guestName,
  place: index + 1
}));

console.log(vip);

const TavoloVip = document.getElementById('TavoloVip');
const TavolodeiVip = vip.filter(guestvip => guestvip.tableName === "Tavolo Vip");

TavolodeiVip.forEach(guest => {
    const listItem = document.createElement("li");
    listItem.textContent = guest.guestName + " posto nr. " + guest.place;
    TavoloVip.appendChild(listItem)

    console.log(guest.guestName + " al posto nr. " + guest.place);
});