import { useState } from "react";

function Navbar() {
const [open, setOpen] = useState(false);

const handleToggle = () => {
    setOpen(!open);
};

return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 flex justify-between items-center">
    <div className="w-full mx-auto flex justify-between items-center">
        
        {/* Brand / Logo */}
        <a href="home" className="text-white text-2xl font-bold uppercase tracking-wider">
        Cookeira
        </a>

        {/* Links Desktop */}
        <ul className="hidden md:flex space-x-6">
        <li>
            <a href="/home" className="text-white hover:text-gray-200 transition-colors">Home</a>
        </li>
        <li>
            <a href="/sobre" className="text-white hover:text-gray-200 transition-colors">Sobre</a>
        </li>
        <li>
            <a href="/servicos" className="text-white hover:text-gray-200 transition-colors">Serviços</a>
        </li>
        <li>
            <a href="/contato" className="text-white hover:text-gray-200 transition-colors">Contato</a>
        </li>
        </ul>

        {/* Ícone Hamburguer - Mobile */}
        <div className="md:hidden" onClick={handleToggle}>
        <div className={`w-8 h-1 bg-white my-1 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-8 h-1 bg-white my-1 transition-all ${open ? 'opacity-0' : ''}`}></div>
        <div className={`w-8 h-1 bg-white my-1 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
    </div>

      {/* Menu Mobile */}
    {open && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 bg-blue-700 p-4">
        <li>
            <a href="/home" className="text-white hover:text-gray-200 transition-colors">Home</a>
        </li>
        <li>
            <a href="/sobre" className="text-white hover:text-gray-200 transition-colors">Sobre</a>
        </li>
        <li>
            <a href="/servicos" className="text-white hover:text-gray-200 transition-colors">Serviços</a>
        </li>
        <li>
            <a href="/contato" className="text-white hover:text-gray-200 transition-colors">Contato</a>
        </li>
        </ul>
    )}
    </nav>
);
}

export default Navbar;
