import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homeForm/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App
