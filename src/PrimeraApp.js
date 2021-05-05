import React from 'react';
import PropTypes from 'prop-types';

// FUNCTIONAL COMPONENTS


const   PrimeraApp = ( {saludo, subtitulo = ' un subtitulo aqui' } ) => {

    

    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo}</p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;