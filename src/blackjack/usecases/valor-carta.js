/**
 * 
 * @param {String} carta String con el nombre de la carta
 * @returns {Number} Retorna un número con el valor de la carta
 */


export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
