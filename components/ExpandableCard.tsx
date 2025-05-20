"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
<>
  <AnimatePresence>
    {active && typeof active === "object" && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/10 h-full w-full z-10"
      />
    )}
  </AnimatePresence>
  <AnimatePresence>
    {active && typeof active === "object" ? (
      <div className="fixed inset-0 grid place-items-center z-[100]">
        <motion.button
          key={`button-${active.title}-${id}`}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.05 } }}
          className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-gray-100 rounded-full h-6 w-6"
          onClick={() => setActive(null)}
        >
          <CloseIcon />
        </motion.button>
        <motion.div
          layoutId={`card-${active.title}-${id}`}
          ref={ref}
          className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden shadow-lg"
        >
          <motion.div layoutId={`image-${active.title}-${id}`}>
            <Image
              priority
              width={200}
              height={200}
              src={active.src}
              alt={active.title}
              className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
            />
          </motion.div>

          <div>
            <div className="flex justify-between items-start p-4">
              <div>
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-gray-900 text-xl"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-gray-600"
                >
                  {active.description}
                </motion.p>
              </div>

              <motion.a
                layoutId={`button-${active.title}-${id}`}
                href={active.ctaLink}
                target="_blank"
                className="px-4 py-2 text-sm rounded-full font-bold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
              >
                {active.ctaText}
              </motion.a>
            </div>
            <div className="pt-4 relative px-4">
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-700 text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)]"
              >
                {typeof active.content === "function" ? active.content() : active.content}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    ) : null}
  </AnimatePresence>
  <ul className="max-w-2xl mx-auto w-full gap-4">
    {cards.map((card, index) => (
      <motion.div
        layoutId={`card-${card.title}-${id}`}
        key={`card-${card.title}-${id}`}
        onClick={() => setActive(card)}
        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
      >
        <div className="flex gap-4 flex-col md:flex-row">
          <motion.div layoutId={`image-${card.title}-${id}`}>
            <Image
              width={100}
              height={100}
              src={card.src}
              alt={card.title}
              className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
            />
          </motion.div>
          <div>
            <motion.h3
              layoutId={`title-${card.title}-${id}`}
              className="font-medium text-gray-900 text-center md:text-left"
            >
              {card.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${card.description}-${id}`}
              className="text-gray-600 text-center md:text-left"
            >
              {card.description}
            </motion.p>
          </div>
        </div>
        <motion.button
          layoutId={`button-${card.title}-${id}`}
          className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-cyan-600 hover:text-white text-gray-900 mt-4 md:mt-0 transition-colors"
        >
          {card.ctaText}
        </motion.button>
      </motion.div>
    ))}
  </ul>
</>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "AI-Driven Candidate Matching",
    title: "Maayu",
    src: "/maayu.png",
    ctaText: "Learn More",
    ctaLink: "https://github.com/sanketd12/MaayuBAI24-25",
    content: () => (
      <p>
        A platform that evaluates candidate profiles against open roles, ranks the best fits,
        and provides recruiters with an intuitive interface for streamlined outreach.
      </p>
    ),
  },
  {
    description: "Cloud Project Management",
    title: "HoosConnect",
    src: "/UVA.jpg",
    ctaText: "Learn More",
    ctaLink: "https://github.com/sanketd12/HoosConnect",
    content: () => (
      <p>
                 A centralized workspace where teams can create tasks, share files, and track progress
                 through a real-time collaborative dashboard.
      </p>
    ),
  },
  {
    description: "Interactive RAG Chatbot",
    title: "Pep Talk",
    src: "/pepTalk.png",
    ctaText: "Learn More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
           An interactive RAG chatbot with Flask and React, offering personalized soccer tips inspired by coaches like Pep Guardiola, Sir Alex Ferguson, Arsene Wenger, and Johan Cruyff
        </p>
      );
    },
  },
  {
    description: "Movie Recommendation System",
    title: "Reel Recommender",
    src: "/recommender.png",
    ctaText: "Learn More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          A smart movie recommendation platform powered by content-based filtering. Supports 10,000+ movies and personalized search results.

        </p>
      );
    },
  },

];
