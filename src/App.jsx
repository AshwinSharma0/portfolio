import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Ashwin Sharma - Full Stack Developer & Data Science Enthusiast</title>
        <meta
          name="description"
          content="Portfolio of Ashwin Sharma, a full-stack developer and data science enthusiast from Greater Noida, India. Specializing in React, Next.js, and modern web technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;