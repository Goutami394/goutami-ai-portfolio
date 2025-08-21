import { useEffect, useRef } from 'react';
import { Trophy, Calendar, MapPin, Users, Code2, Award } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: "HackB24 Hackathon",
      role: "Best Team Award Winner",
      period: "2024",
      location: "Bangalore, India",
      description: "Led a team to victory in a competitive hackathon, developing an innovative solution that impressed judges with its technical excellence and real-world applicability.",
      achievements: [
        "Best Team Award among 100+ participating teams",
        "Developed a complete solution within 24 hours",
        "Demonstrated leadership and collaborative skills",
        "Showcased technical innovation and problem-solving"
      ],
      icon: <Trophy className="text-yellow-500" size={24} />,
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  const achievements = [
    {
      title: "120+ LeetCode Problems",
      description: "Consistently solving algorithmic challenges",
      icon: <Code2 className="text-blue-500" size={32} />,
      stat: "120+",
      color: "bg-blue-500/10"
    },
    {
      title: "DSA Contest Participant",
      description: "Active in competitive programming",
      icon: <Users className="text-green-500" size={32} />,
      stat: "Active",
      color: "bg-green-500/10"
    },
    {
      title: "Hackathon Winner",
      description: "HackB24 Best Team Award",
      icon: <Award className="text-purple-500" size={32} />,
      stat: "Winner",
      color: "bg-purple-500/10"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="hero-text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven track record of success in competitive environments
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12 scroll-animate">Professional Experience</h3>
            <div className="relative">
              {experiences.map((exp, index) => (
                <div key={exp.title} className="scroll-animate">
                  <div className="portfolio-card p-8 rounded-2xl mb-8">
                    <div className={`absolute left-0 top-0 w-2 h-full bg-gradient-to-b ${exp.color} rounded-l-2xl`}></div>
                    
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon and Period */}
                      <div className="flex-shrink-0 text-center md:text-left">
                        <div className={`inline-flex p-4 bg-gradient-to-br ${exp.color} rounded-xl mb-4`}>
                          {exp.icon}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center justify-center md:justify-start mb-1">
                            <Calendar size={16} className="mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center justify-center md:justify-start">
                            <MapPin size={16} className="mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h4 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h4>
                        <h5 className="text-lg font-semibold text-primary mb-4">{exp.role}</h5>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                        
                        <div>
                          <h6 className="font-semibold text-foreground mb-3">Key Achievements:</h6>
                          <div className="grid md:grid-cols-2 gap-3">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <div key={achievementIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="scroll-animate">
            <h3 className="text-2xl font-bold text-center mb-12">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="portfolio-card p-8 rounded-2xl text-center group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-16 h-16 ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.stat}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{achievement.title}</h4>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;