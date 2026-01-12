"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// ===== Types and Interfaces =====
export interface iProject {
  name: string;
  shortDescription: string;
  fullDescription: string[];
  technologies: Array<{
    name: string;
    logo: string;
  }>;
  image: string;
  liveLink?: string;
  githubLink?: string;
}

interface iCarouselProps {
  items: React.ReactElement<{
    project: iProject;
    index: number;
    layout?: boolean;
    onCardClose: () => void;
  }>[];
  initialScroll?: number;
}

// ===== Custom Hooks =====
const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      onOutsideClick();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

// ===== Components =====
export const ProjectCarousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  return (
    <div className="relative w-full mt-10">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div
          className={cn(
            "flex flex-row justify-start gap-4 pl-3",
            "max-w-7xl mx-auto"
          )}
        >
          {items.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={`card-${index}`}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                {React.cloneElement(item, {
                  onCardClose: () => {
                    return handleCardClose(index);
                  },
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-sunset-coral flex items-center justify-center disabled:opacity-50 hover:bg-sunset-coral/80 transition-colors duration-200"
          onClick={handleScrollLeft}
          disabled={!canScrollLeft}
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-sunset-coral flex items-center justify-center disabled:opacity-50 hover:bg-sunset-coral/80 transition-colors duration-200"
          onClick={handleScrollRight}
          disabled={!canScrollRight}
        >
          <ArrowRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export const ProjectCard = ({
  project,
  index,
  layout = false,
  onCardClose = () => {},
}: {
  project: iProject;
  index: number;
  layout?: boolean;
  onCardClose?: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => {
    return setIsExpanded(true);
  };
  
  const handleCollapse = () => {
    setIsExpanded(false);
    onCardClose();
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCollapse();
      }
    };

    if (isExpanded) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.dataset.scrollY = scrollY.toString();
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo({ top: scrollY, behavior: "instant" });
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      return window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isExpanded]);

  useOutsideClick(containerRef, handleCollapse);

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 h-screen overflow-hidden z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-deep-charcoal/95 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${project.name}` : undefined}
              className="max-w-5xl mx-auto bg-gradient-to-br from-deep-charcoal to-deep-charcoal/90 border border-warm-light-gray/10 h-[90vh] z-[60] p-4 md:p-10 rounded-3xl relative md:mt-10 overflow-y-auto"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto rounded-full flex items-center justify-center bg-sunset-coral hover:bg-sunset-coral/80 transition-colors"
                onClick={handleCollapse}
              >
                <X className="h-6 w-6 text-white" />
              </button>
              
              <motion.h2
                layoutId={layout ? `title-${project.name}` : undefined}
                className="text-3xl md:text-4xl font-bold text-warm-light-gray mt-4"
              >
                {project.name}
              </motion.h2>

              <div className="mt-6 space-y-4">
                {project.fullDescription.map((paragraph, idx) => (
                  <p key={idx} className="text-warm-light-gray/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-sunset-coral mb-4">Technologies Used</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-2 p-3 bg-warm-light-gray/5 rounded-xl hover:bg-sunset-coral/10 transition-all border border-warm-light-gray/10"
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML += `<span class="text-xs text-sunset-coral font-bold">${tech.name.slice(0, 2).toUpperCase()}</span>`;
                          }
                        }}
                      />
                      <span className="text-xs text-warm-light-gray/70 text-center">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {(project.liveLink || project.githubLink) && (
                <div className="mt-8 flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-sunset-coral text-white rounded-lg hover:bg-sunset-coral/80 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>View Live</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-warm-light-gray/10 text-warm-light-gray rounded-lg hover:bg-warm-light-gray/20 transition-colors border border-warm-light-gray/20"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <motion.button
        layoutId={layout ? `card-${project.name}` : undefined}
        onClick={handleExpand}
        className="group"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div className="rounded-2xl bg-gradient-to-br from-deep-charcoal to-deep-charcoal/90 border border-warm-light-gray/10 h-[520px] w-80 md:w-96 overflow-hidden flex flex-col relative z-10 shadow-lg hover:shadow-sunset-coral/20 transition-all">
          {/* Project Image */}
          <div className="w-full h-56 relative overflow-hidden bg-warm-light-gray/5">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-sunset-coral/20 to-muted-peach/20"><span class="text-4xl font-bold text-sunset-coral">${project.name.slice(0, 2).toUpperCase()}</span></div>`;
                }
              }}
            />
          </div>

          {/* Project Content */}
          <div className="flex-1 p-6 flex flex-col">
            <motion.h3
              layoutId={layout ? `title-${project.name}` : undefined}
              className="text-xl font-bold text-warm-light-gray mb-3 group-hover:text-sunset-coral transition-colors"
            >
              {project.name}
            </motion.h3>
            
            <p className="text-warm-light-gray/70 text-sm leading-relaxed flex-1">
              {project.shortDescription.length > 120
                ? `${project.shortDescription.slice(0, 120)}...`
                : project.shortDescription}
            </p>

            {/* Live Links */}
            {(project.liveLink || project.githubLink) && (
              <div className="flex gap-3 mt-4 pt-4 border-t border-warm-light-gray/10">
                {project.liveLink && (
                  <span className="flex items-center gap-2 text-xs text-sunset-coral">
                    <ExternalLink size={14} />
                    Live Demo
                  </span>
                )}
                {project.githubLink && (
                  <span className="flex items-center gap-2 text-xs text-warm-light-gray/60">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.button>
    </>
  );
};
