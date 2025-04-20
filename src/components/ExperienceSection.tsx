
import { CalendarIcon } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="md:text-right md:pr-8">
                <h3 className="text-xl font-bold font-heading">Software Development Intern</h3>
                <p className="text-primary font-medium">AccioJob Pvt Ltd</p>
                <div className="flex items-center mt-2 md:justify-end">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm text-muted-foreground">Oct 2024 - Mar 2025</span>
                </div>
              </div>
              
              <div className="md:pl-8">
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <ul className="list-disc ml-4 space-y-2">
                    <li>Developed responsive and interactive user interfaces using React.js, Bootstrap, HTML, CSS, and JavaScript.</li>
                    <li>Worked on component-based architecture in React.js, leveraging props, hooks, and state management to improve code reusability and maintainability.</li>
                    <li>Gained hands-on experience with the MERN stack (MongoDB, Express.js, React.js, Node.js) to understand full-stack development processes.</li>
                    <li>Worked with Git and GitHub for version control and team collaboration.</li>
                  </ul>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
