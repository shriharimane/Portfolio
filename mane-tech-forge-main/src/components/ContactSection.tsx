import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 dark-gradient-bg text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Get In Touch</h2>
        <p className="text-center text-white/80 mb-12 max-w-xl mx-auto">
          Feel free to reach out if you want to collaborate on a project, have questions, or just want to connect!
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-portfolio-light-purple" />
                  <span>maneshrihari23@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-portfolio-light-purple" />
                  <a 
                    href="https://github.com/ShrihariMane" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-portfolio-light-purple transition-colors"
                  >
                    github.com/ShrihariMane
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-portfolio-light-purple" />
                  <a 
                    href="https://www.linkedin.com/in/shriharimane23/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-portfolio-light-purple transition-colors"
                  >
                    linkedin.com/in/shrihari-mane
                  </a>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <Button asChild variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
                    <a href="mailto:maneshrihari23@gmail.com" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
                    <a href="https://github.com/ShrihariMane" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
                    <a href="https://linkedin.com/in/shrihari-mane" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
