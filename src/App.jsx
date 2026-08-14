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
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  return (
    <div className="min-h-screen">

      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="mx-auto w-full">

        {/* HERO */}

        <AnimatedSection id="home">
          <Hero personalData={portfolio} />
        </AnimatedSection>


        {/* ABOUT */}

        <AnimatedSection id="about">
          <About personalData={portfolio} />
        </AnimatedSection>


        {/* SKILLS */}

        <AnimatedSection id="skills">
          <Skills personalData={portfolio} />
        </AnimatedSection>


        {/* EXPERIENCE */}

        <AnimatedSection id="experience">
          <Experience personalData={portfolio} />
        </AnimatedSection>


        {/* SERVICES */}

        <AnimatedSection id="services">
          <Services personalData={portfolio} />
        </AnimatedSection>


        {/* CONTACT */}

        <AnimatedSection id="contact">
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