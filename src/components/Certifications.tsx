import { useEffect, useRef } from 'react';
import { ExternalLink, Award, Code, Database, BarChart3, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
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

  const certifications = [
    {
      title: "Python Programming",
      issuer: "Certification Authority",
      description: "Comprehensive certification covering Python fundamentals, data structures, and advanced programming concepts.",
      icon: <Code className="text-blue-500" size={32} />,
      color: "from-blue-500/20 to-cyan-500/20",
      link: "https://drive.google.com/file/d/1o6FVcIOcOMwVKmmvHZromeRCfGRfVomJ/view?usp=sharing",
      category: "Programming"
    },
    {
      title: "Java Full Stack Development",
      issuer: "Development Institute",
      description: "Complete full-stack development certification covering Java backend and modern frontend technologies.",
      icon: <Database className="text-orange-500" size={32} />,
      color: "from-orange-500/20 to-red-500/20",
      link: "https://drive.google.com/file/d/1YeHOkaE5KxmSNOVmyQogUQ6NxygE-KyV/view?usp=sharing",
      category: "Full-Stack"
    },
    {
      title: "HTML & CSS",
      issuer: "Web Development Academy",
      description: "Foundation certification in web development technologies including HTML5 and CSS3 best practices.",
      icon: <Code className="text-green-500" size={32} />,
      color: "from-green-500/20 to-emerald-500/20",
      link: "https://drive.google.com/file/d/1Yg6rz3Zoc3mbtajG-WqS8YCS4vD3byNu/view?usp=sharing",
      category: "Web Development"
    },
    {
      title: "Power BI",
      issuer: "Business Intelligence Institute",
      description: "Data visualization and business intelligence certification covering advanced Power BI features and analytics.",
      icon: <BarChart3 className="text-purple-500" size={32} />,
      color: "from-purple-500/20 to-pink-500/20",
      link: "https://drive.google.com/file/d/1YlM1mTTPc5hVI7Yepr39tokoJ-PNn8Nv/view?usp=sharing",
      category: "Data Analytics"
    },
    {
      title: "HackB24 Certificate",
      issuer: "HackB24 Organizers",
      description: "Official certificate recognizing the Best Team Award achievement in the prestigious HackB24 Hackathon.",
      icon: <Trophy className="text-yellow-500" size={32} />,
      color: "from-yellow-500/20 to-orange-500/20",
      link: "https://drive.google.com/file/d/1YecvtJ23MbHEv0_OzLooPQAKvowPuG9p/view?usp=sharing",
      category: "Achievement"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="hero-text-gradient">Certifications</span> & Awards
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="scroll-animate portfolio-card rounded-2xl overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Certificate Header */}
                <div className={`p-6 bg-gradient-to-br ${cert.color} relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      {cert.icon}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-white/20 rounded-full text-foreground/80 backdrop-blur-sm">
                      {cert.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Award className="text-white/20" size={48} />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* View Certificate Button */}
                  <Button
                    className="w-full btn-primary group-hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Certificate
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Certification Stats */}
          <div className="mt-16 scroll-animate">
            <div className="portfolio-card p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-6">Certification Journey</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-lg font-semibold">Certifications</div>
                  <p className="text-muted-foreground text-sm">
                    Across multiple domains
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4</div>
                  <div className="text-lg font-semibold">Technologies</div>
                  <p className="text-muted-foreground text-sm">
                    Programming & Analytics
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1</div>
                  <div className="text-lg font-semibold">Major Award</div>
                  <p className="text-muted-foreground text-sm">
                    HackB24 Best Team
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

export default Certifications;