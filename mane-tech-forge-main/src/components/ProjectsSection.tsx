
import { useState, useEffect } from 'react';
import { Github, ExternalLink, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  topics: string[];
  homepage: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/ShrihariMane/repos?sort=updated&per_page=3');
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        
        const data = await response.json();
        // Filter out "snake-game" and "js-practice" projects
        const filteredProjects = data.filter((repo: Repository) => 
          !['snake-game', 'js-practice'].includes(repo.name.toLowerCase())
        );
        setProjects(filteredProjects);
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err);
        setError('Unable to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 dark-gradient-bg bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-white">My Projects</h2>
        <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
          Here are some of my recent projects. These represent my interests and skills in various technologies.
        </p>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 text-portfolio-light-purple animate-spin" />
            <span className="ml-2 text-lg text-white">Loading projects...</span>
          </div>
        )}

        {error && (
          <div className="text-center text-destructive py-8">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="card-shadow h-full flex flex-col bg-white/10 backdrop-blur-sm border-white/10 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <CardDescription className="text-white/70">{project.description || 'No description available'}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics && project.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs bg-white/10 text-white border-white/20">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        Repository
                      </a>
                    </Button>
                    {project.homepage && (
                      <Button asChild size="sm" className="bg-portfolio-light-purple hover:bg-portfolio-purple text-white">
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <a 
                  href="https://github.com/ShrihariMane" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View More on GitHub
                </a>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
