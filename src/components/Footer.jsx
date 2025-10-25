export const Footer = () => {
  const links = [
    { name: "GitHub", url: "#", icon: "🐙" },
    { name: "LinkedIn", url: "#", icon: "💼" },
    { name: "Email", url: "mailto:your@email.com", icon: "📧" }
  ];

  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2 text-glow">Your Name</h3>
          <p className="text-foreground/70">Full Stack Developer</p>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          {links.map(link => (
            <a
              key={link.name}
              href={link.url}
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <p className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};