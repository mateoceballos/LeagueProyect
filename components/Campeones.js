/* En esta clase recibimos los datos de los campeones, su nombre, rol y niveles disponibles en el juego
  con estos datos le asignamos un ataque especial
*/
class Lol {
  #nombre = "";
  #rol = ""; 
  #nivel = [];

  constructor(nombre, rol, nivel) {
    this.#nombre = nombre;
    this.#rol = rol;
    this.#nivel = nivel;
  }

  get nombre() {
    return this.#nombre;
  }

  get rol() {
    return this.#rol;
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
