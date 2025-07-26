import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Github, Linkedin, Mail, Download, ExternalLink, Calendar, MapPin, GraduationCap } from "lucide-react";
import { mockData } from "../data/mock";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
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
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-light text-black">Divya Sharma</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "certifications", label: "Certifications" },
                { id: "education", label: "Education" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-all duration-300 hover:text-gray-600 ${
                    activeSection === item.id ? "text-black font-medium" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-light text-black mb-6 tracking-tight">
              Divya Sharma
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              AI & Data Science Student crafting intelligent solutions through code, data, and immersive experiences
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-12 text-center">About Me</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg md:text-xl font-light mb-6">
              {mockData.about.description}
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-light text-black mb-4">Current Focus</h3>
                <ul className="space-y-2 text-gray-600">
                  {mockData.about.interests.map((interest, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light text-black mb-4">Academic Journey</h3>
                <div className="text-gray-600">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    <span>B.Tech AI & DS (2023-2027)</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>PIET, Kurukshetra University</span>
                  </div>
                  <div className="text-lg font-medium text-black">CGPA: 8.4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-16 text-center">Projects</h2>
          <div className="space-y-8">
            {mockData.projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-light text-black group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-500 mt-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.year}
                      </CardDescription>
                    </div>
                    {project.github && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                        className="hover:bg-gray-100"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-16 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mockData.certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-gray-200"
                onClick={() => window.open(cert.link, '_blank')}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-light text-black group-hover:text-gray-600 transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{cert.organization}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => window.open(mockData.certificatesFolder, '_blank')}
              className="hover:bg-gray-100"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Certificates
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-16 text-center">Education</h2>
          <div className="space-y-8">
            {mockData.education.map((edu, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-light text-black">{edu.degree}</CardTitle>
                  <CardDescription className="text-gray-500">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{edu.year}</span>
                    <span className="text-lg font-medium text-black">{edu.grade}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-16 text-center">Experience</h2>
          <div className="space-y-6">
            {mockData.experience.map((exp, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-light text-black">{exp.title}</CardTitle>
                  <CardDescription className="text-gray-500">{exp.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-16 text-center">Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {mockData.skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-gray-300 hover:bg-gray-100 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-16">Get In Touch</h2>
          
          {/* Resume Download */}
          <div className="mb-12">
            <Button 
              size="lg" 
              onClick={() => window.open(mockData.resumeLink, '_blank')}
              className="bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {mockData.socials.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="lg"
                onClick={() => window.open(social.url, '_blank')}
                className="hover:bg-gray-100 transition-colors"
              >
                {social.icon}
                <span className="ml-2">{social.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 font-light">
            © 2025 Divya Sharma. Crafted with passion for AI and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;