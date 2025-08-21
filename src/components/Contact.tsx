import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Use FormData instead of JSON to avoid spam detection
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'b6ba26a2-0e6e-41b5-a86d-9939001647b0');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('from_name', 'Goutami Portfolio Contact');
      formDataToSend.append('subject', `Portfolio Contact from ${formData.name}`);
      formDataToSend.append('botcheck', ''); // Honeypot field for spam protection

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact me directly at goutamideshpande394@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" size={24} />,
      title: "Email",
      detail: "goutamideshpande394@gmail.com",
      link: "mailto:goutamideshpande394@gmail.com"
    },
    {
      icon: <MapPin className="text-green-500" size={24} />,
      title: "Location",
      detail: "Bangalore, India",
      link: null
    },
    {
      icon: <MessageSquare className="text-purple-500" size={24} />,
      title: "Response Time",
      detail: "Within 24 hours",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/Goutami394",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/goutami-deshpande-a18b33307/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="hero-text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss new opportunities, collaborations, or just have a chat about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="scroll-animate">
              <div className="portfolio-card p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={info.title} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.detail}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.detail}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Connect on Social Media</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-muted rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">Open to Opportunities</h4>
                  <p className="text-muted-foreground text-sm">
                    I'm actively seeking internship and entry-level positions in software development, 
                    AI/ML, and data science. Let's discuss how I can contribute to your team!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="scroll-animate">
              <div className="portfolio-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-8">Send me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. Your information will be kept confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;