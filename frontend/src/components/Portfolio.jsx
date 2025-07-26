import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Github, Linkedin, Mail, Download, ExternalLink, Calendar, MapPin, GraduationCap, Sparkles, Code2, Database, Brain } from "lucide-react";
import { mockData } from "../data/mock";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ["about", "projects", "certifications", "education", "experience", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-100 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full px-6 py-3 shadow-lg transition-all duration-300">
        <div className="flex items-center space-x-8">
          <div className="text-lg font-semibold text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Divya Sharma
          </div>
          <div className="hidden md:flex space-x-6">
            {[
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "certifications", label: "Certificates" },
              { id: "education", label: "Education" },
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 px-3 py-1 rounded-full ${
                  activeSection === item.id 
                    ? "text-white bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md" 
                    : "text-gray-700 hover:text-indigo-600 hover:bg-white/30"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="pt-40 pb-32 px-6 relative">
        <div 
          className="max-w-6xl mx-auto text-center relative z-10"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-gray-700 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
              AI & Data Science Student
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold text-gray-800 mb-8 tracking-tight animate-slide-up">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Divya
            </span>
            <br />
            <span className="text-gray-700">Sharma</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-delay">
            Crafting intelligent solutions through 
            <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text font-semibold"> code</span>, 
            <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-semibold"> data</span>, and
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text font-semibold"> immersive experiences</span>
          </p>

          <div className="flex justify-center space-x-4 animate-fade-in-delay-2">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open(mockData.resumeLink, '_blank')}
              className="border-2 border-gray-300 hover:border-indigo-400 bg-white/50 backdrop-blur-sm hover:bg-white/70 text-gray-700 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Code2 className="absolute top-1/4 left-1/4 w-8 h-8 text-indigo-300 animate-float" />
          <Database className="absolute top-1/3 right-1/4 w-6 h-6 text-purple-300 animate-float-delay" />
          <Brain className="absolute bottom-1/3 left-1/3 w-7 h-7 text-pink-300 animate-float-delay-2" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              About <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Description */}
            <div className="lg:col-span-2">
              <div className="bg-white/30 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-on-scroll">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                  {mockData.about.description}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-indigo-500" />
                    <span className="font-medium">B.Tech AI & DS (2023-2027)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-purple-500" />
                    <span className="font-medium">PIET, Kurukshetra</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <div className="bg-white/30 backdrop-blur-lg border border-white/30 rounded-3xl p-6 shadow-xl animate-on-scroll">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-indigo-500" />
                  Current Focus
                </h3>
                <ul className="space-y-3">
                  {mockData.about.interests.map((interest, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                      <span className="font-medium">{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/30 backdrop-blur-lg border border-white/30 rounded-3xl p-6 shadow-xl animate-on-scroll">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Excellence</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
                    8.4
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Current CGPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Featured <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mockData.projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-on-scroll"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.year}
                    </div>
                  </div>
                  {project.github && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                      className="bg-white/30 hover:bg-white/50 backdrop-blur-sm border border-white/30 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 font-medium">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      className="bg-white/40 backdrop-blur-sm text-gray-700 border border-white/30 rounded-full px-3 py-1 font-medium hover:bg-white/60 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mockData.certifications.map((cert, index) => (
              <div 
                key={index} 
                className="group cursor-pointer bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll"
                onClick={() => window.open(cert.link, '_blank')}
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-bold text-gray-800 group-hover:text-indigo-600 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors flex-shrink-0 ml-2" />
                </div>
                
                <div className="text-sm text-gray-500 mb-2 font-medium">{cert.date}</div>
                <div className="text-sm text-gray-600 font-medium">{cert.organization}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-on-scroll">
            <Button 
              variant="outline"
              onClick={() => window.open(mockData.certificatesFolder, '_blank')}
              className="border-2 border-indigo-300 hover:border-indigo-500 bg-white/30 hover:bg-white/50 backdrop-blur-lg text-gray-700 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Certificates
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {mockData.education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white/25 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-on-scroll"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {mockData.experience.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white/25 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-on-scroll"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                <p className="text-gray-600 font-medium mb-3">{exp.organization}</p>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-medium">{exp.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Technical <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
            {mockData.skills.map((skill, index) => (
              <Badge 
                key={index} 
                className="bg-white/30 backdrop-blur-lg border border-white/40 text-gray-700 font-semibold px-6 py-3 text-base rounded-full hover:bg-white/50 hover:scale-110 transition-all duration-300 shadow-lg"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Get In <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/25 backdrop-blur-lg border border-white/30 rounded-3xl p-12 shadow-2xl animate-on-scroll">
            {/* Resume Download */}
            <div className="mb-12">
              <Button 
                size="lg" 
                onClick={() => window.open(mockData.resumeLink, '_blank')}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <Download className="w-5 h-5 mr-3" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="grid md:grid-cols-3 gap-6">
              {mockData.socials.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open(social.url, '_blank')}
                  className="bg-white/30 hover:bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 h-auto flex-col space-y-2 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="text-indigo-500">{social.icon}</div>
                  <span className="text-gray-700 font-semibold">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 font-medium">
            © 2025 Divya Sharma. Crafted with passion for AI and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;