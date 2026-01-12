
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-warm-light-gray">
            Mrigank SIngh
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 bg-gradient-to-r from-sunset-coral to-muted-peach bg-clip-text text-transparent">
            AI-Integrated Full Stack Developer
          </h2>

          {/* Description */}
          <h3 className="text-warm-light-gray/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            A <span className="text-sunset-coral font-semibold">Sophomore Student</span> from Dehradun, India with <span className="text-sunset-coral font-semibold">3 patents</span> filed. Building <span className="text-sunset-coral font-semibold">AI integrated FullStack Solutions</span> and <span className="text-sunset-coral font-semibold">RAG Chatbots</span>.
          </h3>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a
              href="https://drive.google.com/file/d/16GKbLN8_OpnhnweKEPBaWwHrxuatt6Ny/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-primary-button w-full sm:w-auto"
            >
              <Download size={18} />
              View Resume
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
