import { useEffect, useRef } from 'react';
import { Code, Brain, Rocket } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="hero-text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions through technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="text-center lg:text-left scroll-animate">
              <div className="relative inline-block group">
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden portfolio-card animate-pulse-glow transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  <div className="relative w-full h-full overflow-visible">
                    <img 
                      src="/lovable-uploads/d2294271-a0f3-4e67-9f1b-8a3415c8a862.png" 
                      alt="Goutami Chidambar Deshpande"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:z-10 relative z-5"
                    />
                    <div className="absolute inset-0 hero-gradient opacity-20 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-float"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 scroll-animate">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  I'm a passionate AIML student with a deep fascination for artificial intelligence, 
                  machine learning, and software engineering. My journey in technology began with a 
                  curiosity about how intelligent systems work, which has evolved into a comprehensive 
                  skill set spanning multiple programming languages and frameworks.
                </p>
                <p className="text-foreground leading-relaxed">
                  With a strong foundation in full-stack development and machine learning, I enjoy 
                  building solutions that bridge the gap between complex algorithms and user-friendly 
                  interfaces. My experience ranges from developing predictive models to creating 
                  robust web applications.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 portfolio-card rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Code className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Full-Stack Developer</h3>
                  <p className="text-sm text-muted-foreground">
                    Expertise in React, Python, and modern web technologies
                  </p>
                </div>

                <div className="text-center p-6 portfolio-card rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Brain className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">AI/ML Enthusiast</h3>
                  <p className="text-sm text-muted-foreground">
                    Building intelligent systems and predictive models
                  </p>
                </div>

                <div className="text-center p-6 portfolio-card rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Rocket className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Problem Solver</h3>
                  <p className="text-sm text-muted-foreground">
                    120+ LeetCode problems solved with analytical thinking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;