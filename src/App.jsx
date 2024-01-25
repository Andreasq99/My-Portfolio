import { useState } from 'react';
import './App.css';
import {Outlet} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='bg' className='bg-rviolet text-plavender'>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
