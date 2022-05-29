/* Aca iniciamos el letrero de bienvenida a nuestro nuevo campeon
  junto con su rol en el juego y el carril o linea en la que jugará
*/
class Loldetails {
  constructor() {}

  introducirEnTablero(Lol) {
    console.log(
      `Almacenando nuevo campeon en el pozo de lucha
      
      ENTRADA A LA GRIETA DEL INVOCADARK..........
      .........................
      Añadiento nuevo contendiente, nombre: ${Lol.nombre}.
      Papel que tendra en la batalla: ${Lol.rol}.
      Disponibilidad de niveles: ${Lol.nivel}.
      La habilidad de tu campeón es lanzar un gran cohete
      Y tu linea de juego es ${Lol.carril}
      ........................
      Bienvenido nuevo contendiente.
      `
    );
  }
}

export default Loldetails;
