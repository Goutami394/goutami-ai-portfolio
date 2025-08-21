import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/Goutami394",
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/goutami-deshpande-a18b33307/",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "#contact",
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold hero-text-gradient">
                Goutami Deshpande
              </h3>
              <p className="text-muted-foreground max-w-sm">
                Aspiring Software Engineer passionate about AI/ML and building innovative solutions 
                that make a difference in the world.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith('http') ? "_blank" : undefined}
                    rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center 
                             hover:bg-primary hover:text-white transition-all duration-300 
                             hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Get in Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📍 Bangalore, India</p>
                <p>📧 Available via contact form</p>
                <p>⚡ Response within 24 hours</p>
                <p className="text-sm mt-4">
                  Open to internship and entry-level opportunities in 
                  software development and AI/ML.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Goutami Chidambar Deshpande. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;