import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Encabezado from './Componentes/Encabezado';
import Inicio from './Paginas/Inicio'; 
import Blogs from './Paginas/Blogs';
import Contacto from './Paginas/Contacto';
import Nosotros from './Paginas/Nosotros'; 


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Encabezado />}>
            <Route index element={<Inicio />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="nosotros" element={<Nosotros />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

