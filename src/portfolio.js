import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import brainIcon from "./assets/images/brain-icon.png";
import dnaIcon from "./assets/images/dna-icon.png";
import cloudIcon from "./assets/images/cloud-icon.png";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Sean Ziogas",
  title: "Hi, I'm Sean",
  subTitle: emoji(
    "Product & GTM Leader working at the intersection of AI, UX, and Growth. I help teams ship smart, scalable solutions that users love."
  ),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/SeanMZ7",
  linkedin: "https://www.linkedin.com/in/sean-ziogas-a16a82b0/",
  gmail: "seanziogas@gmail.com",
  display: true
};

const skillsSection = {
  title: "Core Focus",
  subTitle: "I lead product and GTM efforts across early and growth-stage tech companies.",
  skills: [
    emoji("⚡ Build, scale and manage AI & SaaS products from zero to users"),
    emoji("⚡ Translate abstract goals into tested UX, data, and GTM systems"),
    emoji("⚡ Blend product intuition with hands-on AI, LLM, and data science work"),
    emoji("⚡ Bridge technical delivery with business outcomes to drive measurable results")
  ],
  softwareSkills: [
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "javascript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "typescript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "sql", fontAwesomeClassname: "fas fa-database" },
    { skillName: "saas", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "machine learning", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "product management", fontAwesomeClassname: "fas fa-tasks" },
    { skillName: "gtm strategy", fontAwesomeClassname: "fas fa-bullseye" }
  ],
  display: true
};

const educationInfo = { display: false };

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Product Strategy", progressPercentage: "90%" },
    { Stack: "AI / LLM Tools", progressPercentage: "75%" },
    { Stack: "GTM Execution", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Founder",
      company: "Stealth AI Startup",
      companylogo: brainIcon,
      date: "Apr 2024 – Present",
      desc: "Built a cognitively enabled productivity tool from scratch. Led LLM feature design, GTM experiments, and adaptive UX."
    },
    {
      role: "Head of Platform Strategy & Development",
      company: "HealthTech Startup",
      companylogo: dnaIcon,
      date: "Mar 2024 – Present",
      desc: "Own product execution across compliance, engineering, and AI. Built MVP backlog and QA process, defined roadmap, and aligned technical & research teams."
    },
    {
      role: "GTM Strategy / Business Development",
      company: "AI SaaS Companies",
      companylogo: cloudIcon,
      date: "2019 – 2023",
      desc: "Contributed to $12.5M+ in ARR at three companies across LLM & ML applications. Blended technical pre and post sales with strategic GTM planning."
    }
  ]
};

const openSource = {
  githubConvertedToken: "",
  githubUserName: "SeanMZ7", // matches your profile.json
  showGithubProfile: "false", // ensures profile renders
  display: false // required for Projects.js to render
};

const bigProjects = {
  title: "Portfolio",
  subtitle: "Selected Projects",
  projects: [
    {
      projectName: "Neura_Productivity_AI",
      projectDesc: "LLM-powered productivity and personal tracking system that adapts to users emotional, behavioral, and habitual patterns.",
      footerLink: [{ name: "GitHub", url: "https://github.com/SeanMZ7/Neura_Productivity_AI" }]
    },
    {
      projectName: "LSTM_Securities_Forecasting",
      projectDesc: "Multi-horizon deep learning pipeline for securities/derivatives forecasting and strategy evaluation.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/SeanMZ7/LSTM-Securities_Forecasting" }
      ]
    },
    {
      projectName: "Scoutek_AI",
      projectDesc: "AI-powered system for pitch strategy and scouting based on real-time game data.",
      footerLink: [{ name: "Read More", url: "#" }]
    }
  ],
  display: true
};

const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };

const resumeSection = {
  title: "One Pager",
  subtitle: "This gives you a brief overview of my journey. For my full resume, please contact me via email",
  display: true
};

const contactInfo = {
  title: emoji("Reach out to me ✉️"),
  subtitle: "If you're hiring or just want to say hi, my inbox is open.",
  email_address: "seanziogas@gmail.com",
  location: "Remote",
  isHireable: true,
};

const twitterDetails = { userName: "", display: false };
const isHireable = true;

const achievementSection = { display: false };

const aboutSection = {
  title: "About Me",
  subtitle: "Personal reflections, background, and what drives my work.",
  content: "Coming soon: This will link to my story, ethos, and purpose behind the work I do."
};

export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection,
  resumeSection,
  contactInfo,
  twitterDetails,
  isHireable,
  achievementSection,
  aboutSection
};
