import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Code2,
  Database,
  Layout,
  Globe,
  Server,
  Shield,
  PenTool,
  LucideIcon,
} from "lucide-react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import TimelineItem from "./components/TimelineItem";
import ResumeButton from "./components/ResumeButton";
import SkillCard from "./components/SkillCard";
import beyondMyTribeImage from "./assets/BMT.png";
import realEstateImage from "./assets/realestate.png";
import haritHotelImage from "./assets/HaritHotel.png";
import logo from "./assets/logo.png";
import TestimonialCard from "./components/TestimonialCard";
import AnimatedText from "./components/AnimatedText";
import humanImage from "./assets/human.png";
import ContactForm from "./components/ContactForm";
import profilePicture from "./assets/itotias-pic.jpeg";

type Role = "fullstack" | "writer";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl: string;
  role: Role;
}

interface Experience {
  timeRange: string;
  title: string;
  company: string;
  description: string;
  role: Role;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  role: Role;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  forRole: Role;
}

function App() {
  const [selectedRole, setSelectedRole] = useState<Role>("fullstack");

  const titles = [
    {
      text: "Full Stack Developer",
      description:
        "Building beautiful, functional, and scalable web applications with modern technologies",
      role: "fullstack",
    },
    {
      text: "Technical Writer",
      description:
        "Crafting clear, concise, and comprehensive documentation for developers and users",
      role: "writer",
    },
  ];

  const projects: Project[] = [
    {
      title: "Beyond My Tribe",
      description: "A website for Beyond My Tribe organization",
      image: beyondMyTribeImage,
      technologies: ["Javascript", "jQuery", "Bootstrap5", "Strapi CMS"],
      githubUrl: "https://www.beyondmytribe.org/",
      liveUrl: "https://www.beyondmytribe.org/",
      role: "fullstack",
    },
    {
      title: "Real Estate",
      description:
        "A real estate website enabling property owners to list their properties for sale or tenants to rent.",
      image: realEstateImage,
      technologies: ["React", "TailwindCSS", "firebase"],
      githubUrl: "https://github.com/ItotiaHarrison/Real-Estate-app",
      liveUrl: "https://real-estate-gamma-ten.vercel.app/",
      role: "fullstack",
    },
    {
      title: "Harit Hotel",
      description:
        "A hotel/Airbnb management web application with real-time updates on available rooms and bookings",
      image: haritHotelImage,
      technologies: [
        "Nextjs",
        "Typescript",
        "Tailwind CSS",
        "Sanity CMS",
        "Google Authenticator",
      ],
      githubUrl: "https://github.com/ItotiaHarrison/Harit-Hotel",
      liveUrl: "https://harit-hotel.vercel.app/",
      role: "fullstack",
    },
    {
      title: "Descriptive Statistics basics",
      description: "A topic about descriptive statistics basics.",
      image:
        "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      technologies: ["Maths", "Statistics"],
      liveUrl: "https://hyperskill.org/learn/step/42427",
      role: "writer",
    },
    {
      title: "Introduction to OPEN API(Chat completions)",
      description: "Clear and comprehensive topic about chat completions",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      technologies: ["Technical Writing", "REST APIs", "OpenAPI", "Markdown"],
      liveUrl: "https://hyperskill.org/learn/step/43699",
      role: "writer",
    },
  ];

  const experiences: Experience[] = [
    {
      timeRange: "September 2024 - Present",
      title: "Project tester",
      company: "Hyperskill",
      description:
        "Collaborate with project authors to create and test projects for the following topics; Statistics, Nodejs, Frontend topics (HTML, CSS, Javascript, Reactjs), Coding with AI topics(OpenAI API).",
      role: "writer",
    },
    {
      timeRange: "December 2023 - Present",
      title: "Topic Author",
      company: "Hyperskill",
      description:
        "Create accurate and engaging technical content for the following topics; Statistics, Nodejs, Frontend topics (HTML, CSS, Javascript, Reactjs), Coding with AI topics(OpenAI API). Utilize content management systems (CMS) to upload and manage technical content. Review and correct content written by other topic authors to ensure it maintains the hyperskill style hence reaching and helping more learners on the platform.",
      role: "writer",
    },
    {
      timeRange: "February 2025 - Present",
      title: "Software Developer",
      company: "E&M TECHNOLOGY HOUSE",
      description:
        "Built a secure internet banking platform with multi-factor authentication, automatic session management, and role-based access for retail and corporate customers.Developed a money transfer system supporting local and international payments (RTGS, SWIFT, EFT, PesaLink) with real-time currency exchange. Designed benefi ciary management with customer verification, payment method routing, and support for one-time and saved recipients. Created bulk payment processing with Excel validation, batch transaction handling, and security verification. Supported forex rate with standard and negotiated exchange rates with automatic currency conversion across multiple currencies.Integrated mobile money (M-Pesa), government payments (iTax, eCitizen), and utility services with transaction tracking and error handling.Optimized transaction processing through API call optimization.",
      role: "fullstack",
    },
    {
      timeRange: "January 2025 - Present",
      title: "Founder - Software Developer",
      company: "Harit Solution",
      description:
        "Develop custom websites and applications for clients, including an e-commerce platform with mobile payment integration and a conference website. Collaborate with clients to define project requirements, ensuring user-centric designs and functionalities. Optimize websites for SEO, improving search engine rankings and user engagement.",
      role: "fullstack",
    },
    {
      timeRange: "January 2024 - Present",
      title: "Full Stack Developer",
      company: "MemorySoft International Limited",
      description:
        "Lead the development of a web-based Human Resource management system with the following modules; payroll, time and attendance, leave, performance and appraisal. Develop a responsive user interface using ReactJS, redux and TypeScript. Build back-end infrastructure with C# and .NET framework. Design, create and integrate MySQL database for secure data management on the web application.",
      role: "fullstack",
    },
    {
      timeRange: "April 2023 - December 2023",
      title: "Full Stack Developer",
      company: "Beyond My Tribe",
      description:
        "Integrated a payment system that improved member registration and collecting donations. Created user-friendly forms, enhancing the user interations on the website.Implemented Google Analytics 4 for digital strategy optimization. Built a content management system using Strapi. Integrated social media platforms to attract interactions on the organisation post about their activities.",
      role: "fullstack",
    },
    {
      timeRange: "August 2022 - April 2023",
      title: "Software Developer Intern",
      company: "iTalanta",
      description:
        "Integrated OAuth for user authentication in the Elewa project. Developed various web pages for a learning management system using Angular.js. Participated in code reviews and discussions on new feature implementations.",
      role: "fullstack",
    },
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        "JavaScript",
        "React",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Bootstrap5",
        "Redux",
        "HTML5",
        "CSS3",
      ],
      role: "fullstack",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        "C#",
        ".NET",
        "Python",
        "Django",
        "Ruby",
        "Ruby on Rails",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "firebase",
        "Strapi CMS",
        "Sanity CMS",
      ],
      role: "fullstack",
    },
    {
      title: "DevOps & Tools",
      icon: Shield,
      skills: [
        "Git",
        "CI/CD",
        "Github",
        "Windows",
        "Linux",
        "Cypress",
        "Jest",
        "Google Analytics",
      ],
      role: "fullstack",
    },
    {
      title: "Technical Writing",
      icon: PenTool,
      skills: [
        "API Documentation",
        "User Guides",
        "Technical Blogs",
        "Tutorials",
        "Knowledge Base Articles",
        "Style Guides",
        "Markdown",
        "Content Strategy",
      ],
      role: "writer",
    },
    {
      title: "Content Management",
      icon: Layout,
      skills: [
        "Content Planning",
        "Editorial Workflows",
        "SEO Optimization",
        "Content Auditing",
        "Information Architecture",
        "Content Management Systems",
      ],
      role: "writer",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Lawrence Adam",
      role: "Executive Director at Beyond My Tribe",
      image: humanImage,
      content:
        "Harrison's technical expertise and attention to detail transformed our project. He consistently delivered beyond expectations in the building of our website.",
      forRole: "fullstack",
    },
    {
      name: "Peter Mbui",
      role: "Software Developer at Alis",
      image: humanImage,
      content:
        "He is one of the most talented developers I've worked with. His ability to solve complex problems while maintaining clean code is remarkable.",
      forRole: "fullstack",
    },
    {
      name: "Pamela Ombima",
      role: "Assistant Director Youth Development Officer",
      image: humanImage,
      content:
        "An exceptional developer who brings both technical excellence and creative solutions to every project he touch.",
      forRole: "fullstack",
    },
    {
      name: "Alexandra Sheider",
      role: "Project Manager at Hyperskill",
      image: humanImage,
      content:
        "Harrison's technical writing is exceptional. He has a unique ability to explain complex concepts in a way that's accessible to all readers.",
      forRole: "writer",
    },
    {
      name: "Lada Petrushenko",
      role: "Team Lead at Hyperskill",
      image: humanImage,
      content:
        "Working with Harrison as a topic author and project tester has been a pleasure. His attention to detail and clear writing style significantly improved our topics and articles.",
      forRole: "writer",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.role === selectedRole
  );
  const filteredExperiences = experiences.filter(
    (experience) => experience.role === selectedRole
  );
  const filteredSkills = skillCategories.filter(
    (skill) => skill.role === selectedRole
  );
  const filteredTestimonials = testimonials.filter(
    (testimonial) => testimonial.forRole === selectedRole
  );

  const RoleSelector = () => (
    <div className="flex justify-center space-x-6 mb-8">
      <button
        onClick={() => setSelectedRole("fullstack")}
        className={`px-8 py-4 rounded-lg transition-all duration-300 font-serif font-semibold border-2 ${
          selectedRole === "fullstack"
            ? "bg-green-500 text-slate-900 border-green-500 shadow-lg shadow-green-500/25"
            : "bg-transparent text-green-400 border-green-500/50 hover:border-green-500 hover:bg-green-500/10"
        }`}
      >
        Full Stack Developer
      </button>
      <button
        onClick={() => setSelectedRole("writer")}
        className={`px-8 py-4 rounded-lg transition-all duration-300 font-serif font-semibold border-2 ${
          selectedRole === "writer"
            ? "bg-yellow-500 text-slate-900 border-yellow-500 shadow-lg shadow-yellow-500/25"
            : "bg-transparent text-yellow-400 border-yellow-500/50 hover:border-yellow-500 hover:bg-yellow-500/10"
        }`}
      >
        Technical Writer
      </button>
    </div>
  );

  return (
    <div className="bg-slate-900">
      <Navbar />

      {/* Magazine Header */}
      <div className="bg-slate-800 border-b border-slate-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="font-mono text-xs text-green-400">ISSUE #2025</div>
            <div className="font-mono text-xs text-yellow-400">
              FINTECH DEVELOPER PORTFOLIO
            </div>
            <div className="font-mono text-xs text-slate-400">
              {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen pt-16 flex items-center relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-mono text-sm text-green-600 dark:text-green-400 mb-4">
                FEATURED DEVELOPER
              </div>
              <h1 className="magazine-header mb-6">
                <AnimatedText
                  texts={titles.map((t) => t.text)}
                  className="min-h-[4rem] inline-block"
                />
              </h1>
              <div className="magazine-subheader">
                Software developer experienced in building responsive and scalable web applications.
              </div>
              <p className="editorial-text mb-8 dropcap">
                <AnimatedText
                  texts={titles.map((t) => t.description)}
                  className="min-h-[3rem] inline-block"
                />
              </p>
              <div className="flex gap-6 mb-8">
                <a
                  href="https://github.com/ItotiaHarrison"
                  target="_blank"
                  className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/harrison-itotia/"
                  target="_blank"
                  className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group"
                >
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:harrisonitotia@gmail.com"
                  target="_blank"
                  className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group"
                >
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="fintech-card">
                <div className="font-mono text-xs text-green-600 dark:text-green-400 mb-2">
                  CURRENT STATUS
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-700 dark:text-slate-300">
                      Banking Systems
                    </span>
                    <span className="gold-accent">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700 dark:text-slate-300">
                      Technical Writing
                    </span>
                    <span className="text-green-600 dark:text-green-400">
                      Publishing
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700 dark:text-slate-300">
                      Open Source
                    </span>
                    <span className="text-green-600 dark:text-green-400">
                      Contributing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ArrowDown className="h-6 w-6 mx-auto text-green-600 dark:text-green-400 animate-bounce mt-12" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-slate-50 dark:bg-slate-800 relative transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-green-400 mb-4">
              DEVELOPER PROFILE
            </div>
            <h2 className="magazine-header mb-6">About Harrison</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="editorial-text mb-8 dropcap">
                I'm a software developer with expertise in modern web
                technologies. With 3+ years of experience, I specialize in
                building secure, scalable fintech solutions and crafting
                technical content that empowers developers worldwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="fintech-card">
                  <Code2 className="h-6 w-6 text-green-500 mb-3" />
                  <h3 className="font-serif font-semibold text-slate-100 mb-2">
                    Frontend Development
                  </h3>
                  <p className="text-sm text-slate-400">
                    React, Next.js, TypeScript
                  </p>
                </div>
                <div className="fintech-card">
                  <Database className="h-6 w-6 text-green-500 mb-3" />
                  <h3 className="font-serif font-semibold text-slate-100 mb-2">
                    Backend Development
                  </h3>
                  <p className="text-sm text-slate-400">Java, C#/.NET, APIs</p>
                </div>
                <div className="fintech-card">
                  <Shield className="h-6 w-6 text-yellow-500 mb-3" />
                  <h3 className="font-serif font-semibold text-slate-100 mb-2">
                    Fintech Systems
                  </h3>
                  <p className="text-sm text-slate-400">
                    Banking, Payments, Security
                  </p>
                </div>
                <div className="fintech-card">
                  <PenTool className="h-6 w-6 text-yellow-500 mb-3" />
                  <h3 className="font-serif font-semibold text-slate-100 mb-2">
                    Technical Writing
                  </h3>
                  <p className="text-sm text-slate-400">
                    Documentation, Tutorials
                  </p>
                </div>
              </div>
              <ResumeButton />
            </div>
            <div className="relative">
              <div className="fintech-card p-8">
                <img
                  src={profilePicture}
                  alt="Harrison Itotia"
                  className="rounded-lg w-full mb-6"
                />
                <div className="text-center">
                  <h3 className="font-serif text-xl font-semibold text-slate-100 mb-2">
                    Harrison Ndirangu Itotia
                  </h3>
                  <p className="text-green-400 font-mono text-sm mb-4">
                    Software Developer & Technical Writer
                  </p>
                  <div className="flex justify-center gap-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-mono">
                      KCNA Certified
                    </span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-mono">
                      Nairobi, Kenya
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selector */}
      <div className="bg-slate-100 dark:bg-slate-900 py-12 border-t border-slate-300 dark:border-slate-600 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="font-mono text-sm text-green-400 mb-2">
              PORTFOLIO FILTER
            </div>
            <h3 className="magazine-subheader text-center">View my work as</h3>
          </div>
          <RoleSelector />
        </div>
      </div>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-slate-100 dark:bg-slate-800 relative transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-green-400 mb-4">
              TECHNICAL EXPERTISE
            </div>
            <h2 className="magazine-header mb-6">Technologies & Skills</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((category) => (
              <SkillCard
                key={category.title}
                title={category.title}
                Icon={category.icon}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-white dark:bg-slate-900 relative transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-green-400 mb-4">
              PROFESSIONAL JOURNEY
            </div>
            <h2 className="magazine-header mb-6">Experience</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            {filteredExperiences.map((experience, index) => (
              <TimelineItem key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-slate-50 dark:bg-slate-800 relative transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-green-400 mb-4">
              FEATURED WORK
            </div>
            <h2 className="magazine-header mb-6">Projects</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900 relative transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-green-400 mb-4">
              CLIENT FEEDBACK
            </div>
            <h2 className="magazine-header mb-6">What People Say</h2>
            <p className="editorial-text text-center max-w-2xl mx-auto mb-6">
              Testimonials from clients and colleagues
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white dark:bg-slate-800 relative transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-green-400 mb-4">
              GET IN TOUCH
            </div>
            <h2 className="magazine-header mb-6">Contact Me</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-200 dark:bg-slate-900 border-t border-slate-300 dark:border-slate-600 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src={logo}
                  alt="logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="ml-3 font-serif text-xl font-bold text-slate-100">
                  Harrison Itotia
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Software developer experienced in building responsive and scalable web applications.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-slate-100 mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-slate-400 hover:text-green-400 transition-colors text-sm"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="block text-slate-400 hover:text-green-400 transition-colors text-sm"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="block text-slate-400 hover:text-green-400 transition-colors text-sm"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="block text-slate-400 hover:text-green-400 transition-colors text-sm"
                >
                  Projects
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-slate-100 mb-4">
                Connect
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ItotiaHarrison"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/harrison-itotia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:harrisonitotia@gmail.com"
                  className="text-slate-400 hover:text-green-400 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-500 text-sm font-mono">
                &copy; {new Date().getFullYear()} Harrison Itotia. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
