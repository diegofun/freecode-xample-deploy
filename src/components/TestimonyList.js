import React from 'react';
import '../style-sheets/TestimonyList.css';
import Testimony from './Testimony';

class TestimonyList extends React.Component {
  render(){
    return(
        <div className='testimony-list'>
            <h1 className="page-title">
                Pantallas principales de la App 'Orders'
            </h1>
                
            <Testimony
              name="splash"
              order="Primer pantalla en aparecer"
              description="Es una pantalla que se ocupa de mostrar al usuario que la app se está cargando, debe durar poco tiempo, y se ubica en la pantalla completa"
              image="splash"
            />
    
            <Testimony
              name="home"
              order="Segunda pantalla en aparecer"
              description="Contiene toda la informacion que el usuario debe ver la primera vista, resume diferentes detalles de acuerdo con las funciones del usuario determinado, ya sea Admin, Waiter, Kitchen o Bar"
              image="home"
            />
    
            <Testimony
              name="login"
              order="Primer pantalla en aparecer cuando no se ha iniciado sesion"
              description="Es una pantalla de login como cualquier otra, contiene un enlace a la pantalla de registro en caso de que sea la primera vez que se usa la App"
              image="login"
            />
    
        </div>
    );
  }
}

export default TestimonyList;