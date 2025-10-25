export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce with React & Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Manager",
      description: "Collaborative task management app",
      tech: ["React", "Firebase", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather dashboard",
      tech: ["JavaScript", "API", "CSS3"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-glow">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-card p-6 rounded-lg card-hover">
              <div className="h-32 bg-primary/10 rounded mb-4 flex items-center justify-center text-4xl">
                🚀
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <a href={project.github} className="flex-1 text-center py-2 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors">
                  GitHub
                </a>
                <a href={project.demo} className="flex-1 text-center py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};