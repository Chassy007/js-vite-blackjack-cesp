import _ from "underscore";

export const prueba = "Mi nombre es Carlos";

/**
 * 
 * @param {Array<String>} tiposDeCarta    Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta) throw new Error('tiposDeCarta es OBLIGATORIO');
    if (tiposDeCarta.length <= 0) throw new Error('tiposDeCarta no puede ser vacío');

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
};

