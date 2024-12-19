import { crearCartaHTML, pedirCarta, valorCarta } from "./";
/**
 * 
 * @param {Number} puntosMinimos Puntos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para visualizar los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora Elemento para mostrar las cartas
 * @param {Array<String>} deck Mazo con las cartas 
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) throw new Error("La computadora no puede jugar sin un puntaje a vencer");
    if (!puntosHTML) throw new Error("Debes pasar la variable para los puntosHTML");

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
