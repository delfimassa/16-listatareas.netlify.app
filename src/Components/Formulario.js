import React, { useState, Fragment, useEffect } from "react";
import Lista from "./Lista";
// estamos importando el hook que viene de la libreria react
const Formulario = () => {
  // aqui puedo escribir javascript normalmente
  // let tareasLS = JSON.parse(localStorage.getItem("tareas"))
  // crear state: 1er valor nombre de la variable 2do nombre de la funcion que se escribe setNombre del1ervalor
  // esta funcion nos la crea el usState por defecto, nosotros solo la nombramos
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  const [inicio, setInicio] = useState(true);

  useEffect(() => {
    if (inicio){
      let tareasLS = JSON.parse(localStorage.getItem("tareas"));
      if(tareasLS){
        setTareas(tareasLS);
        setInicio(false)
      }
    }
      localStorage.setItem("tareas", JSON.stringify(tareas));
    //  if (tareasLS){
    //    console.log("quiero actualizar LS")
    //    localStorage.setItem("tareas", JSON.stringify(tareas))
    //  }else{
    //   console.log("no existe")
    //   localStorage.setItem("tareas", JSON.stringify([]))
    //  }
  }, [tarea, tareas])
  // defino las funciones
//   const capturarTarea = (e) => {
//     console.log(e.target.value);
//     setTarea(e.target.value);
//   };
const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("en el evento submit")
    // react no permite  modificar el state si no es a trave de la funcion que llamamos setTareas entonces:
    let arreglo =  tareas;
    arreglo.push(tarea);
    setTareas(arreglo);
    setTarea("");
}
const borrarTarea = (nombre) =>{
  console.log("borrar la tarea"+ nombre);
  let arreglo = tareas.filter((nombreTarea) => nombreTarea !== nombre);
  setTareas(arreglo);
}

  // Aqui va encerrsdo el maquetado html
  // Otra recomendacion de react es llamar las funciones de eventos  handleNombre del evento  
  return (
    <Fragment>
      <div className="container d-flex justify-content-center">
      <form className="w-75" onSubmit={handleSubmit}>
        <div className="d-flex form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Tarea 1"
            onChange={(e) => e.target.value !== ""? setTarea(e.target.value) : alert("Please type something")}
            value={tarea}
          ></input>
          <button className="btn btn-outline-dark" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
    <section className="container w-75">
      {/* arregloTareas es el nombre del props, tareas es el estate */}
      <Lista arregloTareas={tareas} borrarTarea={borrarTarea}></Lista>
    </section>
    </Fragment>
  );
};

export default Formulario;
