import React from 'react';
import ItemTarea from './ItemTarea';
const Lista = (props) => {
    return (
        <ul className="list-group">
            {
                //  si la funcion map,find o filter tiene un asola linea, el retiurn se hace implicitamente
                 props.arregloTareas.map((nombreTarea, posicion) =><ItemTarea key={posicion} 
                 dato={nombreTarea} borrarTarea={props.borrarTarea}></ItemTarea>)
            }
        </ul>
    );
};

export default Lista;