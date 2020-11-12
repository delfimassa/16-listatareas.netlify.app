import React from 'react';

// react stateless o funcional component rsc
// hook es una libreria que sirve para mi funcional 
// component tenga una especie de state, si descubro muy adelante que en realidad si necesitaba guardar info
const Subtitulo = (props) => {
    return (
        <div>
            <h4 className="text-center display-5 mb-4">Tareas de la Comision {props.comision}</h4>
        </div>
    );
};

export default Subtitulo;