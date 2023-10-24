"use strict";

const vip =[
    {
        tableName:'TavoloVip',
        guestName:'Brad Pitt',
        place:1
    },
    {
        tableName:'TavoloVip',
        guestName:'Johnny Depp',
        place:2
    },
    {
        tableName:'TavoloVip',
        guestName:'Lady Gaga',
        place:3
    },
    {
        tableName:'TavoloVip',
        guestName:'Cristiano Ronaldo',
        place:4
    },
    {
        tableName:'TavoloVip',
        guestName:'Georgina Rodriguez',
        place:5
    },
    {
        tableName:'TavoloVip',
        guestName:'Chiara Ferragni',
        place:6
    },
    {
        tableName:'TavoloVip',
        guestName:'Fedez',
        place:7
    },
    {
        tableName:'TavoloVip',
        guestName:'George Clooney',
        place:8
    },
    {
        tableName:'TavoloVip',
        guestName:'Amal Clooney',
        place:9
    },
    {
        tableName:'TavoloVip',
        guestName:'Maneskin',
        place:10
    },
];

const TavolodeiVip = vip.filter(guestvip => guestvip.tableName === "TavoloVip");

TavolodeiVip.forEach(guest => {
    console.log(guest.guestName + " al tavolo nr. " + guest.place);
});;