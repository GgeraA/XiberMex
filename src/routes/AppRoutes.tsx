// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import MarIAProject from '../pages/MarIa';
import PuntoMovilProject from '../pages/PuntoMovil';

const AppRoutes = () => {
  return (

      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        {/*<Route path="/servicios" element={<Services />} />*/}
        <Route path="/proyectos/maria" element={<MarIAProject />} />
        <Route path="/proyectos/puntomovil" element={<PuntoMovilProject />} />
        
        {/* Añade estas rutas para el navbar */}
        <Route path="/soluciones" element={<div>Soluciones</div>} />
        <Route path="/recursos" element={<div>Recursos</div>} />
      </Routes>
  );
};

export default AppRoutes;