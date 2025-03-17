import React from 'react';
import Navbar from '../../components/headerForm/Navbar';
import Footer from '../../components/footerForm/Footer';

function Servicos() {
const services = [
    {
    title: "Personalização de Cookies",
    description: "Crie receitas únicas escolhendo ingredientes e moldando o sabor do seu cookie.",
    icon: "🍪",
    },
    {
    title: "Entrega Rápida",
    description: "Receba seus cookies fresquinhos com nosso serviço de entrega ágil e seguro.",
    icon: "🚚",
    },
    {
    title: "Eventos e Festas",
    description: "Leve o sabor da Cookeira para eventos, festas e celebrações especiais.",
    icon: "🎉",
    },
    {
    title: "Consultoria Culinária",
    description: "Conte com dicas e consultoria para preparar os cookies perfeitos.",
    icon: "👩‍🍳",
    },
];

return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
    <Navbar />

      {/* Conteúdo Principal */}
    <main className="flex-grow">
        {/* Seção de Cabeçalho */}
        <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossos Serviços
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra como a Cookeira pode transformar sua experiência com cookies. Oferecemos serviços personalizados para atender a todas as suas necessidades!
            </p>
        </div>
        </section>

        {/* Seção de Cards de Serviços */}
        <section className="py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    </main>

      {/* Footer */}
    <Footer />
    </div>
);
}

export default Servicos;
