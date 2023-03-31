import './App.css';
import Home from './components/Home';
import ordersLogo from './images/orders_icon.png';
import { useState } from 'react';

function App() {

  const [screen, setScreen] = useState('testimony');

  const logoClick = () => {
    if (screen == 'testimony')
      setScreen('counter');
    else if (screen == 'counter')
      setScreen('calc');
    else if (screen == 'calc')
      setScreen('tasks');
    else
      setScreen('testimony');
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={ordersLogo}
          alt='logo counter'
          onClick={logoClick}
        />
      </div>
      <div>
        <Home screen={screen}/>
      </div>
    </div>
  );
}

export default App;
