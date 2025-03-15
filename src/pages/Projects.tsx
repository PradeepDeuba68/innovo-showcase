
import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ProjectCard, { Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    id: "ai-platform",
    title: "AI Research Platform",
    description: "A collaborative platform for AI researchers to share models, datasets, and findings with an intuitive interface.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TensorFlow", "API"],
    demoUrl: "/projects/ai-platform",
    githubUrl: "https://github.com",
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    description: "Real-time financial analytics dashboard with predictive modeling and customizable visualization tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "D3.js", "Node.js"],
    demoUrl: "/projects/fintech-dashboard",
    githubUrl: "https://github.com",
  },
  {
    id: "iot-platform",
    title: "IoT Management Platform",
    description: "Secure platform for managing IoT devices across industrial settings with real-time monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1563770660941-3bdc58a5a55c?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "MQTT", "GraphQL"],
    demoUrl: "/projects/iot-platform",
    githubUrl: "https://github.com",
  },
  {
    id: "health-app",
    title: "Health Monitoring App",
    description: "Mobile application for tracking health metrics with personalized insights and healthcare provider integration.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "HealthKit", "Firebase"],
    demoUrl: "/projects/health-app",
    githubUrl: "https://github.com",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Scalable e-commerce solution with advanced inventory management and powerful analytics capabilities.",
    image: "https://images.unsplash.com/photo-1629397586330-ced1d0e4f8bf?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    demoUrl: "/projects/ecommerce-platform",
    githubUrl: "https://github.com",
  },
  {
    id: "education-portal",
    title: "Education Portal",
    description: "Interactive learning platform with progress tracking, assessments, and collaborative learning spaces.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    tags: ["Vue.js", "Express", "MongoDB"],
    demoUrl: "/projects/education-portal",
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <PageTransition>
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Explore our portfolio of innovative solutions across various domains and technologies.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              }`}
            >
              All Projects
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found with the selected filter.</p>
            </div>
          )}
        </div>
      </main>
    </PageTransition>
  );
};

export default Projects;
