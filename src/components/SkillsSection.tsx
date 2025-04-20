
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillsCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML5", "CSS", "JavaScript", "ReactJS", "Bootstrap", "Tailwind CSS"],
    },
    {
      category: "Backend & Databases",
      skills: ["Node.js", "MongoDB", "MySQL"],
    },
    {
      category: "State Management",
      skills: ["React Hooks", "useState", "useEffect"],
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      category: "Web Technologies",
      skills: ["REST APIs", "HTTP/HTTPS", "Responsive Design"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skillsCategories.map((category, index) => (
            <div 
              key={category.category}
              className="bg-card p-6 rounded-lg shadow-md animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <h3 className="text-xl font-bold mb-4 font-heading">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
