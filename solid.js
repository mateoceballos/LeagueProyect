import Lol from "./components/Campeones.js";
import Loldetails from "./components/Pozo.js";
import ProcessAttack, { ADC } from "./components/ProcessAttack.js";
import {
  Nautilus,
  Ahri,
  Malphite,
} from "./components/ChampionsAction.js";

/* Single Responsibility Principle.
 *
 * Se crea una clase Loldetails, ya que necesitamos manejar la responsabilidad
 * de base de datos ya que estamos guardando un nuevo personaje en nuestra
 * herramienta de campeones (pozo).
 */

const Jinx = new Lol("Jinx", "ADC", ["Nivel1", "Nivel2"]);
const Pozo = new Loldetails();

Pozo.introducirEnTablero(Jinx);

/* Open / Closed Principle
 *
 * ProcessAttack ya tendrá el trabajo de llamar todos los ataques, pero cada
 * ataque de rol estará dividido en una clase nueva que hereda del campeon
 * y polimorfa en su nivel, disminuyendo la
 * posibilidad de errores.
 */

const Ataque = new ProcessAttack();

// invocamos al método todosLoscombosLol y enviamos las
// instancias te cada tipo de personaje
const Mensaje = Ataque.todosLoscombosLol([new ADC("Jinx")]);
console.log(Mensaje);

// Creamos la instancia de la clase Ahri, nuestra primer personaje secundaria
const AHRI = new Ahri();
/*
  Como se comento con anterioridad Ahri puede 
  utilizar todos los métodos de la clase Campeones.    
*/
console.log(`Conoce a tus 3 compañeros de equipo en este nuevo modo de juego`);
console.log(`......................................................... `);
console.log(`......................................................... `);
console.log(`Compañero de equipo 1, Carril: Middle (carril central): `);
console.log(`.. `);
console.log(`Hola soy ${AHRI.nombre}`);
console.log(`Soy ${AHRI.rol}`);
console.log(`Ademas ${AHRI.puedeRevivir} vamos por la victoria!!`);
console.log(`......................................................... `);

// Creamos la instancia de la clase Malphite
const MALPHITE = new Malphite();
/*
 * Como se comento con anterioridad Malphite no puede
 * utilizar todos los métodos de la clase campeones.
 */
console.log(`......................................................... `);
console.log(`Compañero de equipo 2, Carril: Top (carril superior): `);
console.log(`.. `);
console.log(`Hola soy ${MALPHITE.nombre}`);
console.log(`Soy de tipo ${MALPHITE.rol}`);
console.log(`Ademas ${MALPHITE.puedeUlt} Me aseguraré de proteger bien al equipo!!`);
console.log(`......................................................... `);
// En esta caso la salida nos mostrara undedined
// ya que el método no exite en la clase Malphite que extienda de una clase interna

// Creamos la instancia de la clase Nautilus
const NAUTILUS = new Nautilus();
/*
 * Como se comento con anterioridad Nautilus no puede
 * utilizar todos los métodos de la clase campeones.
 */
console.log(`......................................................... `);
console.log(`Compañero de equipo 3, Carril: Jungle (Jungla): `);
console.log(`.. `);
console.log(`Hola soy ${NAUTILUS.nombre}`);
console.log(`Soy ${NAUTILUS.rol}`);
console.log(`Ademas ${NAUTILUS.puedeUlt}, te apoyaré mientras recorro el mapa`);
console.log(`......................................................... `);
console.log(`......................................................... `);
console.log(`......................................................... `);
console.log(`!BIENVENIDOS A LEAGUE OF LEGENDS¡ `);