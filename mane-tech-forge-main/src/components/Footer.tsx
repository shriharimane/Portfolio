import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="dark-gradient-bg text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">Portfolio</p>
            <p className="text-sm opacity-80">IT Engineering Student • AI & ML Enthusiast</p>
          </div>
          
          <div className="flex space-x-6 text-white/80">
            <a 
              href="https://github.com/ShrihariMane" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-light-purple transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shriharimane23/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-light-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
  href="mailto:maneshrihari23@gmail.com" 
  className="hover:text-portfolio-light-purple transition-colors"
  aria-label="Send email to maneshrihari23@gmail.com"
>
  
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-6 text-center text-sm opacity-70">
          <p>© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
