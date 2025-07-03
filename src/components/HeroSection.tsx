
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, RocketIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Animated GIF Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/banner.gif" 
          alt="Animated banner" 
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/60 via-deep-charcoal/40 to-deep-charcoal/80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          {/* Greeting */}
          <h2 className="text-sunset-coral font-medium tracking-wide text-lg md:text-xl mb-4">
            Hi, I'm Mrigank Singh 👋
          </h2>
          
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-6">
            <span className="block text-warm-light-gray mb-2 md:mb-4">
              Exploring the universe of
            </span>
            <span className="block bg-gradient-to-r from-sunset-coral to-muted-peach bg-clip-text text-transparent">
              code, creativity & innovation
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-warm-light-gray/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8">
            A driven B.Tech CSE student at UPES, Dehradun — passionate about technology, AI, and building the next big thing in the startup world.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a href="#projects" className="cosmic-primary-button w-full sm:w-auto">
              <RocketIcon size={18} />
              View Projects
            </a>
            <a 
              href="https://drive.google.com/file/d/1HrV9PI5mA8kXHC-U5_4hdS7J71Cy7Q7j/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cosmic-secondary-button w-full sm:w-auto"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-warm-light-gray/50 z-10">
        <span className="text-sm mb-2 hidden sm:block">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border-2 border-warm-light-gray/20 flex justify-center">
          <div className="w-1.5 h-1.5 bg-warm-light-gray/60 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
