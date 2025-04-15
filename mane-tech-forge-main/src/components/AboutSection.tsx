
import { Brain, Code, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 dark-gradient-bg text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 text-lg text-white/90">
              <p>
                As a third-year IT Engineering student, I've found my passion at the intersection of 
                code and creativity. My journey in tech is guided by a deep fascination with how 
                AI and machine learning can transform our digital landscape.
              </p>
              <p>
                I believe in the power of full-stack development to bring ideas to life. From intuitive 
                frontend experiences to robust backend architectures, I enjoy crafting complete solutions 
                that make a difference.
              </p>
              <p>
                What drives me is the endless opportunity to learn, create, and innovate. Whether it's 
                experimenting with new frameworks, collaborating on open-source projects, or diving into 
                the latest AI research, I'm constantly pushing my boundaries and expanding my skillset.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <Card className="border-none shadow-xl overflow-hidden bg-white/10 backdrop-blur-sm">
              <CardContent className="flex items-start p-6">
                <Brain className="w-10 h-10 text-portfolio-light-purple mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">AI & ML Enthusiast</h3>
                  <p className="text-white/70">
                    Passionate about neural networks, computer vision, and machine learning algorithms. Always learning and exploring new AI advancements.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-xl overflow-hidden bg-white/10 backdrop-blur-sm">
              <CardContent className="flex items-start p-6">
                <Code className="w-10 h-10 text-portfolio-teal mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Full-Stack Developer</h3>
                  <p className="text-white/70">
                    Experienced in building web applications from front to back, with a focus on creating clean, efficient, and user-friendly interfaces.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-xl overflow-hidden bg-white/10 backdrop-blur-sm">
              <CardContent className="flex items-start p-6">
                <Lightbulb className="w-10 h-10 text-portfolio-purple mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Tech Explorer & Problem Solver</h3>
                  <p className="text-white/70">
                    Always curious about new technologies and approaches. I enjoy tackling complex problems and finding elegant solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
