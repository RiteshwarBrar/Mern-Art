//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home.js';
import Paintings from './pages/paintings.js';
import Shop from './pages/shop.js';
import NotFound from './pages/notfound.js';
import Inventory from './pages/inventory.js';
import Cart from './pages/cart.js';
import NavBar from './components/Navbar.js';
import Footer from './components/Footer';

// http://localhost:3000/inventory

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
      
        <NavBar/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/paintings' element={<Paintings />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/inventory' element={<Inventory />} /> 
            <Route path='/checkout' element={<Cart />} /> 
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
