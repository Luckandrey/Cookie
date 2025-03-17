import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homeForm/home';
import Sobre from './pages/sobreForm/sobre'; 
import Servicos from './pages/servicosForm/servicoes';
import Contato from './pages/contatoForm/contato';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
