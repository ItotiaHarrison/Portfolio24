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
import humanImage from "./assets/human.png"
import ContactForm from "./components/ContactForm";
import profilePicture from "./assets/itotias-pic.jpeg"

function App() {
  const titles = [
    {
      text: "Full Stack Developer",
      description: "Building beautiful, functional, and scalable web applications with modern technologies"
    },
    {
      text: "Technical Writer",
      description: "Crafting clear, concise, and comprehensive documentation for developers and users"
    }
  ];

  const projects = [
    {
      title: "Beyond My Tribe",
      description: "A website for Beyond My Tribe organization",
      image: beyondMyTribeImage,
      technologies: ["Javascript", "jQuery", "Bootstrap5", "Strapi CMS"],
      githubUrl: "https://www.beyondmytribe.org/",
      liveUrl: "https://www.beyondmytribe.org/",
    },
    {
      title: "Real Estate",
      description:
        "A real estate website providing enabling property owners to list their properties for sale or tenants to rent.",
      image: realEstateImage,
      technologies: ["React", "TailwindCSS", "firebase"],
      githubUrl: "https://github.com/ItotiaHarrison/Real-Estate-app",
      liveUrl: "https://real-estate-gamma-ten.vercel.app/",
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
    },
  ];

  const experiences = [
    {
      timeRange: "December 2023 - Present",
      title: "Technical Writer",
      company: "Hyperskill",
      description:
        "Collaborate with experts to create accurate and engaging technical content for the following topics; Statistics, Nodejs, Frontend topics (HTML, CSS, Javascript, Reactjs), Coding with AI topics(OpenAI API). Utilize content management systems (CMS) to upload and manage technical content. Review and correct content written by other topic authors to ensure it maintains the hyperskill style hence reaching and helping more learners on the platform.",
    },
    {
      timeRange: "January 2024 - Present",
      title: "Full Stack Developer",
      company: "MemorySoft International Limited",
      description:
        "Lead the development of a web-based Human Resource management system with the following modules; payroll, time and attendance, leave, performance and appraisal. Develop a responsive user interface using ReactJS, redux and TypeScript. Build back-end infrastructure with C# and .NET framework. Design, create and integrate MySQL database for secure data management on the web application.",
    },
    {
      timeRange: "April 2023 - December 2023",
      title: "Full Stack Developer",
      company: "Beyond My Tribe",
      description:
        "Integrated a payment system that improved member registration and collecting donations. Created user-friendly forms, enhancing the user interations on the website.Implemented Google Analytics 4 for digital strategy optimization. Built a content management system using Strapi. Integrated social media platforms to attract interactions on the organisation post about their activities.",
    },
    {
      timeRange: "August 2022 - April 2023",
      title: "Software Developer Intern",
      company: "iTalanta",
      description:
        "Integrated OAuth for user authentication in the Elewa project. Developed intuitive user interfaces for a learning management system using Angular.js. Participated in code reviews and discussions on new feature implementations.",
    },
  ];

  const skillCategories = [
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
    },
  ];

  const testimonials = [
    {
      name: "Lawrence Adam",
      role: "Executive Director at Beyond My Tribe",
      image: humanImage,
      content:
        "Harrison's technical expertise and attention to detail transformed our project. He consistently delivered beyond expectations in the building of our website.",
    },
    {
      name: "Peter Mbui",
      role: "Software Developer at Alis",
      image: humanImage,
      content:
        "He is one of the most talented developers I've worked with. His ability to solve complex problems while maintaining clean code is remarkable.",
    },
    {
      name: "Pamela Ombima",
      role: "Assistant Director Youth Development Officer",
      image: humanImage,
      content:
        "An exceptional developer who brings both technical excellence and creative solutions to every project he touch.",
    },
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-black/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              <AnimatedText
                texts={titles.map((t) => t.text)}
                className="min-h-[4rem] inline-block"
              />
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              <AnimatedText
                texts={titles.map((t) => t.description)}
                className="min-h-[3rem] inline-block"
              />
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a
                href="https://github.com/ItotiaHarrison"
                target="_blank"
                className="text-gray-200 hover:text-indigo-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/harrison-itotia/"
                target="_blank"
                className="text-gray-200 hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:harrisonitotia@gmail.com"
                target="_blank"
                className="text-gray-200 hover:text-indigo-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <ArrowDown className="h-6 w-6 mx-auto text-gray-200 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                I'm a full-stack developer with expertise in modern web
                technologies. With 3+ years of experience, I specialize in
                creating scalable and efficient solutions that solve real-world
                problems.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-indigo-600" />
                  <span>Frontend Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-indigo-600" />
                  <span>Backend Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layout className="h-5 w-5 text-indigo-600" />
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <PenTool className="h-5 w-5 text-indigo-600" />
                  <span>Technical Writing</span>
                </div>
              </div>
              <ResumeButton />
            </div>
            <div className="relative">
              <img
                src={profilePicture}
                alt="Harrison Itotia"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technologies and Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
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
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <TimelineItem key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What People Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Testimonials from clients and colleagues
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Contact Me
          </h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
              <span className="ml-2 text-xl font-bold">Harrison Itotia</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/ItotiaHarrison"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/harrison-itotia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:harrisonitotia@gmail.com"
                className="hover:text-indigo-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
