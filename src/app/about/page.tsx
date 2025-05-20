"use client";
import Header from "../../../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

const tabs = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "connect", label: "Connect" }
];

const experiences = [
  {
    title: "Project Lead",
    company: "Business & AI Institute (BAI), University of Virginia",
    period: "Sep 2024 – May 2025",
    description:
      "Led development of a RAG-powered candidate-matching service for startup Maayu, integrating Hugging Face embeddings, LangGraph orchestration, and QDrant vector store.",
    responsibilities: [
      "Managed a team of 6 students through Agile sprints: facilitated standups, defined epics, and ensured on-time MVP delivery",
      "Architected end-to-end RAG pipeline: generated embeddings for resumes and job descriptions with Hugging Face, orchestrated retrieval via LangGraph, and stored vectors in QDrant",
      "Built a Next.js + React frontend prototype enabling recruiters to fetch contextual candidate matches in under 200 ms",
      "Coordinated with Maayu stakeholders to gather requirements, run weekly demos, and iterate on feedback"
    ]
  },
  {
    title: "Teaching Assistant, CS3240 – Software Engineering",
    company: "University of Virginia",
    period: "Jan 2025 – Present",
    description:
      "Managed an Agile semester-long team project and supported 300+ students with weekly standups, mentorship, and tech troubleshooting.",
    responsibilities: [
      "Led weekly standups and sprint planning for a team of 10+ students, ensuring on-time deliverables",
      "Provided hands-on guidance integrating AWS S3, Django, Google OAuth, and Heroku deployment",
      "Held office hours and code reviews to help 300+ students debug and optimize their projects",
      "Collaborated with course staff to refine lab exercises and grading rubrics"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "TechSur Solutions",
    period: "Jun 2024 – Aug 2024",
    description:
      "Built a USCIS-focused RAG chatbot UI following USWDS conventions and developed a Spring Boot task-event microservice to manage workflows.",
    responsibilities: [
      "Developed React + TypeScript frontend for the RAG chatbot, integrating OpenAI embeddings and USCIS document retrieval",
      "Created a Spring Boot microservice with Liquibase migrations and optimistic locking to handle 500+ task states",
      "Served as point-of-contact for interns on React/TypeScript best practices and microservice architecture",
      "Designed and implemented REST API endpoints for dynamic task-state management"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "CargoLabs",
    period: "Jun 2023 – Aug 2023",
    description:
      "Developed the CoverPort UI in Next.js, TypeScript, React, and Tailwind CSS, and introduced a seller-quoting feature to let brokers generate custom coverage quotes on-demand.",
    responsibilities: [
      "Implemented a seller quoting feature end-to-end: created new API endpoints with AWS Lambda and MySQL to deliver dynamic daily insurance quotes", 
      "Added toast notifications and implemented front-end libraries to elevate the user experience",
      "Optimized component performance and page load times by refactoring React code",
      "Collaborated with product and design teams to prioritize features that saved truckers thousands in annual premiums"
    ]
  },
  {
    title: "Machine Learning Researcher",
    company: "University of Virginia",
    period: "Sep 2024 – Present",
    description:
      "Processed and analyzed 15M+ particle accelerator events, implemented noise-reduction techniques, and trained deep models to improve simulation accuracy.",
    responsibilities: [
      "Isolated relevant particle signals by applying denoising algorithms, boosting data clarity",
      "Trained ML models to achieve thermal equilibrium polarization precision of 0.05%, enhancing stability",
      "Implemented a residual neural network architecture to reduce training loss and speed up convergence",
      "Visualized results and presented findings in weekly lab meetings"
    ]
  },
  {
    title: "IT Assistant",
    company: "Niyam IT",
    period: "Feb 2024 – Mar 2025",
    description:
      "Automated HR data workflows using Python scripts with the OpenAI API and integrated Strapi CMS for a user-friendly company landing page.",
    responsibilities: [
      "Authored Python scripts leveraging OpenAI API to summarize state and federal laws into Excel reports", 
      "Researched, configured, and deployed Strapi CMS as backend for content management", 
      "Implemented a React frontend for CMS-powered landing page, reducing content update time",
      "Collaborated with HR team to streamline documentation and onboarding processes"
    ]
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Django",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "Spring Boot",
  "SQL (MySQL/PostgreSQL)",
  "AWS Lambda",
  "Docker",
  "Tailwind CSS",
  "MongoDB",
  "Jira",
  "Git",
  
];
export default function About() {
  const [activeTab, setActiveTab] = useState("experience");
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.h1
          className="text-5xl font-bold mb-16 text-center text-[#0891B2]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-xl shadow-lg flex gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors relative ${activeTab === tab.id ? "text-white" : "text-gray-600 hover:text-[#0891B2]"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#0891B2] rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            {...fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {activeTab === "experience" && (
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-xl text-[#0891B2]">{exp.title}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                        <p className="text-gray-500">{exp.period}</p>
                      </div>
                      <motion.button
                        onClick={() => setExpandedExperience(expandedExperience === exp.title ? null : exp.title)}
                        className="px-4 py-2 bg-[#0891B2] text-white rounded-lg text-sm font-medium hover:bg-[#0e7490] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedExperience === exp.title ? "Show Less" : "Learn More"}
                      </motion.button>
                    </div>
                    <AnimatePresence>
                      {expandedExperience === exp.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 overflow-hidden"
                        >
                          <p className="text-gray-600 mb-4">{exp.description}</p>
                          <h4 className="font-semibold text-[#0891B2] mb-2">Key Responsibilities:</h4>
                          <ul className="list-disc list-inside space-y-2">
                            {exp.responsibilities.map((resp, idx) => (
                              <motion.li
                                key={idx}
                                className="text-gray-600"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                {resp}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "skills" && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="p-4 bg-slate-50 rounded-xl text-center hover:bg-slate-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-medium text-[#0891B2]">{skill}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <motion.div
                className="p-6 bg-slate-50 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-xl text-[#0891B2] mb-2">B.S. in Computer Science</h3>
                <p className="text-gray-600">University of Virginia</p>
                <p className="text-gray-600">Charlottesville, VA</p>
                <p className="text-gray-500 mt-2">Expected Graduation: May 2026</p>
                <motion.a
                  href="/transcript.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-[#0891B2] text-white rounded-lg font-medium hover:bg-[#0e7490] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Transcript
                </motion.a>
              </motion.div>
            )}

            {activeTab === "connect" && (
              <div className="space-y-4">
                <motion.a
                  href="https://linkedin.com/in/sanketd12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-semibold text-xl text-[#0891B2]">LinkedIn</h3>
                  <p className="text-gray-600">Connect with me on LinkedIn</p>
                </motion.a>
                <motion.a
                  href="https://github.com/sanketd12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-semibold text-xl text-[#0891B2]">GitHub</h3>
                  <p className="text-gray-600">Check out my projects on GitHub</p>
                </motion.a>
                <motion.a
                  href="/Sanket_Resume__Fall_.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-semibold text-xl text-[#0891B2]">Resume</h3>
                  <p className="text-gray-600">View my detailed resume</p>
                </motion.a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}