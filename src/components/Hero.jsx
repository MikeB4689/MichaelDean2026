import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import resume from "../assets/Michael Resume 2026.pdf";

const Hero = ({ personalData }) => {
  const {
    personalInfo = {},
    about = {},
    highlights = [],
    technologies = [],
  } = personalData || {};

  const titles = personalInfo.title || [
    "Web Developer",
    "IT Support Specialist",
  ];

  const primaryTitle = titles[0] || "Web Developer";
  const secondaryTitle =
    titles[1] || "IT Support Specialist";

  const coreTechnologies =
    technologies.length > 0
      ? technologies.slice(0, 5)
      : [
          "React",
          "JavaScript",
          "React Native",
          "IT Support",
          "Firebase",
        ];

  /* =====================================================
     MOUSE POSITION
  ===================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* =====================================================
     SMOOTH MOUSE MOVEMENT
  ===================================================== */

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  /* =====================================================
     PARALLAX LAYERS
  ===================================================== */

  const backgroundX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-25, 25]
  );

  const backgroundY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-20, 20]
  );

  const profileX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-12, 12]
  );

  const profileY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-12, 12]
  );

  const decorationX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-20, 20]
  );

  const decorationY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-20, 20]
  );

  /* =====================================================
     MOUSE HANDLER
  ===================================================== */

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    const x =
      clientX / window.innerWidth - 0.5;

    const y =
      clientY / window.innerHeight - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* =====================================================
     SCROLL PARALLAX
  ===================================================== */

  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      const progress =
        (viewportHeight - rect.top) /
        (viewportHeight + rect.height);

      hero.style.setProperty(
        "--hero-progress",
        progress
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        w-full
        overflow-hidden
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-28
        xl:py-32
      "
    >
      {/* =================================================
          BACKGROUND PARALLAX
      ================================================= */}

      <motion.div
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
        className="
          pointer-events-none
          absolute
          -left-48
          top-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-glow-blue
          opacity-40
          blur-3xl
        "
      />

      <motion.div
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
        className="
          pointer-events-none
          absolute
          -right-48
          top-32
          h-[450px]
          w-[450px]
          rounded-full
          bg-glow-purple
          opacity-30
          blur-3xl
        "
      />

      {/* =================================================
          MOUSE FOLLOW GLOW
      ================================================= */}

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/5
          blur-[90px]
        "
      />

      {/* =================================================
          BOTTOM GLOW
      ================================================= */}

      <motion.div
        style={{
          x: backgroundX,
        }}
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[250px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-primary/5
          blur-3xl
        "
      />

      {/* =================================================
          DECORATIVE GRID
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-hero
          items-center
          gap-14
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-16
          xl:gap-24
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="order-2 lg:order-1">

          {/* AVAILABILITY */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mb-6
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-success/30
              bg-success/5
              px-3.5
              py-2
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-success
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-success
                "
              />
            </span>

            <span
              className="
                text-xs
                font-medium
                text-success
                sm:text-sm
              "
            >
              {personalInfo.availability ||
                "Available for work"}
            </span>
          </motion.div>

          {/* GREETING */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[2.5px]
              text-primary
              sm:text-base
            "
          >
            Hello, I'm
          </motion.p>

          {/* NAME */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              mt-3
              max-w-4xl
              text-4xl
              font-bold
              leading-[1.02]
              tracking-tight
              text-text
              sm:text-5xl
              md:text-6xl
              lg:text-hero
            "
          >
            {personalInfo.name}
          </motion.h1>

          {/* PROFESSIONAL TITLE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-1
              text-xl
              font-semibold
              leading-tight
              sm:text-2xl
              md:text-3xl
            "
          >
            <span
              className="
                bg-gradient-primary
                bg-clip-text
                text-transparent
              "
            >
              {primaryTitle}
            </span>

            <span className="text-accent">
              &
            </span>

            <span className="text-text">
              {secondaryTitle}
            </span>
          </motion.div>

          {/* ADDITIONAL TITLES */}

          {titles.length > 2 && (
            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-2
                text-sm
                text-muted
                sm:text-base
              "
            >
              {titles.slice(2).map(
                (title, index, array) => (
                  <React.Fragment key={title}>
                    <span>{title}</span>

                    {index < array.length - 1 && (
                      <span className="text-border">
                        •
                      </span>
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          )}

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-muted
              sm:text-[17px]
              sm:leading-8
            "
          >
            {about.description}
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:flex-wrap
            "
          >
            <a
              href="#projects"
              className="
                group
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-gradient-primary
                px-6
                py-3.5
                text-sm
                font-semibold
                text-text
                shadow-primary
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-primary-lg
              "
            >
              View My Projects

              <span
                className="
                  ml-2
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            <a
              href={resume}
              download="Michael-Dean-L-Belen-CV.pdf"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-primary
                px-6
                py-3.5
                text-sm
                font-semibold
                text-primary
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-primary
                hover:text-bg
              "
            >
              Download CV

              <span className="ml-2">
                ↓
              </span>
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-border
                px-6
                py-3.5
                text-sm
                font-semibold
                text-text
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary
                hover:bg-primary/10
                hover:text-primary
              "
            >
              Contact Me
            </a>
          </motion.div>

          {/* CORE TECHNOLOGIES */}

          <div className="mt-9">
            <div
              className="
                mb-3
                flex
                items-center
                gap-3
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[1.5px]
                  text-muted
                "
              >
                Core Technologies
              </p>

              <span className="h-px w-8 bg-border" />
            </div>

            <div className="flex flex-wrap gap-2">
              {coreTechnologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-border
                      bg-card
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-muted
                      transition-all
                      duration-200
                      hover:-translate-y-1
                      hover:border-primary/60
                      hover:bg-primary/5
                      hover:text-primary
                    "
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>

          {/* QUICK INFO */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
              border-t
              border-border
              pt-6
              text-xs
              text-muted-dark
              sm:text-sm
            "
          >
            <span className="flex items-center gap-2">
              <span className="text-primary">
                📍
              </span>

              {personalInfo.location}
            </span>

            <span className="hidden h-4 w-px bg-border sm:block" />

            <span className="flex items-center gap-2">
              <span className="text-primary">
                ✦
              </span>

              Open to remote opportunities
            </span>
          </div>
        </div>

        {/* =================================================
            RIGHT PROFILE
        ================================================= */}

        <motion.div
          style={{
            x: profileX,
            y: profileY,
          }}
          className="
            order-1
            flex
            justify-center
            lg:order-2
            lg:justify-end
          "
        >
          <div className="relative">

            {/* MAIN GLOW */}

            <motion.div
              style={{
                x: backgroundX,
                y: backgroundY,
              }}
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -inset-10
                rounded-[50px]
                bg-primary
                opacity-10
                blur-3xl
              "
            />

            {/* PURPLE GLOW */}

            <motion.div
              style={{
                x: decorationX,
                y: decorationY,
              }}
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-12
                -right-12
                h-48
                w-48
                rounded-full
                bg-purple
                opacity-20
                blur-3xl
              "
            />

            {/* DECORATIVE STAR */}

            <motion.div
              style={{
                x: decorationX,
                y: decorationY,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-5
                -top-5
                z-30
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-primary/60
                bg-bg
                text-xl
                text-primary
                shadow-primary
              "
            >
              ✦
            </motion.div>

            {/* IMAGE FRAME */}

            <div
              className="
                relative
                h-[390px]
                w-[300px]
                rounded-[32px]
                bg-gradient-primary
                p-[3px]
                shadow-primary-lg
                sm:h-[450px]
                sm:w-[350px]
                md:h-[500px]
                md:w-[380px]
              "
            >
              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-[29px]
                  bg-card
                "
              >
                <img
                  src={personalInfo.profileImage}
                  alt={`Professional portrait of ${personalInfo.name}`}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-bg
                    via-transparent
                    to-primary/10
                    opacity-80
                  "
                />

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    rounded-xl
                    border
                    border-border-light
                    bg-navbar/90
                    p-4
                    backdrop-blur-md
                  "
                >
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[2px]
                      text-primary
                    "
                  >
                    WEB • IT • SUPPORT
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-text
                    "
                  >
                    Building practical digital solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* DEVELOPER BADGE */}

            <motion.div
              style={{
                x: decorationX,
              }}
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-5
                -left-5
                z-30
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-accent
                bg-bg
                font-mono
                text-sm
                font-bold
                text-accent
                shadow-accent
              "
            >
              {"</>"}
            </motion.div>

            {/* EXPERIENCE BADGE */}

            {highlights.length > 0 && (
              <motion.div
                style={{
                  x: decorationX,
                }}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.5,
                }}
                className="
                  absolute
                  -left-8
                  top-1/3
                  z-30
                  hidden
                  rounded-xl
                  border
                  border-border
                  bg-navbar/95
                  px-4
                  py-3
                  shadow-card
                  backdrop-blur-md
                  sm:block
                "
              >
                <p
                  className="
                    text-lg
                    font-bold
                    text-primary
                  "
                >
                  {highlights[0]?.value || "2+"}
                </p>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wide
                    text-muted
                  "
                >
                  Years Development
                </p>
              </motion.div>
            )}

            {/* STATUS BADGE */}

            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-6
                right-3
                z-30
                flex
                items-center
                gap-2
                rounded-full
                border
                border-border
                bg-navbar
                px-4
                py-2
                shadow-card
              "
            >
              <span
                className="
                  h-2.5
                  w-2.5
                  animate-pulse
                  rounded-full
                  bg-success
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  text-nav
                "
              >
                {personalInfo.availability ||
                  "Available for work"}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;