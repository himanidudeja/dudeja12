import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-[#f9f8f4] text-pastel-gray py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo and Description */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-pastel-purple">Glow with Mind</h2>
          <p className="text-sm text-pastel-gray">Empowering you on your mental wellness journey.</p>
          <p className="text-xs italic text-pastel-gray mt-2">"Need help? You're not alone"</p>
          <p className="text-xs italic text-pastel-gray mt-2">"Call the Mental Health Helpline:1-800-123-4567"</p>

        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pastel-orange">
            <FacebookOutlined />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pastel-orange">
            <TwitterOutlined />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pastel-orange">
            <InstagramOutlined />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-pastel-gray text-xs mt-6">
        &copy;  Glow with Mind. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
