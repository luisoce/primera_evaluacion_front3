import React from 'react';

const Card = ({ nombre, apellido }) => {
    console.log(nombre, apellido)
    
    return (
    <div className='card'>

        <p>Los datos de formulario:</p>
        <h2>{nombre} {apellido}</h2>
    </div>
    );
};

export default Card;
