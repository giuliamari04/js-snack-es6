function generaDatiSquadre() {
    const squadre = [
        { 
            nome: 'Squadra A', 
            puntiFatti: 0, 
            falliSubiti: 0 
        },
        { 
            nome: 'Squadra B', 
            puntiFatti: 0, 
            falliSubiti: 0 
        },
        { 
            nome: 'Squadra C', 
            puntiFatti: 0, 
            falliSubiti: 0 
        }
    ];

 for (const squadra of squadre) {
    squadra.puntiFatti = getRandomNumber(0, 100);
    squadra.falliSubiti = getRandomNumber(0, 50);
    }

const squadreRidotte = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));
    return JSON.stringify(squadreRidotte);
    }

document.getElementById('generaDati').addEventListener('click', function () {
    const risultatiDiv = document.getElementById('risultati');
    const datiSquadre = generaDatiSquadre();
    const squadre = JSON.parse(datiSquadre);
   
    const ris = squadre.map(squadra => {
        return `La ${squadra.nome} ha subito un numero di falli pari a ${squadra.falliSubiti}`;
  ;
    });

    console.log(ris);
    risultatiDiv.innerHTML = ris.map(risultato => `<li>${risultato}</li>`).join(''); 
});

