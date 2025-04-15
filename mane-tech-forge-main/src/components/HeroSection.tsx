
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-portfolio-light-purple/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-portfolio-teal/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="gradient-text">Shrihari Mane</span>
        </h1>
        
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-xl md:text-2xl font-medium mb-2">IT Engineering Student</p>
          <div className="flex flex-wrap justify-center gap-3 text-lg">
            <span className="bg-portfolio-purple/10 text-portfolio-purple px-3 py-1 rounded-full">AI & ML Enthusiast</span>
            <span className="bg-portfolio-teal/10 text-portfolio-teal px-3 py-1 rounded-full">Full-Stack Developer</span>
            <span className="bg-portfolio-deep-blue/10 text-portfolio-deep-blue px-3 py-1 rounded-full">Tech Explorer</span>
          </div>
        </div>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-muted-foreground">
          Building innovative solutions and exploring cutting-edge technologies to solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:from-portfolio-purple/90 hover:to-portfolio-teal/90">
            <a href="#projects">View My Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
