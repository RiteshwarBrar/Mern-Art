//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Paintings from './pages/paintings.js';
import About from './pages/about.js';
import NotFound from './pages/notfound.js';
import Inventory from './pages/inventory.js';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// http://localhost:3000/inventory

function App() {
  return (
    <div className="App">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
      <BrowserRouter>
        <NavBar/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/paintings' element={<Paintings />} />
            <Route path='/About' element={<About />} />
            <Route path='/inventory' element={<Inventory />} /> 
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
