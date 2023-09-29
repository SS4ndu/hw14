const days = 1000; 

const years = Math.floor(days / 365);
const months = Math.floor(days % 365 / 30);
const weeks = Math.floor(days % 365 % 30 / 7);
const remainingDays = (days % 365 % 30 % 7);

if (years > 0) {
  console.log(`Timpul până la finalizarea producției: ${years} ani ${months} luni`);
} else if (months > 0) {
  console.log(`Timpul până la finalizarea producției: ${months} luni ${weeks} săptămâni`);
} else if (weeks > 0) {
  console.log(`Timpul până la finalizarea producției: ${weeks} săptămâni ${remainingDays} zile`);
} else {
  console.log("Mai puțin de o săptămână");
}




const obj1 = {
    nume: "Alex",
    hobby: "masini"
}

const obj2 = {
    nume: "Ion",
    hobby: "avioane"
}

const obj3 = {
    nume: "Matei",
    hobby: "trenuri"
}

const obj4 = {
    nume: "Marcela",
    hobby: "muzica"
}

const obj5 = {
    nume: "Inna",
    hobby: "lectura"
}


const nume = "Ion";

switch (nume) {
    case obj1.nume:
    console.log(`Hobby-ul lui/ei este: ${obj1.hobby}`);
    break;
  case obj2.nume:
    console.log(`Hobby-ul lui/ei este: ${obj2.hobby}`);
    break;
  case obj3.nume:
    console.log(`Hobby-ul lui/ei este: ${obj3.hobby}`);
    break;
  case obj4.nume:
    console.log(`Hobby-ul lui/ei este: ${obj4.hobby}`);
    break;
  case obj5.nume:
    console.log(`Hobby-ul lui/ei este: ${obj5.hobby}`);
    break;
}


const Anotimp = "vara"; 

switch (Anotimp) {
  case "primavara":
    console.log("Primavara este anotimpul invierii naturii");
    break;
  case "vara":
    console.log("Vara este anotimpul cald");
    break;
  case "toamna":
    console.log("Toamna aduce frunze colorate si ploi");
    break;
  case "iarna":
    console.log("Iarna este anotimpul lui Mos Craciun");
    break;
  default:
    console.log("Nu este denumire de anotimp.");
}






class Animal {
    constructor(picioare, Coada) {
      this.picioare = picioare;
      this.Coada = Coada;
    }
  }

  class Pisica extends Animal {
    constructor(picioare, Coada, rasa) {
      super(picioare, Coada);
      this.rasa = rasa;
    }
  }
  
 
  class Caine extends Animal {
    constructor(picioare, Coada, rasa) {
      super(picioare, Coada);
      this.rasa = rasa;
    }
  }

  const pisicaMea = new Pisica(4, true, "Siamez");
  const caineleMeu = new Caine(4, true, "Labrador");
  
  console.log(pisicaMea);

  
  console.log(caineleMeu);

  


