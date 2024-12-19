
/**
 * 
 * @param {Array<String>} deck 
 * @returns {string} Retorna la última en el deck ya barajado
 */

export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
