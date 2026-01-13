import React from 'react';
import { VerticalAccordion, AccordionItem } from "@/components/ui/VerticalAccordion";
import { FiCode, FiMonitor, FiServer, FiCpu } from "react-icons/fi";

const SkillsSection = () => {
  const skillCategories: AccordionItem[] = [
    {
      id: 1,
      title: "Core Languages",
      Icon: FiCode,
      skills: [
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      Icon: FiMonitor,
      skills: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Vite.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      ],
    },
    {
      id: 3,
      title: "Backend Development",
      Icon: FiServer,
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Qdrant", logo: "https://qdrant.tech/img/logo.svg" },
        { name: "Neo4j", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg" },
        { name: "AWS S3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ],
    },
    {
      id: 4,
      title: "AI/ML",
      Icon: FiCpu,
      skills: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "LangGraph", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
        { name: "NLP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute w-24 h-24 border border-sunset-coral/10 rounded-full top-1/4 left-1/4">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-sunset-coral/60 rounded-full animate-orbit"></div>
      </div>
      <div className="absolute w-32 h-32 border border-muted-peach/10 rounded-full bottom-1/3 right-1/4">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-muted-peach/60 rounded-full animate-orbit" style={{animationDuration: '20s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="bg-gradient-to-r from-sunset-coral to-muted-peach bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <VerticalAccordion items={skillCategories} />
      </div>
    </section>
  );
};

export default SkillsSection;
