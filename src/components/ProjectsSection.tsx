
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Donor Unite",
    description: "An online platform to connect blood donors and recipients with integrated Twilio & email notifications.",
    image: "/lovable-uploads/0a7cf96c-d237-4798-b235-af54e83e23e7.png",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
    demoUrl: "#",
    repoUrl: "#",
    period: "Mar 2024 - Apr 2024",
    features: [
      "Built a platform to streamline the blood donation process by connecting donors with recipients",
      "Engineered the backend using PHP & MySQL for real-time data management and efficient matching algorithms",
      "Integrated SMS notifications using Twilio and email alerts to keep users informed of urgent requests",
      "Optimized user experience with dynamic AJAX updates and fine-tuned database queries to enhance system performance"
    ]
  },
  {
    title: "YouTube Clone",
    description: "A fully responsive YouTube-like platform with video listings, search bar, recommendations, and sidebar navigation.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    repoUrl: "#",
    period: "Feb 2025 - Mar 2025",
    features: [
      "Developed a responsive and feature-rich YouTube Clone using React.js, Tailwind CSS, and modern UI design principles",
      "Implemented core functionalities including video listings, search bar, sidebar navigation, and dynamic recommendations",
      "Enhanced the project aesthetics and user interface with Tailwind CSS and React Icons for seamless and visually appealing navigation",
      "Focused on responsive design, ensuring consistent performance across desktops, tablets, and mobile devices"
    ]
  },
  {
    title: "BlinkIt Clone",
    description: "A BlinkIt clone with product listings & cart functionality built with React Hooks & Bootstrap CSS.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React.js", "Bootstrap", "HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    repoUrl: "#",
    period: "Jan 2025 - Feb 2025",
    features: [
      "Developed the complete frontend for a BlinkIt clone, featuring dynamic product listings and cart functionalities using React.js and Bootstrap CSS",
      "Designed and implemented responsive UI components to enhance user experience and ensure cross-device compatibility",
      "Applied advanced React hooks (e.g., useState, useEffect) and component-based architecture to manage state efficiently and improve code reliability",
      "Focused on optimizing frontend performance by reducing unnecessary re-renders and minimizing page load time"
    ]
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="mt-10 space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in`}
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="project-card overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold font-heading">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">{project.period}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                
                <p className="mb-4">{project.description}</p>
                
                <ul className="list-disc ml-5 mb-6 text-sm space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub Repo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
