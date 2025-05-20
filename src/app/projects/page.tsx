"use client";
import Header from "../../../components/Header";
import { ExpandableCardDemo } from "../../../components/ExpandableCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <section id="projects" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold text-[#0891B2] mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Personal Projects
          </motion.h1>
          <ExpandableCardDemo />
        </div>
      </section>
    </div>
  );
}