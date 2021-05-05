import React, { useState } from 'react';
import PropTypes from 'prop-types';

// FUNCTIONAL COMPONENTS

const   CounterApp = ( {value } ) => {

    const [counter, setCounter] = useState(value);



    //handleAdd
    const handleAdd = () =>{
        setCounter( counter + 1 );
    }

    const handleSubtract = () =>{
        setCounter( counter - 1 );
    }

    const handleReset = () =>{
        setCounter (value);
    }
    
    return (
        <>
            <h1> CounterApp </h1>
            <p>{ counter }</p>


            <button onClick={ handleAdd  }>+1</button>
            <button onClick={ handleReset  }>Reset</button>
            <button onClick={ handleSubtract  }>-1</button>
        </>
    );

}

CounterApp.propTypes = { 
    nombre: PropTypes.number
}

export default CounterApp;