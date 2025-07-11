import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A personal portfolio website, built to showcase my projects, skills, experience, and achievements as a developer and creative technologist.",
      tags: ["Developer Portfolio", "React", "Tailwind CSS", "Vercel Deployment", "Responsive Website"],
      liveLink: "https://mrigank-portfolio-website.vercel.app/",
      githubLink: "https://github.com/Mrigank005/Portfolio",
      type: "Live Website"
    },
    {
      title: "Bubble Labyrinth",
      description: "A 3D puzzle-platformer built during Global Game Jam 2025. Navigate complex mazes using physics-based bubble mechanics. ",
      tags: ["Unity", "C#", "3D Game", "Game Development", "Global Game Jam"],
      liveLink: "https://globalgamejam.org/games/2025/bubble-labyrinth-9",
      githubLink: "https://globalgamejam.org/games/2025/bubble-labyrinth-9",
      type: "Game Link"
    },
    {
      title: "Optical Character Recognition (OCR)",
      description: "This Python script automates the extraction of text from images using Tesseract OCR. It processes all provided images and saves the extracted text as .txt files",
      tags: ["Python", "Tesseract", "OCR", "Image Processing", "Text Extraction", "Image to Text"],
      githubLink: "https://github.com/Mrigank005/OCR",
      type: "GitHub"
    },
    {
      title: "Rubric Generator",
      description: "A machine learning model designed to generate grading rubrics based on a given question and a sample answer. The model has been fine-tuned on custom data and implemented in a Jupyter Notebook.",
      tags: ["Machine Learning", "Python", "Jupyter Notebook", "Text Generation", "Custom FInetuned Model", "LLaMA"],
      liveLink: "https://huggingface.co/Mrigank005/Rubric_Generator",
      githubLink: "https://github.com/Mrigank005/Rubric_Generator",
      type: "Hugging Face"
    },
    {
      title: "Disaster Response Training Tool",
      description: "The Disaster Response Training Tool is an interactive web-based platform designed at a Hackathon to enhance disaster preparedness and response training. It provides users with realistic simulations, decision-making scenarios, and educational resources to improve their ability to handle emergency situations effectively.",
      tags: ["HTML", "Javascript", "CSS", "Gemini API", "Vercel Deployment", "AI Chatbot"],
      liveLink: "https://disaster-response-traning-tool.vercel.app/",
      githubLink: "https://github.com/Mrigank005/Disaster_Response_Traning_Tool",
      type: "Live Website"
    },
    {
      title: "NeoTutor",
      description: "NeoTutor is an interactive AI Agents powered tutoring system built using LLaMA-3 and LangGraph. It delivers adaptive questions, structured feedback, personalized practice, and real-time progress tracking — all within a Jupyter Notebook. Perfect for learners seeking an engaging and intelligent self-paced learning assistant.",
      tags: ["Python", "LLaMA", "LangGraph", "Transformers", "Jupyter Notebook", "Google Colab"],
      liveLink: "https://colab.research.google.com/drive/1X4QwSB48fddXATlJBYtab16l7TM72KZk?usp=sharing",
      githubLink: "https://github.com/Mrigank005/NeoTutor",
      type: "Colab Notebook"
      }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="bg-gradient-to-r from-space-purple to-space-violet bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects && projects.map((project, index) => (
            <Card 
              key={index} 
              className="cosmic-card overflow-hidden group bg-gradient-to-br from-transparent to-space-deeper/50"
            >
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-space-purple transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/70">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags && project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-space-deeper/80 text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 py-4 border-t border-white/5 flex justify-between">
                <span className="text-space-purple text-sm">
                  <span className="mr-2">🔗</span>
                  {project.type}
                </span>
                
                <div className="flex gap-3">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-space-purple transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-space-purple transition-colors"
                    aria-label="View source code"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </CardFooter>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-space-purple/20 rotate-45 translate-x-6 -translate-y-6 group-hover:bg-space-purple/30 transition-colors"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-space-star opacity-70 rounded-full animate-twinkle"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-space-purple opacity-50 rounded-full animate-twinkle" style={{animationDelay: '-1s'}}></div>
    </section>
  );
};

export default ProjectsSection;
