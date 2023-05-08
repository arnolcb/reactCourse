import React from 'react';
import '../stylesheets/Testimonio.css'

function Testimonio(props){
    return (
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio'
                src={require(`../img/testimonio-${props.imagen}.png`)}
                alt= 'Fotografía de Emma'
            />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Testimonio;