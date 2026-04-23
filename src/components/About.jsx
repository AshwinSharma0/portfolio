import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Palette, GitBranch, Brain, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    items: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'primary'
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Basic backend & database management'],
    color: 'accent'
  },
  {
    category: 'Programming',
    icon: Code2,
    items: ['Python', 'C', 'C++'],
    color: 'primary'
  },
  {
    category: 'Tools',
    icon: GitBranch,
    items: ['GitHub', 'Vercel', 'Figma'],
    color: 'accent'
  },
  {
    category: 'Concepts',
    icon: Brain,
    items: ['Data Science', 'Machine Learning', 'Data Visualization'],
    color: 'primary'
  }
];

function About() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
            About me
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="glass glass-border rounded-2xl p-8 shadow-lg">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm a Computer Science student passionate about building scalable web applications and exploring the intersection of software development and data science. Currently pursuing my B.Tech at AKTU, I specialize in full-stack development with a strong focus on modern frameworks like Next.js and React. My journey combines hands-on project experience with continuous learning in machine learning and data visualization.
              </p>
            </div>
          </div>
        </motion.div>

        <div id="skills" className="scroll-mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-semibold text-center mb-12"
          >
            Skills & expertise
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`glass glass-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group ${
                    index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-${skill.color}/10 group-hover:bg-${skill.color}/20 transition-colors`}>
                      <Icon className={`h-6 w-6 text-${skill.color}`} />
                    </div>
                    <h4 className="text-xl font-semibold">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg bg-muted text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;