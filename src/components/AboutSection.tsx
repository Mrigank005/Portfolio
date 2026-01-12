import React from 'react';
import MagicBento from "@/components/ui/MagicBento";
import { BentoCardProps } from "@/components/ui/MagicBento";
import { Linkedin, Mail, Github } from "lucide-react";

const AboutSection = () => {
  const cardData: BentoCardProps[] = [
    // Top Left - Social Media Links
    {
      color: '#1a1a1a',
      content: (
        <>
          <div className="card__header flex justify-between gap-3 relative text-white mb-4">
            <span className="card__label text-base font-semibold">Connect</span>
          </div>
          <div className="card__content flex flex-col gap-4 relative text-white">
            <a 
              href="https://www.linkedin.com/in/mrigank005" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-white/80 hover:text-sunset-coral transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="mailto:mriganksingh005@gmail.com" 
              className="flex items-center gap-3 text-white/80 hover:text-sunset-coral transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>
            <a 
              href="https://github.com/Mrigank005" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-white/80 hover:text-sunset-coral transition-colors"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>
            <a 
              href="https://leetcode.com/u/MrigankSingh/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-white/80 hover:text-sunset-coral transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
              <span className="text-sm">LeetCode</span>
            </a>
          </div>
        </>
      )
    },
    // Top Mid - Photograph
    {
      color: '#1a1a1a',
      content: (
        <>
          <img 
            src="/profile.jpg" 
            alt="Mrigank Singh" 
            className="w-full h-full object-cover absolute inset-0"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const parent = (e.target as HTMLImageElement).parentElement;
              if (parent) {
                parent.innerHTML = '<div class="flex items-center justify-center w-full h-full bg-gradient-to-br from-sunset-coral to-muted-peach"><span class="text-5xl font-bold text-white">MS</span></div>';
              }
            }}
          />
        </>
      )
    },
    // Top Right - My Background (Spans 2 columns)
    {
      color: '#1a1a1a',
      content: (
        <>
          <div className="card__header flex justify-between gap-3 relative text-white mb-3">
            <span className="card__label text-base font-semibold">My Background</span>
          </div>
          <div className="card__content flex flex-col relative text-white overflow-y-auto">
            <p className="text-sm leading-relaxed mb-3">
              I was <span className="text-sunset-coral font-semibold">born and raised</span> in the city of <span className="text-sunset-coral font-semibold">Kanpur</span>. I <span className="text-sunset-coral font-semibold">might not be the best student</span>, but I <span className="text-sunset-coral font-semibold">always excelled in the subjects that interested me</span>. I also spent a lot of my time on <span className="text-sunset-coral font-semibold">hobbies</span> like, <span className="text-sunset-coral font-semibold">sports</span> like cricket, swimming, and badminton, <span className="text-sunset-coral font-semibold">musical instruments</span> like guitar and tabla, and <span className="text-sunset-coral font-semibold">video games</span> like BGMI and Call of Duty.
            </p>
            <p className="text-sm leading-relaxed">
              <span className="text-sunset-coral font-semibold">Spending time on many different things</span> from my childhood led me to <span className="text-sunset-coral font-semibold">develop a generalist mindset</span>, where I try to <span className="text-sunset-coral font-semibold">learn and explore everything</span> I come across but <span className="text-sunset-coral font-semibold">master the things that interest me most</span>.
            </p>
          </div>
        </>
      )
    },
    // Bottom Left - Computer Science Journey (Spans 2 columns)
    {
      color: '#1a1a1a',
      content: (
        <>
          <div className="card__header flex justify-between gap-3 relative text-white mb-3">
            <span className="card__label text-base font-semibold">My Computer Science Journey</span>
          </div>
          <div className="card__content flex flex-col relative text-white overflow-y-auto">
            <p className="text-sm leading-relaxed">
              My journey with computer science followed the same pattern as my early life. When I was <span className="text-sunset-coral font-semibold">first introduced to CS</span>, I <span className="text-sunset-coral font-semibold">learned C programming</span> as in-depth as I could to <span className="text-sunset-coral font-semibold">clear all my basics</span> and understand the <span className="text-sunset-coral font-semibold">foundational concepts of programming</span>. Then I explored full-stack development, AI/ML, data science, cloud computing, and game development. But <span className="text-sunset-coral font-semibold">AI-native full-stack development</span> interested me the most, so I <span className="text-sunset-coral font-semibold">worked extensively</span> in that area, as can be seen from my <span className="text-sunset-coral font-semibold">projects</span>. Currently, I am learning machine learning and system design.
            </p>
          </div>
        </>
      )
    },
    // Bottom Middle - Patents
    {
      color: '#1a1a1a',
      content: (
        <>
          <div className="card__header flex justify-between gap-3 relative text-white mb-2">
            <span className="card__label text-base font-semibold">Innovation</span>
          </div>
          <div className="card__content flex flex-col items-center justify-center h-full relative text-white text-center">
            <div className="text-4xl font-bold text-sunset-coral mb-2">3</div>
            <p className="text-sm">Patents Applied</p>
          </div>
        </>
      )
    },
    // Bottom Right - ACM-W
    {
      color: '#1a1a1a',
      content: (
        <>
          <div className="card__header flex justify-between gap-3 relative text-white mb-2">
            <span className="card__label text-base font-semibold">Leadership</span>
          </div>
          <div className="card__content flex flex-col items-center justify-center h-full relative text-white text-center px-2">
            <p className="text-sm leading-relaxed">
              Currently serving as <span className="text-sunset-coral font-semibold">Events Head</span> @ UPES ACM-W Student Chapter
            </p>
          </div>
        </>
      )
    }
  ];
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="bg-gradient-to-r from-sunset-coral to-muted-peach bg-clip-text text-transparent">Me</span>
        </h2>
        
        <MagicBento
          cardData={cardData}
          enableTilt
          enableMagnetism
          enableStars
          enableSpotlight
          enableBorderGlow
          clickEffect
          textAutoHide={false}
          glowColor="255, 127, 80"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-sunset-coral opacity-70 rounded-full animate-twinkle"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-sunset-coral opacity-50 rounded-full animate-twinkle" style={{animationDelay: '-1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-muted-peach opacity-60 rounded-full animate-twinkle" style={{animationDelay: '-2s'}}></div>
    </section>
  );
};

export default AboutSection;
