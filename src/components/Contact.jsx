import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sharmatheashwin@gmail.com',
    href: 'mailto:sharmatheashwin@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '9457042687',
    href: 'tel:9457042687'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashwinsharma-/',
    href: 'https://www.linkedin.com/in/ashwinsharma-/'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ashwinsharma0',
    href: 'https://github.com/ashwinsharma0'
  }
];

function Contact() {
  const { ref, isInView } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const emailServiceId = import.meta.env.service_6whbhu7;
  const emailTemplateId = import.meta.env.template_qgx2slj;
  const emailPublicKey = import.meta.env.2eE3_SBZji_UJ5qrs;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      toast.error('Email service is not configured. Please add your EmailJS keys.');
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        emailServiceId,
        emailTemplateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message
        },
        emailPublicKey
      )
      .then(() => {
        toast.success('Message sent successfully');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast.error('Unable to send message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
            Get in touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass glass-border rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="rounded-xl h-12 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="rounded-xl h-12 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-base mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={6}
                    className="rounded-xl resize-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass glass-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact information</h3>
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  const isExternal = method.label === 'LinkedIn' || method.label === 'GitHub' || method.label === 'Email';
                  
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-all duration-200 group cursor-pointer"
                    >
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors truncate">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass glass-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-muted-foreground leading-relaxed">
                Greater Noida, Uttar Pradesh, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;