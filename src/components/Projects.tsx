import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Database, Brain, Smartphone, BarChart3, BookOpen, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Vehicle Registration System",
      description: "A comprehensive full-stack application for managing vehicle registrations with user authentication, database management, and responsive design.",
      icon: <Database className="text-blue-500" size={32} />,
      techStack: ["React JS", "Node.js", "MySQL", "Bootstrap"],
      category: "Full-Stack Development",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Diabetes Risk Prediction",
      description: "Machine learning model to predict diabetes risk using patient data with high accuracy and intuitive user interface.",
      icon: <Brain className="text-purple-500" size={32} />,
      techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      category: "Machine Learning",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Real-Time Emotion Detection",
      description: "Computer vision application that detects and analyzes human emotions in real-time using deep learning algorithms.",
      icon: <Activity className="text-green-500" size={32} />,
      techStack: ["Python", "OpenCV", "TensorFlow", "Keras"],
      category: "AI/Computer Vision",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Library Management System",
      description: "Digital library management system built with Streamlit for efficient book tracking, member management, and inventory control.",
      icon: <BookOpen className="text-orange-500" size={32} />,
      techStack: ["Python", "Streamlit", "SQLite", "Pandas"],
      category: "Web Application",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Habit Tracker App",
      description: "Mobile application for tracking daily habits and goals with progress visualization and reminder notifications.",
      icon: <Smartphone className="text-indigo-500" size={32} />,
      techStack: ["Android Studio", "Java", "SQLite", "Material Design"],
      category: "Mobile Development",
      color: "from-indigo-500/20 to-violet-500/20"
    },
    {
      title: "Customer Churn Prediction",
      description: "Full-stack solution for predicting customer churn using machine learning with interactive dashboard for business insights.",
      icon: <BarChart3 className="text-teal-500" size={32} />,
      techStack: ["Python", "Flask", "React", "Plotly", "Scikit-learn"],
      category: "Data Science",
      color: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="hero-text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions across AI/ML, web development, and mobile applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="scroll-animate portfolio-card rounded-2xl overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className={`p-6 bg-gradient-to-br ${project.color} relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      {project.icon}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-white/20 rounded-full text-foreground/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                </div>

                {/* Project Content */}
                <div className="p-6 bg-card">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 btn-primary text-sm"
                      disabled
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      disabled
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 scroll-animate">
            <div className="portfolio-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to discuss new projects and opportunities. 
                Let's connect and explore how we can work together!
              </p>
              <a href="#contact">
                <Button size="lg" className="btn-primary">
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;