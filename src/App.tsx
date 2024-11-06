import { Github, Linkedin, Mail, ArrowDown, Code2, Database, Layout, Globe, Server, Shield, PenTool } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import ResumeButton from './components/ResumeButton';
import SkillCard from './components/SkillCard';
import beyondMyTribeImage from './assets/BMT.png'
import realEstateImage from './assets/realestate.png'
import haritHotelImage from './assets/HaritHotel.png'
import logo from './assets/logo.png'

function App() {
  const projects = [
    {
      title: "Beyond My Tribe",
      description: "A website for Beyond My Tribe organization",
      image: beyondMyTribeImage,
      technologies: ["Javascript", "jQuery", "Bootstrap5", "Strapi CMS"],
      githubUrl: "https://www.beyondmytribe.org/",
      liveUrl: "https://www.beyondmytribe.org/"
    },
    {
      title: "Real Estate",
      description: "A real estate website providing enabling property owners to list their properties for sale or tenants to rent.",
      image: realEstateImage,
      technologies: ["React", "TailwindCSS", "firebase"],
      githubUrl: "https://github.com/ItotiaHarrison/Real-Estate-app",
      liveUrl: "https://real-estate-app-krma.vercel.app/"
    },
    {
      title: "Harit Hotel",
      description: "A hotel/Airbnb management web application with real-time updates on available rooms and bookings",
      image: haritHotelImage,
      technologies: ["Nextjs", "Typescript", "Tailwind CSS", "Sanity CMS", "Google Authenticator"],
      githubUrl: "https://github.com/ItotiaHarrison/Harit-Hotel",
      liveUrl: "https://harit-hotel.vercel.app/"
    }
  ];

  const experiences = [
    {
      year: "2024",
      title: "Technical Writer",
      company: "Hyperskill",
      description: "Collaborate with experts to create accurate and engaging technical content for the following topics; Statistics, Nodejs, Frontend topics (HTML, CSS, Javascript, Reactjs), Coding with AI topics(OpenAI API). Utilize content management systems (CMS) to upload and manage technical content. Review and correct content written by other topic authors to ensure it maintains the hyperskill style hence reaching and helping more learners on the platform."
    },
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "MemorySoft International Limited",
      description: "Lead the development of a web-based Human Resource management system with the following modules; payroll, time and attendance, leave, performance and appraisal. Develop a responsive user interface using ReactJS, redux and TypeScript. Build back-end infrastructure with C# and .NET framework. Design, create and integrate MySQL database for secure data management on the web application."
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Beyond My Tribe",
      description: "Integrated a payment system that improved member registration and collecting donations. Created user-friendly forms, enhancing the user interations on the website.Implemented Google Analytics 4 for digital strategy optimization. Built a content management system using Strapi. Integrated social media platforms to attract interactions on the organisation post about their activities."
    },
    {
      year: "2022",
      title: "Software Developer Intern",
      company: "iTalanta",
      description: "Integrated OAuth for user authentication in the Elewa project. Developed intuitive user interfaces for a learning management system using Angular.js. Participated in code reviews and discussions on new feature implementations."
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["JavaScript", "React", "TypeScript", "Next.js", "TailwindCSS", "Bootstrap5", "Redux", "HTML5", "CSS3", ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["C#", ".NET", "Python", "Django", "Ruby", "Ruby on Rails", "MySQL", "PostgreSQL", "MongoDB", "REST APIs", "firebase", "Strapi CMS", "Sanity CMS"]
    },
    {
      title: "DevOps & Tools",
      icon: Shield,
      skills: ["Git", "CI/CD", "Github", "Windows", "Linux", "Cypress", "Jest", "Google Analytics"]
    }
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Building beautiful, functional, and scalable web applications with modern technologies
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a href="https://github.com/ItotiaHarrison" target="_blank" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/harrison-itotia/" target="_blank" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:harrisonitotia@gmail.com" target="_blank" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <ArrowDown className="h-6 w-6 mx-auto text-indigo-600 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
              I'm a full-stack developer with expertise in modern web technologies.
                With 3+ years of experience, I specialize in creating scalable and efficient
                solutions that solve real-world problems.
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
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technologies and Skills</h2>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Experience</h2>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Me</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  className="transition ease-in-out rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                
                <input
                  type="email"
                  id="email"
                  className="transition ease-in-out rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  rows={4}
                  className="transition ease-in-out rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
              <span className="ml-2 text-xl font-bold">Harrison Itotia</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/ItotiaHarrison" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/harrison-itotia/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:harrisonitotia@gmail.com" className="hover:text-indigo-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;