/* Aca iniciamos el letrero de bienvenida a nuestro nuevo campeon
  junto con su rol en el juego y el carril o linea en la que jugará
*/
class Loldetails {
  constructor() {}

  introducirEnTablero(LolP) {
    console.log(
      `Almacenando nuevo campeon en el pozo de lucha
      
      Añadiento nuevo contendiente, nombre: ${LolP.nombre}.
      Papel que tendra en la batalla: ${LolP.rol}.
      Disponibilidad de niveles: ${LolP.nivel}.
      La habilidad de tu campeón es lanzar un gran cohete
      Y tu linea de juego es ${LolP.rol}
      ........................
      Bienvenido nuevo contendiente.
      `
    );
  }
}

export default Loldetails;