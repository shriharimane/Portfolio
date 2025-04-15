
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SkillsSection = () => {
  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Express', 'TensorFlow', 'PyTorch', 'Django'],
    },
    {
      id: 'tools',
      name: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Linux'],
    },
    {
      id: 'other',
      name: 'Other Skills',
      skills: ['UI/UX Design', 'RESTful APIs', 'Data Analysis', 'CI/CD', 'Agile/Scrum', 'System Design'],
    },
  ];

  return (
    <section id="skills" className="py-20 dark-gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-10">My Skills</h2>
        
        <Tabs defaultValue="languages" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-background/10 p-1 rounded-xl border border-white/10">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id} 
                className="text-sm md:text-base text-white data-[state=active]:bg-white/10 data-[state=active]:text-primary"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <Card className="border-none bg-transparent shadow-none overflow-hidden">
                <CardContent className="pt-6 p-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill} 
                        className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                      >
                        <span className="font-medium text-center text-white group-hover:text-primary transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
