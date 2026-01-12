
import React from 'react';
import { Heart } from "lucide-react";
import CurvedLoop from "@/components/ui/CurvedLoop";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-warm-light-gray/10 bg-deep-charcoal/50">
      {/* Curved Text Loop */}
      <div className="w-full mb-16 md:mb-20">
        <CurvedLoop 
          marqueeText="Want to Work Together ? ✦ Let's Build Something Together !!! ✦ "
          speed={2}
          curveAmount={300}
          direction="left"
          interactive={true}
          className="fill-sunset-coral"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-warm-light-gray/60 text-sm">
            © {new Date().getFullYear()} Mrigank Singh. All rights reserved.
          </p>
        </div>
        
        <div className="mt-6 text-center text-warm-light-gray/40 text-xs flex items-center justify-center gap-1">
          <span>Built with</span>
          <Heart className="h-3 w-3 text-sunset-coral animate-pulse" />
          <span>using React and Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
