"use strict";

const studenti = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78,
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96,
    },
    {
        id: 250,
        name: 'Andrea Mantegna ',
        grades: 48,
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74,
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50,
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84,
    },

];

const studentList = document.getElementById("student-list");
const studentVotialti = document.getElementById('student-votialti');
const studentVotialtieIdalti = document.getElementById('student-votialtieidalti');

const uppercaseNames = studenti.map(student => student.name.toUpperCase());

const votialti = studenti.filter(student => student.grades > 70);

const votialtiEidalti = studenti.filter(student => student.grades > 70 && student.id > 120);

uppercaseNames.forEach(name => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    studentList.appendChild(listItem);
});

votialti.forEach(student => {
    const listItem = document.createElement("li");
    listItem.textContent = `${student.name} - ${student.grades}`;
    studentVotialti.appendChild(listItem);
});

votialtiEidalti.forEach(student => {
    const listItem = document.createElement("li");
    listItem.textContent = `id: ${student.id}- ${student.name} - ${student.grades}`;
    studentVotialtieIdalti.appendChild(listItem);
});


console.log("Studenti con voti superiori a 70:", votialti);
console.log("Studenti con voti > 70 e id > 120:", votialtiEidalti);



