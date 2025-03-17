import Navbar from '../../components/headerForm/Navbar';
import Footer from '../../components/footerForm/Footer';
import biscoito from '../../assets/maquina_de_fazer_biscoito_industrial.jpg';
import mulher1 from '../../assets/mulher 1.jpg';
import mulher2 from '../../assets/mulher 2.jpg';
import mulher3 from '../../assets/mulher 3.jpg';

function Home() {
return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
        {/* Seção de Introdução */}
        <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Conheça a máquina de Cookies mais legal do Mundo!
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mt-4">
            Sabor irresistível, praticidade inigualável
            </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
                A Cookeira é sua nova aliada na cozinha, projetada para tornar o preparo de biscoitos muito mais fácil e rápido. Com um sistema automatizado, ela mistura os ingredientes na medida certa e assa os biscoitos no ponto perfeito. Basta selecionar suas preferências, e a Cookeira cuida de todo o processo, garantindo sempre um sabor irresistível e uma textura impecável. Seja para um lanche rápido ou para surpreender seus amigos e familiares, a Cookeira entrega sempre os melhores biscoitos, de maneira prática e sem complicações!
            </p>
            <ul className="space-y-2 text-lg text-gray-700 mb-6">
                <li>🌟 Facilidade total de uso</li>
                <li>⚙️ Configurações personalizáveis</li>
                <li>🍪 Assa biscoitos em minutos</li>
                <li>💧 Limpeza automática integrada</li>
            </ul>
            <div className="flex space-x-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-300">
                Compre Agora
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition duration-300">
                Saiba Mais
                </button>
            </div>
            </div>
            <div className="md:w-1/2">
            <img src={biscoito} alt="Máquina de fazer biscoito industrial" className="w-full rounded-lg shadow-lg" />
            </div>
        </div>
        </section>

        {/* Seção de Funcionalidades */}
        <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Funcionalidades principais
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            A Cookeira vem equipada com tecnologia de ponta para simplificar e automatizar cada etapa da produção de biscoitos. Confira abaixo tudo o que ela oferece:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                { icon: "🍪", text: "Prepara a massa de maneira 100% automática" },
                { icon: "🔥", text: "Vários modos de cozimento para diferentes texturas" },
                { icon: "👩‍🍳", text: "Interface amigável e fácil de usar" },
                { icon: "📜", text: "Receitas personalizáveis de acordo com sua preferência" },
                { icon: "🧈", text: "Controle preciso de textura e consistência" },
                { icon: "⏱️", text: "Programação de tempo para um cozimento perfeito" },
                { icon: "🧽", text: "Limpeza Automática para praticidade extra" },
                { icon: "🎉", text: "Receitas temáticas para ocasiões especiais" },
                { icon: "🔊", text: "Alerta sonoro quando os biscoitos estão prontos" },
            ].map((item, index) => (
                <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                <span className="text-2xl mr-3">{item.icon}</span>
                <span className="text-lg text-gray-700">{item.text}</span>
                </li>
            ))}
            </ul>
        </div>
        </section>

        {/* Seção de Depoimentos */}
        <section className="py-12">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Depoimentos
            </h1>
            <div className="flex flex-col md:flex-row justify-between gap-6">
            {[{ img: mulher1, name: "Liora Selene", depo: "Achei só o filé." },
                { img: mulher2, name: "Anira Valys", depo: "Xique no úrtimo." },
                { img: mulher3, name: "Mirella Kaelis", depo: "Babado dms." }
            ].map((pessoa, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
                <img src={pessoa.img} alt={pessoa.name} title={pessoa.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-medium text-gray-800">{pessoa.name}</h3>
                <p className="text-gray-600 mt-2">{pessoa.depo}</p>
                </div>
            ))}
            </div>
        </div>
        </section>

        {/* Seção de FAQ */}
        <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Perguntas Frequentes
            </h2>
            <div className="space-y-4">
            {[
                { question: "Como a Cookeira funciona?", answer: "Com um sistema automatizado, a Cookeira mistura os ingredientes e assa os biscoitos na textura perfeita. Basta selecionar suas preferências e pronto!" },
                { question: "Posso usar minhas próprias receitas?", answer: "Sim! A Cookeira permite que você personalize as receitas e ajuste os ingredientes de acordo com seu gosto." },
                { question: "Como é feita a limpeza da máquina?", answer: "A Cookeira possui um sistema de limpeza automática, que facilita a manutenção e garante que ela esteja pronta para o próximo uso." },
                { question: "Quais modos de cozimento estão disponíveis?", answer: "Há diversos modos de cozimento que permitem diferentes texturas, desde biscoitos mais macios até os mais crocantes." }
            ].map((faq, index) => (
                <div key={index} className="faq-item p-4 bg-white rounded-lg shadow cursor-pointer" onClick={(e) => {
                const p = e.currentTarget.querySelector("p");
                p.classList.toggle("hidden");
                }}>
                <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                <p className="mt-2 text-gray-600 hidden">{faq.answer}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    </main>
    <Footer />
    </div>
);
}

export default Home;
