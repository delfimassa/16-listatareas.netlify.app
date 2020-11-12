import React from 'react';
import './App.css';
import Titulo from './Components/Titulo';
import Subtitulo from './Components/Subtitulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Components/Formulario';

// react funcional component
// como este llama a titulo y subtitulo se dice que es el componente PADRE 
// y por lo tanto le puede en viar info pero el hijo al padre no
// esta info se llama PROPS y el hijo lo puede leer y mostrar pero no modificar
function App() {
  return (
    <div>
      <Titulo></Titulo>
      <Subtitulo comision="1A"></Subtitulo>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
