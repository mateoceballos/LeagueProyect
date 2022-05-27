import Lol from "./Campeones.js";

export class ADC extends Lol {
  constructor(nombre, tipo,nivel) {
    super(nombre, tipo,nivel);
  }
}

export const puedeRevivir = (ClasePadre) =>
  class extends ClasePadre {
    get puedeRevivir() {
      return `soy ${this.nivel} y puedo revivir`;
    }
  };

export const puedeUlt = (ClasePadre) =>
  class extends ClasePadre {
    get puedeUlt() {
      return `soy ${this.nivel} y tengo lista mi habilidad definitiva`;
    }
  };
/* En este caso no estamos extendiendo la clase "puedeRevivir" ni "puedeUlt"
  con el fin de mostrar el resultado "undefined"
*/
export class Malphite extends Lol {
  // Creamos el metodo principal
  constructor() {
    // Invocamos al constructor de la clase campeones
    super("Malphite", "Tanquead","de piedra");
  }
}

export class Ahri extends puedeRevivir(Lol) {
  // Creamos el metodo principal
  constructor() {
    // Invocamos al constructor de la clase campeones
    super("Ahri", "Mago","rapida");
  }
}

export class Nautilus extends puedeUlt(Lol) {
  // Creamos el metodo principal
  constructor() {
    // Invocamos al constructor de la clase campeones
    super("Nautilus", "Tanqueap","muy grande");
  }
}
