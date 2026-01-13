"use client";

import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";

// Custom hook for window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>(() => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return {
      width: 0,
      height: 0,
    };
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export interface AccordionItem {
  id: number;
  title: string;
  Icon: IconType;
  skills: Array<{
    name: string;
    logo: string;
  }>;
}

interface VerticalAccordionProps {
  items: AccordionItem[];
}

export const VerticalAccordion: React.FC<VerticalAccordionProps> = ({ items }) => {
  const [open, setOpen] = useState(items[0].id);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotation effect
  useEffect(() => {
    if (isHovering) return; // Pause when hovering

    const interval = setInterval(() => {
      setOpen((currentOpen) => {
        const currentIndex = items.findIndex(item => item.id === currentOpen);
        const nextIndex = (currentIndex + 1) % items.length;
        return items[nextIndex].id;
      });
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [items, isHovering]);

  const handleManualChange = (id: number) => {
    setOpen(id);
    // Timer will automatically reset due to useEffect dependency
  };

  return (
    <section className="p-4 w-full h-full">
      <div 
        className="flex flex-col lg:flex-row h-fit lg:h-[500px] w-full max-w-7xl mx-auto overflow-hidden rounded-2xl border border-warm-light-gray/10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={handleManualChange}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              skills={item.skills}
            />
          );
        })}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  Icon: IconType;
  title: string;
  skills: Array<{
    name: string;
    logo: string;
  }>;
}

const Panel = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  skills,
}: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-deep-charcoal hover:bg-deep-charcoal/80 transition-colors p-3 border-r-[1px] border-b-[1px] border-warm-light-gray/10 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180 text-warm-light-gray"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light text-warm-light-gray">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-gradient-to-br from-sunset-coral to-muted-peach grid place-items-center">
          <Icon className="text-white" />
        </div>
        <span
          className="w-4 h-4 bg-deep-charcoal group-hover:bg-deep-charcoal/80 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-warm-light-gray/10 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full h-full overflow-hidden relative bg-gradient-to-br from-deep-charcoal to-deep-charcoal/90 flex items-center justify-center p-8"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="w-full h-full overflow-y-auto"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-warm-light-gray/5 rounded-xl flex items-center justify-center p-3 transition-all duration-300 group-hover:bg-sunset-coral/10 group-hover:scale-110 border border-warm-light-gray/10">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-xs text-sunset-coral font-bold">${skill.name.slice(0, 2).toUpperCase()}</span>`;
                          }
                        }}
                      />
                    </div>
                    <span className="text-xs text-warm-light-gray text-center font-light group-hover:text-sunset-coral transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "400px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};
