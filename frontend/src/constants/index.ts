import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-5.jpeg";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.jpeg";
import project9 from "../assets/projects/project-9.jpeg";
import project10 from "../assets/projects/project-10.jpeg";
import project11 from "../assets/projects/project-11.jpeg";

export const HERO_CONTENT = `AI enthusiast driven by a passion for innovative, sustainable solutions and transformative technologies.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Master's student in Artificial Intelligence at BTU Cottbus-Senftenberg with a strong foundation in machine learning, data analysis, Natural language processing and computer vision. Experienced in training machine learning models, conducting data analysis, and developing AI solutions through academic projects and work experience as a student assistant. Proficient in Python, SQL, and various machine learning frameworks and libraries (TensorFlow, Scikit learn, Pandas, NumPy, Matplotlib, SciPy). Demonstrates excellent problem-solving, communication, and teamwork skills. Actively involved in academic research and committed to contributing innovative solutions in AI. Outside of studies, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Assistant Lecturer",
    company: "BTU Cottbus-Senftenberg",
    description: `Assisted in taking the exercise class for the course Introduction to Network security and supervising the students during their internship as part of the course requirement. `,
    technologies: ["Linux", "Network Technologies", "Network", "Network"],
  },
  {
    year: "10/2024",
    role: "Data Analytics and Visualization Job Simulation",
    company: "Accenture North America on Forage",
    description: `Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture. Cleaned, modelled and analysed 7 datasets to uncover insights into content trends to inform strategic decisions. Prepared a PowerPoint and video presentation to share key insights for the client and internal stakeholders.`,
    technologies: ["Python", "Excel", "Matplotlib", "mySQL"],
  },
  {
    year: "02/2024 - 05/2024",
    role: "Student Assistant",
    company: "BTU Cottbus-Senftenberg",
    description: `Evaluated Different ML models on motion data, optimizing model accuracy through hyperparameter tuning to find the best model for the data. Used Python and Libraries like TensorFlow, Scikit learn, Pandas, NumPy, Matplotlib, Seaborn to analyse and visualise the datasets. Employed different augmentation techniques on the datasets to improve model accuracy in movement prediction. Prepared reports summarizing research findings and project outcomes.`,
    technologies: ["Python", "TensorFlow", "Scikit learn", "Pandas", "NumPy", "Matplotlib", "SciPy"],
  },
  {
    year: "02/2020 - 05/2020",
    role: "Network Engineer Intern",
    company: "Ministry of External Relations",
    description: `Set-up an ethernet authentication system to ensure reliable and secure LAN connectivity. Documented outlining procedure and network audit results to serve as a valuable resource for future maintenance.`,
    technologies: ["Cisco", "Computer Maintainance"],
  },
  {
    year: "08/2018 - 02/2019",
    role: "Network Administrator Intern",
    company: "CAMTEL - Direction of Networks, Multimedia, and Systems",
    description: `Developed a platform using Django and python to monitor and report quality of service offered to stakeholders. Enhanced network performance through monitoring, reporting and follow-up of network connection failures.`,
    technologies: ["Cisco", "Python", "Haiwei", "Django"],
  },
];

export const PROJECTS = [
  {
    title: "DeepFake Image Detection",
    image: project7,
    description:
      "Developed a deep fake image detection system using Markov Random Fields (MRF) and Gaussian Scale Spaces.",
    technologies: ["Python", "Matlab"],
  },
  {
    title: "NLP with BERT Models",
    image: project10,
    description:
      "Built models for text classification, passage boundary detection, and named-entity recognition using BERT.",
    technologies: ["NLP", "Hungingface", "Python", "Bert"],
  },
  {
    title: "Market Basket Analysis",
    image: project9,
    description:
      "Conducted Analysis on a bakery dataset to identify patterns and trends. Generated association rules to understand purchasing behaviours and enhance cross-selling strategies using Seaborn.",
    technologies: ["Scikit learn", "Pandas", "NumPy", "plotly", "SciPy", "Python", "SQL"],
  },
  {
    title: "BCI Noise Detection",
    image: project5,
    description:
      "Automated noise detection and removal in brain signals to improve VR gaming experiences.",
    technologies: ["Python", "Matlab"],
  },
  {
    title: "Database Unification",
    image: project11,
    description:
      "Unified and normalized databases using SQL, enhancing data analysis capabilities.",
    technologies: ["Python", "sqldeveloper"],
  },
  {
    title: "Machine Learning Implementations",
    image: project8,
    description:
      "Conducted image segmentation and classification projects using DBSCAN, K-means, SVM, ANN, and KNN algorithms.",
    technologies: ["Python", "Scikit learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "AI Image Generator",
    description:
      "An interactive app that generates furniture images from text prompts using a Fine-tunned Stable Diffusion V2-1 model.",
    image: project10, // use a placeholder or custom icon (optional)
    technologies: ["React", "TypeScript", "Hugging Face API", "TailwindCSS", "Python"],
    isCustomComponent: true, // 👈 This tells your component to load <AIGenerator />
  }
];

export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "",
};
