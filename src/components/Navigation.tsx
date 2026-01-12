
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
          <a 
            href="https://drive.google.com/file/d/16GKbLN8_OpnhnweKEPBaWwHrxuatt6Ny/preview" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cosmic-secondary-button text-sm"
          >
            Resume
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          size="icon"
          className="md:hidden text-warm-light-gray hover:bg-white/10"
          onClick={toggleMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
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
          <a 
            href="https://drive.google.com/file/d/16GKbLN8_OpnhnweKEPBaWwHrxuatt6Ny/preview" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cosmic-secondary-button self-start my-2 text-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
