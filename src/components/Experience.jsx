import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const timeline = [
  {
    type: 'education',
    icon: GraduationCap,
    title: 'B.Tech Computer Science',
    organization: 'AKTU – Dronacharya Group of Institutions',
    period: '2023 – 2027',
    description: 'Pursuing Bachelor of Technology in Computer Science with focus on software development and data science'
  },
  {
    type: 'certification',
    icon: Award,
    title: 'Deloitte Data Analytics Virtual Experience',
    organization: 'Deloitte',
    period: '2024',
    description: 'Completed virtual experience program focusing on data analytics and business intelligence'
  },
  {
    type: 'certification',
    icon: Award,
    title: 'Google Cloud Arcade Program',
    organization: 'Google Cloud',
    period: '2024',
    description: 'Completed hands-on labs and challenges in cloud computing and infrastructure'
  },
  {
    type: 'certification',
    icon: Award,
    title: 'Python Essentials I & II',
    organization: 'Cisco Networking Academy',
    period: '2023',
    description: 'Comprehensive Python programming certification covering fundamentals and advanced concepts'
  }
];

function Experience() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
            Education & certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My academic journey and professional development
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border-4 border-background">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <div className="glass glass-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="text-sm font-medium text-primary px-3 py-1 rounded-lg bg-primary/10 w-fit">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-base font-medium text-muted-foreground mb-2">
                      {item.organization}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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

export default Experience;