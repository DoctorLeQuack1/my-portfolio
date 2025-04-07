import { useState } from 'react';
import './App.css';
import { CustomButton } from './base-components/CustomButton';
import { CustomForm } from './composed-components/CustomForm';
import { Portfolio } from './pages/Portfolio';
import { NavBar } from './composed-components/NavBar';
import { FormSub } from './pages/FormSub';
import { AboutMe } from './pages/AboutMe';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="sticky top-0 bg-transparent backdrop-blur-lg mb-5">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} /> {/* Ruta para la página principal (AboutMe) */}
            <Route path="/portfolio" element={<Portfolio />} /> {/* Ruta para la página de Portfolio */}
            <Route path="/form" element={<FormSub />} /> {/* Ruta para la página del Formulario */}
          </Routes>
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;