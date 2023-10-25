const biciclette = [
    { 
        nome: 'bici A', 
        peso: 7 
    },
    { 
        nome: 'bici B', 
        peso: 8 
    },
    { 
        nome: 'bici C', 
        peso: 6 
    },
    { 
        nome: 'bici D', 
        peso: 10
    }
  ];
  
  let biciLeggera = biciclette[0]; 
  
  for (const bici of biciclette) {
    console.log(bici)
    if (bici.peso < biciLeggera.peso) {
      biciLeggera = bici;
    }
  }
  
console.log(`La bici più leggera è la ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`);
const biciLeggeraris = document.getElementById('bici-leggera');
biciLeggeraris.innerHTML= `<h1>La bici più leggera è la ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.</h1>`; 
  