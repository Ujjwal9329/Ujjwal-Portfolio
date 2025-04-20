
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex items-center">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
              Ujjwal <span className="text-primary">Gujral</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
              Software Development | Front-End Developer
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+918839604355" className="hover:text-primary transition-colors">
                  +91-8839604355
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:ujjwalgujral8@gmail.com" className="hover:text-primary transition-colors">
                  ujjwalgujral8@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="/Ujjwal_Gujral_Resume.pdf" download="Ujjwal_Gujral_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/ujjwal-gujral-20134a216"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/Ujjwal9329"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
              <img
                src="/lovable-uploads/3edcaa50-7fae-40be-90fa-68e9de1fc26b.png"
                alt="Ujjwal Gujral"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
