import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import logo from '@/assets/logo.svg';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/ashwinsharma0',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ashwinsharma-/',
    label: 'LinkedIn'
  },
  {
    icon: Mail,
    href: 'mailto:sharmatheashwin@gmail.com',
    label: 'Email'
  }
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

function Footer() {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="glass glass-border border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ashwin Logo" className="h-8 w-auto object-contain" />
            <div>
              <span className="text-xl font-bold bg-clip-text text-transparent gradient-primary">
                Ashwin Sharma
              </span>
              <p className="mt-2 text-sm">
                Full Stack Developer & Data Science Enthusiast
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold mb-3 block">Quick Links</span>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold mb-3 block">Connect</span>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2026 Ashwin Sharma. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;