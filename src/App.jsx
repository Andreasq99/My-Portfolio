
import './App.css';
import {Outlet} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <div id='bg' className='bg-rviolet text-plavender min-h-screen flex flex-col'>
      <Nav />
      <div className='grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
