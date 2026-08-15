import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

function App() {
  /* =======================================================
     THEME
  ======================================================= */

  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") return false;
    if (savedTheme === "dark") return true;

    return true;
  });

  /* =======================================================
     BACK TO TOP
  ======================================================= */

  const [showBackToTop, setShowBackToTop] = useState(false);

  /* =======================================================
     APPLY THEME
  ======================================================= */

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", isDark);

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  /* =======================================================
     SCROLL HANDLER
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     THEME TOGGLE
  ======================================================= */

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  /* =======================================================
     BACK TO TOP
  ======================================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-bg
        text-text
        transition-colors
        duration-300
      "
    >
      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="w-full">

        {/* HERO */}
        <Hero personalData={portfolio} />

        {/* ABOUT */}
        <About personalData={portfolio} />

        {/* SKILLS */}
        <Skills personalData={portfolio} />

        {/* EXPERIENCE */}
        <Experience personalData={portfolio} />

        {/* SERVICES */}
        <Services personalData={portfolio} />

        {/* PROJECTS */}
 

        {/* CONTACT */}
        <Contact personalData={portfolio} />

      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer personalData={portfolio} />

      {/* =================================================
          BACK TO TOP
      ================================================= */}

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.25,
            }}
            aria-label="Back to top"
            title="Back to top"
            className="
              fixed
              bottom-6
              right-6
              z-40
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-primary/40
              bg-navbar/95
              text-lg
              text-primary
              shadow-card
              backdrop-blur-md
              transition-colors
              duration-300
              hover:border-primary
              hover:bg-primary
              hover:text-bg
              focus:outline-none
              focus:ring-2
              focus:ring-primary/40
              sm:bottom-8
              sm:right-8
            "
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;