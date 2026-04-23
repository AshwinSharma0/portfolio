import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    title: 'NIYAM – Habit Tracker',
    description: 'Habit tracking with streaks, reminders, local storage',
    tech: ['React', 'Tailwind CSS'],
    liveUrl: 'https://niyam-git-main-ashwinsharma0s-projects.vercel.app',
    githubUrl: 'https://github.com/ashwinsharma0',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Sanjeevani Garden – Digital Nursery',
    description: 'Eco-awareness platform using Next.js + Tailwind',
    tech: ['Next.js', 'Tailwind CSS'],
    liveUrl: 'https://sanjeevani-garden.vercel.app',
    githubUrl: 'https://github.com/ashwinsharma0',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'AI Currency Converter',
    description: 'Real-time currency conversion with API integration',
    tech: ['Next.js', 'API Integration'],
    liveUrl: 'https://currency-ai.vercel.app',
    githubUrl: 'https://github.com/ashwinsharma0',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'PathPilot AI',
    description: 'AI-powered path planning and navigation solution',
    tech: ['React', 'Node.js', 'Python', 'AI/ML'],
    liveUrl: 'https://pathpilot-ai.onrender.com/',
    githubUrl: 'https://github.com/ashwinsharma0/pathpilot',
    gradient: 'from-orange-500 to-red-500'
  }
];

function Projects() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
            Featured projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of projects showcasing my skills in web development and problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="glass glass-border rounded-2xl p-6 h-full flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${project.gradient} mb-6`} />
                
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button
                    asChild
                    className="flex-1 rounded-xl group/btn"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-xl shrink-0"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;