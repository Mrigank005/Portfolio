import React from 'react';
import { ProjectCarousel, ProjectCard, iProject } from "@/components/ui/ProjectCarousel";

const ProjectsSection = () => {
  const projects: iProject[] = [
    {
      name: "DASES – AI-Powered Descriptive Answer Evaluation System",
      shortDescription: "An AI-driven evaluation system that utilizes OCR and LLMs to grade descriptive answers 90x faster than manual methods with 98% accuracy.",
      fullDescription: [
        "• Developed an AI-driven evaluation system that utilizes OCR and Large Language Models (LLMs) to grade descriptive answers 90x faster than manual methods with 98% accuracy.",
        "• Engineered automated rubric generation to provide objective, consistent, and unbiased grading, ensuring transparent feedback and standardized criteria across large student cohorts.",
        "• Designed comprehensive performance dashboards for educators and institutions, delivering item-level analytics, learning gap identification, and professional student reports.",
        "• Scalable system architecture designed to handle peak exam seasons, currently supporting 400+ sheets processed with a 95% rubric accuracy rate.",
        "• Built a mobile companion app for students that delivers high-quality scans of handwritten answer sheets using edge detection and perspective correction, while supporting batch uploads and offline mode.",
      ],
      technologies: [
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OCR", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
      liveLink: "https://dases.esun.solutions/",
    },
    {
      name: "F&B Process Anomaly Detection System",
      shortDescription: "Built an anomaly detection system for Food & Beverage batch production, analyzing 1500+ batches across 11 parameters with ensemble ML models.",
      fullDescription: [
        "• Built an anomaly detection system for Food & Beverage batch production, analyzing 1500+ batches across 11 parameters (ingredient ratios, oven temp, mixing speeds, humidity).",
        "• Implemented four specialized models (Isolation Forest, One-Class SVM, Local Outlier Factor, Autoencoder) with consensus voting, reducing false positives by 6–15% vs. single models.",
        "• Developed interactive dashboards (Plotly) with PCA/t-SNE visualizations and SHAP-based explainability, enabling stakeholders to understand anomalies and take corrective actions.",
        "• Achieved F1-score of 0.87 with 92% model agreement; recommended deployment strategy: real-time monitoring (Isolation Forest) + deep nightly analysis (Autoencoder).",
      ],
      technologies: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "SHAP", logo: "https://raw.githubusercontent.com/slundberg/shap/master/docs/artwork/shap_logo.png" },
        { name: "Plotly", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg" },
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      githubLink: "https://github.com/Mrigank005/F-B-Process-Anomaly-Detection-System",
    },
    {
      name: "LexiBot – AI-Powered Legal Assistant",
      shortDescription: "A production RAG-powered Telegram assistant using LangChain + Google Generative AI with Qdrant vector store for legal queries.",
      fullDescription: [
        "• Architected a production RAG-powered Telegram assistant using LangChain + Google Generative AI (LLM + embeddings) with Qdrant as the vector store; implemented strict legal prompt templates and an Agent-4 fallback knowledge agent.",
        "• Built an intelligent document ingestion pipeline that uses an LLM to analyze document structure and create semantic chunks, falls back to recursive splitting when needed, generates embeddings in scalable batches.",
        "• Designed robust conversational UX and safety controls: per User Session tracking (consent flow, rate limits, session IDs), windowed conversation memory, and Response Formatter to convert legal jargon into plain language.",
        "• Delivered production-grade deployment & operations: Docker + docker-compose for Qdrant + bot, webhook and polling modes, health checks/monitoring, backup and restore tooling, logging and structured error handling.",
      ],
      technologies: [
        { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "Google AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
        { name: "Qdrant", logo: "https://qdrant.tech/img/logo.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      liveLink: "https://lexibot-ai.vercel.app/",
    },
    {
      name: "JobFit — AI Resume Matching Platform",
      shortDescription: "An LLM-driven resume-job matching pipeline using LangGraph workflow for intelligent candidate profiling and compatibility analysis.",
      fullDescription: [
        "• Architected an LLM-driven resume-job matching pipeline using a modular LangGraph workflow (Text Extraction→Job Analysis→ Candidate Profiling→Compatibility Analysis→Report Generation).",
        "• Built a production FastAPI backend with both synchronous and asynchronous job APIs, background task processing, UUID job tracking, temp-file lifecycle management and error/retry handling.",
        "• Implemented a secure, user-friendly Next.js frontend with drag-and-drop multi-file upload, S3 pre-signed upload/download URLs, upload progress, and polling for async job results.",
        "• Delivered integration-ready, extensible system qualities environment-driven API key/S3 configuration, clear error messaging, safe fallback logic, and well-defined extension points.",
      ],
      technologies: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Google Gemini", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
        { name: "LangGraph", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "AWS S3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      ],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      liveLink: "https://jobfit-analysis-ai.vercel.app/",
    },
    {
      name: "Career Services Automation Portal",
      shortDescription: "A smart internship monitoring platform with GPS-based attendance, daily logs, quizzes, and AI-driven mock interviews.",
      fullDescription: [
        "• Built a smart internship monitoring platform with GPS-based attendance, daily logs, quizzes, and AI-driven mock interviews for real-time evaluation.",
        "• Designed adaptive quizzes and automated report matching to ensure transparent performance tracking and accuracy.",
        "• Tested with 50+ students, with planned deployment for 7000+ users, demonstrating scalable system design and reliability.",
        "• Integrated full-stack features for data capture, analytics, and performance dashboards to streamline career services operations.",
      ],
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "AI/ML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      liveLink: "https://upes-samarth-internship.vercel.app/login",
    },
    {
      name: "MealMatch AI — Intelligent Meal Combo Generator",
      shortDescription: "An AI-driven meal combo generation engine combining DP/knapsack optimization with cultural templates for budget-constrained combos.",
      fullDescription: [
        "• Architected an AI-driven meal combo generation engine combining DP/knapsack optimization, cultural templates, and heuristic scoring to produce diverse, budget- and calorie-constrained combos.",
        "• Built a type-safe, centralized cart system (supports both individual items and combos) with localStorage persistence, quantity controls, remove/clear operations, header badge, and a responsive Cart page.",
        "• Implemented performant, accessible UI components (reusable AddToCartButton, CartItem, CartSummary) with animations, toasts, debounced updates, and minimal re-renders to maintain an interactive experience.",
        "• Delivered production-ready integration and developer documentation, error handling, and extension points for future checkout/payment and analytics integration.",
      ],
      technologies: [
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
        { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ],
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      liveLink: "https://mealmatch-ai.vercel.app/",
    },
    {
      name: "Better LinkedIn — UI Modernization & Architecture",
      shortDescription: "A type-safe, component-driven React application featuring responsive three-column layout with advanced UX patterns and micro-interactions.",
      fullDescription: [
        "• Architected a type-safe, component-driven React application featuring a responsive three-column layout and centralized routing to modernize the professional networking user experience.",
        "• Developed reusable UI primitives and complex micro-interactions using Framer Motion for polished entrance/exit transitions, optimizing for performance and accessibility.",
        "• Implemented advanced UX patterns including optimistic rendering, dynamic search suggestions, and filterable job feeds to match 2025 design standards.",
        "• Engineered custom hooks for infinite scrolling and theme persistence, utilizing strict TypeScript models for scalable state management across the application.",
      ],
      technologies: [
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
        { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Framer Motion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
      ],
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80",
      liveLink: "https://better-linked-in.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute w-24 h-24 border border-sunset-coral/10 rounded-full top-1/4 left-1/4">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-sunset-coral/60 rounded-full animate-orbit"></div>
      </div>
      <div className="absolute w-32 h-32 border border-muted-peach/10 rounded-full bottom-1/3 right-1/4">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-muted-peach/60 rounded-full animate-orbit" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="bg-gradient-to-r from-sunset-coral to-muted-peach bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-warm-light-gray/70 mb-8 max-w-2xl mx-auto">
          Click on any project card to explore detailed information, technologies used, and live demos.
        </p>
        
        <ProjectCarousel
          items={projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              layout={true}
              onCardClose={() => {}}
            />
          ))}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
