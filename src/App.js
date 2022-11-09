// Importar archivos de estilos 
import './App.css';
// Importar componente Header
import  HeaderComponent  from './shared/Header/Header';
// Importar componente Footer
import Footer from './shared/Footer/Footer';
// Importar componente Home
import { Home } from './pages/Home/Home'
import { useState } from 'react';


// Crear la función que retorna mi componente en este caso APP
export default function App() {         
  const usuarioApp = 'John Doe';
  const otroValor = `Alguna data que tenga que enviar`;
  
  
  // const useStateVariable = useState(0);  
  // let count = useStateVariable[0];
  // let setCount = useStateVariable[1]; 

  let [ name, setName ] = useState(usuarioApp) //[valor, fn]
  let [ count, setCount  ] = useState(0) //[valor, funcion para actualizar el valor]

  function incrementCounter() {
    setCount( count = count +1 )
  }

  function updateName(evt) {
    setName(evt.target.value)
  }

  // console.log(useStateVariable)
  // Defino algunas variables
  
  // La funcion Retorno mi componente
  return (
    // Elementos propios del componente y subcomponentes
    <div>
        {/* Puedo enviarle datos a componentes hijos a traves de atributos que seran tomados como parametro de la funcion de mi componente como props.propiedad */}
        <HeaderComponent userHeader={name} />
        <h2>Welcome {name}</h2>
        <h2>Contador: {count}</h2>
        <button onClick={() => incrementCounter()}>Incrementar</button>

        <input type='text' onKeyUp={(evt)=> updateName(evt)} defaultValue={name}></input>
        <Home user={usuarioApp} otro={otroValor} />
        <Footer />
    </div>
  );

}

