import { Github, Linkedin, Mail } from "lucide-react";

export const mockData = {
  about: {
    description: "Artificial Intelligence and Data Science undergraduate (B.Tech 2023–2027) at PIET, Kurukshetra University. Passionate about transforming data into actionable insights and building intelligent systems that solve real-world problems. Currently exploring the intersection of AI automation, immersive technologies, and data visualization.",
    interests: [
      "Data Analysis & Visualization",
      "AI Automation & Machine Learning", 
      "Dashboard Development",
      "AR/VR Interface Design",
      "Real-world Dataset Analysis"
    ]
  },
  
  projects: [
    {
      title: "AI Assistant Bot – AICTE Internship Project",
      year: "2025",
      description: "Developed an intelligent AI-based summarizer and assistant bot with automation capabilities. Implemented natural language processing for document summarization and basic task automation features.",
      technologies: ["Python", "NLP", "AI/ML", "Automation"],
      github: "https://github.com/Divya-Sharma25/AICTE_Shell_Skills4Future_Internship"
    },
    {
      title: "Stock & Revenue Analysis – IBM x Infosys Springboard",
      year: "2025", 
      description: "Comprehensive analysis of Tesla & GameStop stock data using advanced Python libraries. Created interactive visualizations with Plotly to identify market trends and revenue patterns.",
      technologies: ["Python", "Plotly", "Data Analysis", "Financial Modeling"],
      github: "https://github.com/Divya-Sharma25/IBM_Python_Project"
    },
    {
      title: "Power BI Dashboard",
      year: "2024",
      description: "Built an interactive business intelligence dashboard for visualizing key performance indicators (KPIs). Integrated Excel data sources with Power BI for real-time analytics and reporting.",
      technologies: ["Power BI", "Excel", "Data Visualization", "Business Intelligence"],
      github: null
    },
    {
      title: "Immersive AR/VR Education Model", 
      year: "2023",
      description: "Conceptualized and prototyped an innovative educational platform using AR/VR technologies. Submitted as part of Smart India Hackathon internal round, focusing on immersive learning experiences.",
      technologies: ["Unity", "AR/VR", "C#", "3D Modeling"],
      github: null
    },
    {
      title: "Python ChatBot with GUI",
      year: "2023",
      description: "Created an interactive chatbot application with a user-friendly graphical interface using Python and Tkinter. Implemented real-time Q&A functionality with natural conversation flow.",
      technologies: ["Python", "Tkinter", "GUI Development", "Chatbot"],
      github: null
    },
    {
      title: "Spotify SQL Database Design",
      year: "2023", 
      description: "Designed and implemented a comprehensive relational database system for managing music streaming data. Created optimized queries for songs, users, playlists, and user interactions using PostgreSQL.",
      technologies: ["PostgreSQL", "Database Design", "SQL", "Data Modeling"],
      github: null
    }
  ],

  certifications: [
    {
      title: "AR/VR Certificate of Appreciation – Unity",
      date: "Jul 2023",
      organization: "Unity Technologies",
      // Replace FILE_ID_1 with actual Google Drive file ID for this certificate
      link: "https://drive.google.com/file/d/FILE_ID_1/view?usp=drive_link"
    },
    {
      title: "Unity AR/VR Training Program",
      date: "Jul–Aug 2023", 
      organization: "Unity Technologies",
      // Replace FILE_ID_2 with actual Google Drive file ID for this certificate
      link: "https://drive.google.com/file/d/FILE_ID_2/view?usp=drive_link"
    },
    {
      title: "Organizer – Dive into Metaverse",
      date: "Aug–Dec 2023",
      organization: "72-hour Training Program",
      // Replace FILE_ID_3 with actual Google Drive file ID for this certificate
      link: "https://drive.google.com/file/d/FILE_ID_3/view?usp=drive_link"
    },
    {
      title: "Finalist – Smart India Hackathon", 
      date: "Sep 2023",
      organization: "Government of India",
      // Replace FILE_ID_4 with actual Google Drive file ID for Smart_India_Hackathon.pdf
      link: "https://drive.google.com/file/d/FILE_ID_4/view?usp=drive_link"
    },
    {
      title: "2nd Place – VR Competition, Manak Mahotsav",
      date: "Oct 2023",
      organization: "Technical Competition",
      // Replace FILE_ID_5 with actual Google Drive file ID for Manak_Mahotsav.pdf
      link: "https://drive.google.com/file/d/FILE_ID_5/view?usp=drive_link"
    },
    {
      title: "3rd Place – Brain Teaser, Maestros",
      date: "Mar 2024", 
      organization: "Academic Competition",
      // Replace FILE_ID_6 with actual Google Drive file ID for this certificate
      link: "https://drive.google.com/file/d/FILE_ID_6/view?usp=drive_link"
    },
    {
      title: "Summer Training – Data Analytics using Python",
      date: "Jul 2024",
      organization: "Professional Development",
      // Replace FILE_ID_7 with actual Google Drive file ID for this certificate
      link: "https://drive.google.com/file/d/FILE_ID_7/view?usp=drive_link"
    },
    {
      title: "Quantum Quest Technical Quiz",
      date: "Apr 2025",
      organization: "Technical Competition", 
      // Replace FILE_ID_8 with actual Google Drive file ID for this certificate
      link: "https://drive.google.com/file/d/FILE_ID_8/view?usp=drive_link"
    },
    {
      title: "National Technology Day – Declamation Competition",
      date: "May 2025",
      organization: "National Competition",
      // Replace FILE_ID_9 with actual Google Drive file ID for this certificate
      link: "https://drive.google.com/file/d/FILE_ID_9/view?usp=drive_link"
    }
  ],

  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science", 
      institution: "PIET, Kurukshetra University",
      year: "2023–2027",
      grade: "CGPA: 8.4"
    },
    {
      degree: "12th Grade (CBSE)",
      institution: "Central Board of Secondary Education", 
      year: "2023",
      grade: "92.8%"
    },
    {
      degree: "10th Grade (CBSE)",
      institution: "Central Board of Secondary Education",
      year: "2021", 
      grade: "93.2%"
    }
  ],

  experience: [
    {
      title: "AICTE Cycle 2 – Shell Skill for Future Internship",
      organization: "All India Council for Technical Education",
      duration: "Jul–Aug 2025 (Ongoing)"
    },
    {
      title: "Infosys Springboard – Cohort 5",
      organization: "Infosys Limited", 
      duration: "Apr 2025 – Aug 2025"
    }
  ],

  skills: [
    "Python", "SQL (PostgreSQL)", "R", "C++", "Power BI", "Excel", 
    "Jupyter Notebook", "GitHub", "HTML", "CSS", "Unity", "Canva", "VS Code"
  ],

  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/divya-sharma-ba489027a",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      label: "GitHub", 
      url: "https://github.com/Divya-Sharma25",
      icon: <Github className="w-5 h-5" />
    },
    {
      label: "Email",
      url: "mailto:divyasharma251004@gmail.com",
      icon: <Mail className="w-5 h-5" />
    }
  ],

  // Direct PDF link for resume download
  resumeLink: "https://drive.google.com/file/d/17CzA8d7QQgnCjEKcpqsolDI-PJOeBuHO/view?usp=drive_link",
  
  // Certificates folder for "View All" button
  certificatesFolder: "https://drive.google.com/drive/folders/14RAtlEl0-zBc2KHE5d3h0ZtWFx4ZmLkE"
};