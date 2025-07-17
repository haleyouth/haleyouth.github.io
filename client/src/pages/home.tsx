import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import logoImage from "@assets/haleyouth-logo.png";
import { 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Wrench, 
  Briefcase,
  Brain,
  HandHeart,
  Globe,
  Building,
  Users,
  TreePine,
  FlaskConical,
  Computer,
  Amphora,
  BadgeHelp,
  BriefcaseBusiness,
  CreditCard,
  Menu,
  X,
  ChevronDown,
  Flag,
  Eye,
  CheckCircle,
  School,
  Variable,
  Handshake,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  GitCompareIcon
} from "lucide-react";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [partnerOffset, setPartnerOffset] = useState(0);
  const observerRef = useRef<IntersectionObserver>();
  const partnerScrollRef = useRef<HTMLDivElement>(null);

// Hero slider images
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
      title: "Community Transformation",
      subtitle: "Powered by Youth"
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
      title: "Youth Support",
      subtitle: "Powered by Experts"
    },
    {
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
      title: "Sustaining Impact",
      subtitle: "Powered by Public Trust"
    }
  ];


  // Partners data
  const partners = [
    {
      name: "Scholarly Echo",
      logo: "https://github.com/haleyouth/haleyouth.github.io/blob/main/attached_assets/scholarlyecho.png"
  
    },
    {
      name: "Precious Little Lives Initiative",
      logo: "https://github.com/haleyouth/haleyouth.github.io/blob/main/attached_assets/prelli.jpg"
    
    },
    {
      name: "Scholarly Echo",
      logo: "https://github.com/haleyouth/haleyouth.github.io/blob/main/attached_assets/scholarlyecho.png"
    },
    {
      name: "Precious Little Lives Initiative",
      logo: "https://github.com/haleyouth/haleyouth.github.io/blob/main/attached_assets/prelli.jpg"
    },
    {
      name: "Scholarly Echo",
      logo: "https://github.com/haleyouth/haleyouth.github.io/blob/main/attached_assets/scholarlyecho.png"
    }
  ];

  // Auto-cycle hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Auto-scroll partners when more than 3
  useEffect(() => {
    if (partners.length > 3) {
      const interval = setInterval(() => {
        setPartnerOffset((prev) => {
          const itemWidth = 268; // 256px width + 12px margin (mx-2 = 8px + 4px spacing)
          const visibleItems = 3;
          const totalScrollSteps = partners.length - visibleItems + 1;
          const maxOffset = (totalScrollSteps - 1) * itemWidth;
          
          const nextOffset = prev + itemWidth;
          return nextOffset > maxOffset ? 0 : nextOffset;
        });
      }, 3000); // Scroll every 3 seconds

      return () => clearInterval(interval);
    }
  }, [partners.length]);

  // Counter animation hook
  const useCounter = (target: number, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible) return;

      const increment = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, target, duration]);

    return { count, ref };
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'mission', 'programs', 'impact', 'get-involved', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'mission', label: 'Mission' },
    { id: 'programs', label: 'Programs' },
    { id: 'impact', label: 'Impact' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'contact', label: 'Contact' }
  ];

  const programs = [
    { icon: Heart, title: "Special Care for Orphans", description: "Supporting vulnerable children and widows with essential care and development programs." },
    { icon: Stethoscope, title: "Community Healthcare", description: "Delivering accessible healthcare programs to underserved communities." },
    { icon: GraduationCap, title: "Quality Education", description: "Educational programs for gifted and less privileged students." },
    { icon: Wrench, title: "Youth Skill Acquisition", description: "Practical skills training programs for youth development and employability." },
    { icon: Briefcase, title: "Career Advisory", description: "Professional career guidance and mentorship for young professionals." },
    { icon: Brain, title: "Educational Consultation", description: "Strategic educational planning and consultation services." },
    { icon: HandHeart, title: "Humanitarian Projects", description: "Community-focused humanitarian initiatives and emergency response." },
    { icon: Globe, title: "Peace Ambassadors", description: "Training youth leaders as peace ambassadors in their communities." },
    { icon: Building, title: "Society Planning", description: "Progressive planning initiatives for sustainable community development." },
    { icon: TreePine, title: "Environmental Protection", description: "Environmental conservation and community sanitation initiatives." },
    { icon: Computer, title: "STEM Camp (Girls)", description: "Science, Technology, Engineering & Mathematics programs for teenage girls." },
    { icon: Amphora, title: "Cultural Heritage", description: "Preservation and development of cultural heritage and traditions." }
  ];

  const Counter = ({ target, label, icon: Icon }: { target: number; label: string; icon: any }) => {
    const { count, ref } = useCounter(target);
    return (
      <div className="text-center" ref={ref}>
        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="text-white text-3xl w-8 h-8" />
        </div>
        <div className="counter-animation text-4xl md:text-5xl font-bold mb-2 text-white">
          {count}+
        </div>
        <p className="text-blue-100 font-medium">{label}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur material-shadow-2 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Haleyouth Foundation Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="text-lg font-medium text-foreground">Haleyouth Foundation</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-card material-shadow-1 rounded-b-lg mt-2">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Image Slider */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {heroSlides[currentSlide].title}<br />
            <span className="text-accent">{heroSlides[currentSlide].subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Empowering vulnerable communities through youth leadership, education, and skills development.
          </p>
          <Button 
            onClick={() => scrollToSection('get-involved')}
            className="material-button bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-medium material-shadow-2"
          >
            Get Involved
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full slider-indicator ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driven by purpose, guided by vision, committed to transforming communities through youth empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="material-card material-shadow-2 hover:material-shadow-4 p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Flag className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To promote the quality of life of all vulnerable people in our society through active engagement of youths. 
                  We aim to become a worldwide agent of community development through professional mentorship, leadership 
                  and skill acquisition programs for the youths, encouraging the discovery, promotion, interpretation, and 
                  dissemination of strategic and innovative ideas aimed at improving the status quo.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="material-card material-shadow-2 hover:material-shadow-4 p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <Eye className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Youth empowerment for immediate transformation of our society.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="text-secondary mr-3 mt-1 w-5 h-5" />
                    <span className="text-muted-foreground">Create meaningful engagement among young people and communities</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-secondary mr-3 mt-1 w-5 h-5" />
                    <span className="text-muted-foreground">Promote humanitarian culture among youth</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-secondary mr-3 mt-1 w-5 h-5" />
                    <span className="text-muted-foreground">Support international education and career competence</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive initiatives designed to address the most pressing needs in our communities through strategic youth engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index} className="material-card material-shadow-1 hover:material-shadow-4 p-6 text-center">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      index % 3 === 0 ? 'bg-primary' : index % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                    }`}>
                      <IconComponent className="text-white w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{program.title}</h4>
                    <p className="text-muted-foreground text-sm">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to community transformation through youth empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Counter target={200} label="Youth Trained" icon={School} />
            <Counter target={85} label="Orphans Supported" icon={Heart} />
            <Counter target={15} label="Projects Completed" icon={Variable} />
            <Counter target={8} label="Partner Organizations" icon={Handshake} />
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Involved</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in making a difference. There are many ways to contribute to our mission of youth empowerment and community transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Volunteer Card */}
            <Card className="material-card material-shadow-2 hover:material-shadow-4 p-8 text-center">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BadgeHelp className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Volunteer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Share your skills and time to directly impact young lives in your community. Join our volunteer network and make a meaningful difference.
                </p>
                <Button 
                  className="material-button bg-primary hover:bg-primary/90 text-white w-full material-shadow-1"
                  onClick={() => window.open('https://forms.gle/77CT3TDrxgPVkyVm7', '_blank')}
                >
                  Join As Volunteer
                </Button>
              </CardContent>
            </Card>

            {/* Partner Card */}
            <Card className="material-card material-shadow-2 hover:material-shadow-4 p-8 text-center">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BriefcaseBusiness className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Partner</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Collaborate with us as an organizational partner. Together we can amplify our impact and reach more communities in need.
                </p>
                <Button 
                  className="material-button bg-secondary hover:bg-secondary/90 text-white w-full material-shadow-1"
                  onClick={() => window.open('https://forms.gle/sxkyKwezSLi5tMD26', '_blank')}
                >
                  Become a Partner
                </Button>
              </CardContent>
            </Card>

            {/* Donate Card */}
            <Card className="material-card material-shadow-2 hover:material-shadow-4 p-8 text-center relative">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Donate</h3>
                {/* <p className="text-muted-foreground mb-6 leading-relaxed">
                  Your financial support helps us expand our programs and reach more young people in need of empowerment and development opportunities.
                </p> */}
                <div className="text-muted-foreground mb-6 leading-relaxed">
                  <div>Bank: Guaranty Trust Bank</div>
                  <div>Account: 0617009307</div>
                  <div>Name: Haleyouth Foundation</div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="material-button bg-accent hover:bg-accent/90 text-white w-full material-shadow-1">
                      Make a Donation
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-xs">
                      <div>Bank: Guaranty Trust Bank</div>
                      <div>Account: 0617009307</div>
                      <div>Name: Haleyouth Foundation</div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Working together with amazing organizations to create lasting impact in our communities.
            </p>
          </div>

          <div className="relative overflow-hidden max-w-4xl mx-auto">
            <div 
              ref={partnerScrollRef}
              className="flex partner-scroll"
              style={{ 
                transform: `translateX(-${partnerOffset}px)`,
                transition: 'transform 0.8s ease-in-out'
              }}
            >
              {partners.concat(partners.length > 3 ? partners : []).map((partner, index) => (
                <div
                  key={`partner-${index}`}
                  className="flex-shrink-0 w-64 mx-2 flex items-center justify-center"
                >
                  <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl partner-logo w-full h-24 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-105"
                      title={partner.name}
                       onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect width='200' height='100' fill='%23f8f9fa' stroke='%23dee2e6' stroke-width='2'/%3E%3Ctext x='100' y='50' font-family='Arial' font-size='12' fill='%236c757d' text-anchor='middle' dominant-baseline='middle'%3E${partner.name}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicators if more than 3 partners */}
            {partners.length > 3 && (
              <div className="flex justify-center mt-6">
                {Array.from({ length: partners.length - 2 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                      Math.floor(partnerOffset / 268) === index ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Career Blog Section */}
      <section id="career-blog" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Career Development Hub</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access the latest opportunities in scholarships, fellowships, internships, and career development resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="material-card material-shadow-1 hover:material-shadow-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Young professionals in career development workshop"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">SCHOLARSHIPS</span>
                  <span className="text-muted-foreground text-sm ml-auto">Dec 15, 2024</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Youth Career & Scholarship Mentorship</h3>
                <p className="text-muted-foreground text-sm mb-4">Leveraging the experience of high profile scholars, HLF provides mentorship to increase the potential for African youth pursuing higher education globally...</p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">Read More →</a>
              </CardContent>
            </Card>

            <Card className="material-card material-shadow-1 hover:material-shadow-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Tech interns collaborating on laptops"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">SKILL AQUISITION</span>
                  <span className="text-muted-foreground text-sm ml-auto">Jan 12, 2022</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Community Skill and Empowerment programs</h3>
                <p className="text-muted-foreground text-sm mb-4">Haleyouth Foundation combines local credibility and technical expertise to train youths, women in local community on critical skills...</p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">Read More →</a>
              </CardContent>
            </Card>

            <Card className="material-card material-shadow-1 hover:material-shadow-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Professional networking event with young professionals"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">COMMUNITY PROJECTS</span>
                  <span className="text-muted-foreground text-sm ml-auto">Dec 10, 2022</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Sustainable Menstrual Pads for Girls</h3>
                <p className="text-muted-foreground text-sm mb-4">"Pad a Girl" project is a cost-effective, commmunity rooted intervention that directly seek to address menstrual health gaps...</p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">Read More →</a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="material-button bg-primary hover:bg-primary/90 text-white px-8 py-3 material-shadow-1">
              View All Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Foundation Info */}
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={logoImage} 
                  alt="Haleyouth Foundation Logo" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold">Haleyouth Foundation</h3>
                  <p className="text-gray-400 text-sm">Empowering Communities Through Youth</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Dedicated to transforming vulnerable communities through youth leadership, education, and skills development. 
                Join us in building a better tomorrow for all.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/haleyouthfoundation/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://x.com/HaleYouth_F" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/company/haleyouth-foundation" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/haleyouthfoundation/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-primary mr-3 mt-1 w-4 h-4" />
                  <div>
                    <p className="text-gray-400 text-sm">Ateba Agassa-Okene</p>
                    <p className="text-gray-400 text-sm">Kogi State, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-3 w-4 h-4" />
                  <p className="text-gray-400 text-sm">+234 813 660 5722</p>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary mr-3 w-4 h-4" />
                  <p className="text-gray-400 text-sm">haleyouthfoundation@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('mission')} className="block text-gray-400 hover:text-white transition-colors text-sm">Our Mission</button>
                <button onClick={() => scrollToSection('programs')} className="block text-gray-400 hover:text-white transition-colors text-sm">Programs</button>
                <button onClick={() => scrollToSection('get-involved')} className="block text-gray-400 hover:text-white transition-colors text-sm">Get Involved</button>
                <button onClick={() => scrollToSection('career-blog')} className="block text-gray-400 hover:text-white transition-colors text-sm">Career Hub</button>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Haleyouth Foundation. All rights reserved. | 
              Designed with care for community impact
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
