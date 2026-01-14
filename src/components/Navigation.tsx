import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useChat } from '@/context/ChatContext';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openSidebar } = useChat();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle mobile menu
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" }
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 sm:py-4 glassmorphism shadow-lg' : 'py-4 sm:py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <a href="#" className="text-xl sm:text-2xl font-bold font-space bg-gradient-to-r from-soft-goldenrod via-sunset-coral to-muted-peach bg-clip-text text-transparent">
          Mrigank Singh
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-warm-light-gray/80 hover:text-warm-light-gray transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-sunset-coral after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {link.name}
            </a>
          ))}
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                onClick={openSidebar}
                className="cosmic-secondary-button text-sm gap-2 flex items-center"
              >
                <Sparkles size={16} />
                AI Assistant
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hey!! Feel free to question my AI Assistant about me.</p>
            </TooltipContent>
          </Tooltip>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={openSidebar}
                    className="text-sunset-coral hover:bg-white/10"
                  >
                    <Sparkles size={20} />
                  </Button>
              </TooltipTrigger>
              <TooltipContent>
                 <p>Hey!! Feel free to question my AI Assistant about me.</p>
              </TooltipContent>
            </Tooltip>

            <Button 
              variant="ghost"
              size="icon"
              className="text-warm-light-gray hover:bg-white/10"
              onClick={toggleMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden glassmorphism absolute top-full left-0 right-0 transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container mx-auto py-4 flex flex-col gap-4 px-4 sm:px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-warm-light-gray/80 hover:text-warm-light-gray py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;