import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Paintings from './pages/paintings.js';
import About from './pages/about.js';
import NotFound from './pages/notfound.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/paintings' element={<Paintings />} />
            <Route path='/About' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
