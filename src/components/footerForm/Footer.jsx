import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYoutube,} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Área principal */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="/"
              className="p-3 bg-white rounded-full transition-colors duration-300 hover:bg-gray-800"
            >
              <FaFacebook className="text-2xl text-gray-800 transition-colors duration-300 hover:text-white" />
            </a>
            <a
              href="/"
              className="p-3 bg-white rounded-full transition-colors duration-300 hover:bg-gray-800"
            >
              <FaInstagram className="text-2xl text-gray-800 transition-colors duration-300 hover:text-white" />
            </a>
            <a
              href="/"
              className="p-3 bg-white rounded-full transition-colors duration-300 hover:bg-gray-800"
            >
              <FaTwitter className="text-2xl text-gray-800 transition-colors duration-300 hover:text-white" />
            </a>
            <a
              href="/"
              className="p-3 bg-white rounded-full transition-colors duration-300 hover:bg-gray-800"
            >
              <FaGoogle className="text-2xl text-gray-800 transition-colors duration-300 hover:text-white" />
            </a>
            <a
              href="/"
              className="p-3 bg-white rounded-full transition-colors duration-300 hover:bg-gray-800"
            >
              <FaYoutube className="text-2xl text-gray-800 transition-colors duration-300 hover:text-white" />
            </a>
          </div>

          
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="bg-black py-4 text-center">
        <p className="text-sm">
          Copyright &copy;2025; Designed by{" "}
          <span className="uppercase tracking-wide font-light ml-1">
            Luckandrey
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
