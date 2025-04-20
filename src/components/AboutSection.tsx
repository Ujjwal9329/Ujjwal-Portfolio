
export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg mb-4">
              Passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and modern web frameworks like React.js. 
              Experienced in building responsive, scalable, and high-performance web applications with a focus on user experience (UX) and accessibility.
            </p>
            <p className="mb-4">
              Skilled in state management (React Hooks, Context API), API integration, and component-based architecture to create 
              modular and reusable UI components. Proficient in Git, GitHub, and version control workflows, ensuring efficient team 
              collaboration and streamlined code management.
            </p>
            <p>
              Adept at responsive design and cross-browser compatibility, ensuring seamless experiences across mobile, tablet, and desktop devices. 
              Passionate about clean, maintainable, and scalable code, with a strong emphasis on UI/UX principles and interactive design. 
              Always eager to learn new technologies and frameworks to enhance development workflows and build innovative solutions.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 font-heading">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">M.C.A.</h4>
                  <p className="text-muted-foreground">Parul University, India</p>
                  <div className="flex justify-between text-sm mt-1">
                    <span>2023 - 2025</span>
                    <span className="font-medium">CGPA: 8.59/10</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-card rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 font-heading">Languages</h3>
              <ul className="space-y-1">
                <li>English (Fluent)</li>
                <li>Hindi (Fluent)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
