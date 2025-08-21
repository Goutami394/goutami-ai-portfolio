import { useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Brain,
  Users,
  MessageSquare,
  Target,
  Lightbulb
} from 'lucide-react';

const Skills = () => {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="skill-icon" size={32} />,
      skills: ["Python", "C", "Java", "HTML", "CSS", "MySQL", "DSA"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Frameworks & Libraries", 
      icon: <Globe className="skill-icon" size={32} />,
      skills: ["React JS", "Bootstrap", "Streamlit", "Flask"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Tools & Platforms",
      icon: <Database className="skill-icon" size={32} />,
      skills: ["Power BI", "Git", "MySQL Workbench", "Android Studio", "Azure DevOps"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Soft Skills",
      icon: <Users className="skill-icon" size={32} />,
      skills: ["Teamwork", "Communication", "Leadership", "Critical Thinking"],
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="hero-text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="scroll-animate portfolio-card p-8 rounded-2xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl mr-4 ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-muted/50 text-foreground rounded-full text-sm font-medium 
                                 hover:bg-primary/10 hover:text-primary transition-all duration-300 
                                 hover:scale-105 cursor-default"
                      style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Highlight */}
          <div className="mt-16 text-center scroll-animate">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 portfolio-card rounded-xl">
                <Brain className="mx-auto mb-4 text-primary" size={48} />
                <h4 className="text-xl font-bold mb-2">AI/ML Focus</h4>
                <p className="text-muted-foreground">
                  Specialized in machine learning algorithms and neural networks
                </p>
              </div>
              
              <div className="p-6 portfolio-card rounded-xl">
                <Lightbulb className="mx-auto mb-4 text-primary" size={48} />
                <h4 className="text-xl font-bold mb-2">Problem Solving</h4>
                <p className="text-muted-foreground">
                  120+ LeetCode problems solved with analytical approach
                </p>
              </div>
              
              <div className="p-6 portfolio-card rounded-xl">
                <Target className="mx-auto mb-4 text-primary" size={48} />
                <h4 className="text-xl font-bold mb-2">Project Delivery</h4>
                <p className="text-muted-foreground">
                  Proven track record in delivering end-to-end solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;