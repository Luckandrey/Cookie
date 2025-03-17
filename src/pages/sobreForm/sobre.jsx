import React from 'react';
import Navbar from '../../components/headerForm/Navbar';
import Footer from '../../components/footerForm/Footer';
import sobreImage from '../../assets/Cookie-2.png';


function Sobre() {
return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
    <Navbar />

      {/* Conteúdo principal */}
    <main className="flex-grow">
        {/* Seção Hero (cabeçalho) */}
        <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sobre a Cookeira
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            A Cookeira nasceu da paixão por cookies e da vontade de simplificar
            o processo de produção. Com nossa tecnologia inovadora, você tem biscoitos
            perfeitos em minutos, sem complicações. Conheça um pouco mais sobre
            nossa história, missão e valores abaixo.
            </p>
        </div>
        </section>

        {/* Seção de História/Valores */}
        <section className="py-12 px-4">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Texto */}
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossa História</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                Desde o primeiro protótipo de máquina de cookies, buscamos unir
                praticidade e sabor para atender tanto chefs profissionais quanto
                cozinheiros de final de semana. A Cookeira surgiu para resolver o
                desafio de produzir cookies perfeitos com rapidez e consistência.
                </p>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Missão e Valores</h2>
                <p className="text-gray-700 leading-relaxed">
                Nossa missão é democratizar o acesso a biscoitos de alta qualidade,
                oferecendo tecnologia de ponta e facilidade de uso. Valorizamos a
                inovação, a qualidade e o respeito ao consumidor, garantindo produtos
                que atendam às necessidades de todos os amantes de cookies.
                </p>
            </div>

              {/* Imagem */}
            <div className="flex justify-center">
                <img
                src={sobreImage}
                alt="Imagem ilustrativa"
                className="rounded-lg shadow-lg"
                />
            </div>
            </div>
        </div>
        </section>
    </main>

      {/* Footer */}
    <Footer />
    </div>
);
}

export default Sobre;
