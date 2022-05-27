import Lol from "./Campeones.js";

export class ADC extends Lol {
  constructor(nombre) {
    /*
      Invocamos el constructor de la clase campeones
      y pasamos por defecto el rol ADC
    */
    super(nombre, "Ofensivo");
  }

  get ataque() {
    const { nombre } = this;
    return `!!${nombre}, Tu serass el daño del equipo, conoce a tu equipo:`;
  }
}

export class Mago extends Lol {
  constructor(nombre) {
    super(nombre, "Ofensivo magico");
  }

  get ataque() {
    const { nombre } = this;
    return `${nombre}, Habilidad potenciada`;
  }
}

export class Tanquead extends Lol {
  constructor(nombre) {
    super(nombre, "Defensa");
  }

  get ataque() {
    const { nombre } = this;
    return `${nombre}, Aumento de escudo daño`;
  }
}

export class Tanqueap extends Lol {
  constructor(nombre) {
    super(nombre, "Defensa");
  }

  get ataque() {
    const { nombre } = this;
    return `${nombre}, Escudo antimagia `;
  }
}

export default class ProcessAttack {
  /*
    Se crea método que permite procesar los ataques 
    de un listado del campeon.
  */
    todosLoscombosLol(lolList) {
    /*
      En este caso solo basta con recibir el listado de los campeones
      para porder ejecutar un ataque, ya que cada rol del listado
      cuenta con su propio ataque especial o defensa personalizada.
    */
    const ATAQUES = lolList.reduce((output, clsechamp) => {
      let msg = "";
      const { ataque } = clsechamp;
      return `${output}${ataque}\n`;
    }, "");
    return ATAQUES;
  }
}
