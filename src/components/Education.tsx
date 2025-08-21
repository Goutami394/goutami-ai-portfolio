import { useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
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

  const educationData = [
    {
      degree: "B.E. in Artificial Intelligence and Machine Learning",
      institution: "Engineering College",
      period: "2022 - 2026",
      score: "CGPA: 8.94/10",
      description: "Comprehensive study of AI/ML algorithms, deep learning, computer vision, and data science with hands-on projects.",
      icon: <GraduationCap className="text-blue-500" size={32} />,
      color: "from-blue-500/20 to-indigo-500/20",
      status: "current"
    },
    {
      degree: "Pre-University College (12th Grade)",
      institution: "Pre-University College", 
      period: "2020 - 2022",
      score: "82%",
      description: "Focused on Science stream with Mathematics, Physics, Chemistry, and Computer Science as core subjects.",
      icon: <BookOpen className="text-green-500" size={32} />,
      color: "from-green-500/20 to-teal-500/20",
      status: "completed"
    },
    {
      degree: "Secondary School Leaving Certificate (10th Grade)",
      institution: "High School",
      period: "2018 - 2020", 
      score: "87%",
      description: "Strong foundation in core subjects with particular excellence in Mathematics and Science.",
      icon: <Award className="text-purple-500" size={32} />,
      color: "from-purple-500/20 to-pink-500/20",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Educational <span className="hero-text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building a strong foundation in technology and innovation
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-px"></div>

            {educationData.map((edu, index) => (
              <div 
                key={edu.degree}
                className={`scroll-animate mb-12 flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Marker */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-background shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`portfolio-card rounded-2xl p-8 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-5/12 relative`}>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 ${
                    index % 2 === 0 ? 'md:left-4' : 'right-4 md:right-4'
                  }`}>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status === 'current' 
                        ? 'bg-green-500/20 text-green-700 dark:text-green-300' 
                        : 'bg-blue-500/20 text-blue-700 dark:text-blue-300'
                    }`}>
                      {edu.status === 'current' ? 'Current' : 'Completed'}
                    </span>
                  </div>

                  {/* Icon and Header */}
                  <div className={`flex items-center gap-4 mb-6 ${
                    index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''
                  }`}>
                    <div className={`p-4 bg-gradient-to-br ${edu.color} rounded-xl`}>
                      {edu.icon}
                    </div>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <div className="text-sm text-muted-foreground font-medium mb-1">
                        {edu.period}
                      </div>
                      <div className="text-lg font-bold text-primary">
                        {edu.score}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-muted-foreground font-semibold mb-4">
                      {edu.institution}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Highlights */}
          <div className="mt-20 scroll-animate">
            <h3 className="text-2xl font-bold text-center mb-12">Academic Highlights</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="portfolio-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">8.94</div>
                <div className="text-lg font-semibold mb-2">Current CGPA</div>
                <p className="text-muted-foreground text-sm">
                  Consistent academic excellence in AIML program
                </p>
              </div>
              
              <div className="portfolio-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">87%</div>
                <div className="text-lg font-semibold mb-2">SSLC Score</div>
                <p className="text-muted-foreground text-sm">
                  Strong foundation in core subjects
                </p>
              </div>
              
              <div className="portfolio-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">82%</div>
                <div className="text-lg font-semibold mb-2">PUC Score</div>
                <p className="text-muted-foreground text-sm">
                  Excellence in Science stream
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;