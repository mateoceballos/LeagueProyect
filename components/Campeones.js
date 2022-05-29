/* En esta clase recibimos los datos de los campeones, su nombre, rol y niveles disponibles en el juego
  con estos datos le asignamos un ataque especial
*/
class LolP {
  #nombre = "";
  #rol = ""; 
  #carril = ""; 
  #nivel = [];

  constructor(nombre, rol, carril, nivel) {
    this.#nombre = nombre;
    this.#rol = rol;
    this.#carril = carril;
    this.#nivel = nivel;
  }

  get nombre() {
    return this.#nombre;
  }

  get rol() {
    return this.#rol;
  }
  get carril() {
    return this.#carril;
  }

  get nivel() {
    return this.#nivel;
  }

  get ataque() {
    const { nombre } = this;
    return `${nombre}, Ataque base`;
  }
}
class Lol {
  #nombre = "";
  #rol = ""; 
  #carril = ""; 
  #nivel = [];

  constructor(nombre, rol, carril, nivel) {
    this.#nombre = nombre;
    this.#rol = rol;
    this.#carril = carril;
    this.#nivel = nivel;
  }

  get nombre() {
    return this.#nombre;
  }

  get rol() {
    return this.#rol;
  }
  get carril() {
    return this.#carril;
  }

  get nivel() {
    return this.#nivel;
  }

  get ataque() {
    const { nombre } = this;
    return `${nombre}, Ataque base`;
  }
}

export default Lol;
export {LolP};
