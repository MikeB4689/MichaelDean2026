 
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

import portfolio from "./myinfo/portfolio";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", isDark);

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  return (
    <div
      className="
        min-h-screen
        bg-bg
        text-text
        transition-colors
        duration-300
      "
    >
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
      />


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="w-full">

        <AnimatedSection>
          <Hero personalData={portfolio} />
        </AnimatedSection>

        <AnimatedSection>
          <About personalData={portfolio} />
        </AnimatedSection>

        <AnimatedSection>
          <Skills personalData={portfolio} />
        </AnimatedSection>

        <AnimatedSection>
          <Experience personalData={portfolio} />
        </AnimatedSection>

        <AnimatedSection>
          <Services personalData={portfolio} />
        </AnimatedSection>

        <AnimatedSection>
          <Contact personalData={portfolio} />
        </AnimatedSection>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <Footer personalData={portfolio} />
    </div>
  );
}

export default App;
 
