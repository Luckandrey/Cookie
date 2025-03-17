import React, { useState } from 'react';
import Navbar from '../../components/headerForm/Navbar';
import Footer from '../../components/footerForm/Footer';

function Contato() {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [mensagem, setMensagem] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com uma API ou apenas simular o envio
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);
    alert('Obrigado pelo contato!');
    // Limpa os campos do formulário
    setNome('');
    setEmail('');
    setMensagem('');
};

return (
    <div className="flex flex-col min-h-screen">
    <Navbar />

    <main className="flex-grow">
        <section className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contato
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Tem alguma dúvida ou quer saber mais sobre a Cookeira? Entre em contato conosco!
            </p>
        </div>

        <div className="container mx-auto max-w-lg">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">
                Nome
                </label>
                <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Seu nome"
                required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
                </label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Seu email"
                required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">
                Mensagem
                </label>
                <textarea
                id="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Sua mensagem"
                rows="5"
                required
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition duration-300"
            >
                Enviar
            </button>
            </form>
        </div>
        </section>
    </main>

    <Footer />
    </div>
);
}

export default Contato;
