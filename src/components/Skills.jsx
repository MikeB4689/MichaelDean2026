import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/* =========================================================
   3D SKILL CARD
========================================================= */

const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [8, -8]),
    {
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-8, 8]),
    {
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    }
  );

  const glowX = useTransform(
    mouseX,
    [0, 1],
    ["0%", "100%"]
  );

  const glowY = useTransform(
    mouseY,
    [0, 1],
    ["0%", "100%"]
  );

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const rating = Number(skill.rating) || 0;

  /* =========================================================
     ROUNDED PERCENTAGE
  ========================================================= */

  const percentage = Math.min(
    100,
    Math.max(0, Math.round((rating / 5) * 100))
  );

  return (
    <div
      className="
        min-w-full
        px-2
        sm:min-w-[50%]
        lg:min-w-[33.333333%]
        xl:min-w-[25%]
      "
      style={{
        perspective: "1200px",
      }}
    >
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          y: -8,
          scale: 1.015,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
        className="
          group
          relative
          flex
          h-full
          min-h-[310px]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-card
          p-6
          shadow-card
          transition-shadow
          duration-300
          hover:border-primary/60
          hover:shadow-primary
        "
      >
        {/* =================================================
            CURSOR GLOW
        ================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -translate-x-1/2
            -translate-y-1/2
            h-40
            w-40
            rounded-full
            bg-primary/15
            blur-3xl
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
          style={{
            left: glowX,
            top: glowY,
          }}
        />

        {/* =================================================
            TOP
        ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-between
          "
          style={{
            transform: "translateZ(25px)",
          }}
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-primary/20
              bg-primary/10
              text-xs
              font-bold
              text-primary
            "
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {skill.category && (
            <span
              className="
                rounded-full
                border
                border-border
                bg-bg
                px-3
                py-1
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-muted
              "
            >
              {skill.category}
            </span>
          )}
        </div>

        {/* =================================================
            SKILL NAME
        ================================================= */}

        <h3
          className="
            relative
            z-10
            mt-6
            text-xl
            font-bold
            text-text
            transition-colors
            duration-200
            group-hover:text-primary
          "
          style={{
            transform: "translateZ(35px)",
          }}
        >
          {skill.name}
        </h3>

        {/* =================================================
            RATING
        ================================================= */}

        <div
          className="
            relative
            z-10
            mt-3
            flex
            items-center
          "
          style={{
            transform: "translateZ(25px)",
          }}
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`
                  text-sm
                  ${
                    star <= rating
                      ? "text-accent"
                      : "text-border"
                  }
                `}
              >
                ★
              </span>
            ))}
          </div>

          <span
            className="
              ml-2
              text-xs
              font-medium
              text-muted
            "
          >
            {rating}/5
          </span>
        </div>

        {/* =================================================
            PROFICIENCY
        ================================================= */}

        <div
          className="relative z-10 mt-4"
          style={{
            transform: "translateZ(20px)",
          }}
        >
          <div
            className="
              mb-2
              flex
              items-center
              justify-between
              text-[10px]
              font-semibold
              uppercase
              tracking-wider
              text-muted
            "
          >
            <span>Proficiency</span>

            <span>{percentage}%</span>
          </div>

          <div
            className="
              h-1.5
              overflow-hidden
              rounded-full
              bg-border
            "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${percentage}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="
                h-full
                rounded-full
                bg-gradient-primary
              "
            />
          </div>
        </div>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            relative
            z-10
            mt-5
            flex-1
            text-sm
            leading-6
            text-muted
          "
          style={{
            transform: "translateZ(15px)",
          }}
        >
          {skill.description}
        </p>

        {/* =================================================
            BOTTOM ACCENT
        ================================================= */}

        <div
          className="
            relative
            z-10
            mt-6
            h-1
            w-10
            rounded-full
            bg-gradient-primary
            transition-all
            duration-500
            group-hover:w-full
          "
          style={{
            transform: "translateZ(25px)",
          }}
        />

        {/* =================================================
            3D HIGHLIGHT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            border
            border-white/5
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </motion.article>
    </div>
  );
};

/* =========================================================
   SKILLS
========================================================= */

const Skills = ({ personalData }) => {
  const skills = personalData?.skills || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  /* =======================================================
     RESPONSIVE CARD COUNT
  ======================================================= */

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();

    window.addEventListener(
      "resize",
      updateVisibleCards
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCards
      );
    };
  }, []);

  /* =======================================================
     MAX SLIDE
  ======================================================= */

  const maxIndex = useMemo(() => {
    return Math.max(
      0,
      skills.length - visibleCards
    );
  }, [skills.length, visibleCards]);

  /* =======================================================
     ACTIVE INDEX
     
     Derive the safe slider position during render instead
     of updating state inside an effect.
  ======================================================= */

  const activeIndex = Math.min(
    currentIndex,
    maxIndex
  );

  /* =======================================================
     NEXT
  ======================================================= */

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  /* =======================================================
     AUTO SLIDE
  ======================================================= */

  useEffect(() => {
    if (skills.length <= visibleCards) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [
    skills.length,
    visibleCards,
    maxIndex,
  ]);

  /* =======================================================
     EMPTY STATE
  ======================================================= */

  if (!skills.length) {
    return (
      <section
        id="skills"
        className="
          w-full
          px-4
          py-20
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            max-w-content
            rounded-2xl
            border
            border-border
            bg-card
            p-10
            text-center
          "
        >
          <div className="text-4xl text-primary">
            {"</>"}
          </div>

          <h2
            className="
              mt-4
              text-2xl
              font-bold
              text-text
            "
          >
            Skills Coming Soon
          </h2>

          <p className="mt-2 text-sm text-muted">
            Skills and technologies will be displayed
            here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="skills"
      className="
        relative
        w-full
        overflow-hidden
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-glow-blue
          opacity-20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-glow-purple
          opacity-20
          blur-3xl
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-content
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-12
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-primary
                "
              >
                My Expertise
              </p>
            </div>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                tracking-tight
                text-text
                sm:text-5xl
              "
            >
              Skills &{" "}
              <span className="text-primary">
                Technologies
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-muted
                sm:text-base
              "
            >
              A combination of development, IT support,
              technical troubleshooting, and
              problem-solving skills that I use to build
              practical technology solutions.
            </p>
          </div>

          {/* =================================================
              CONTROLS
          ================================================= */}

          {skills.length > visibleCards && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous skills"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-border
                  bg-card
                  text-lg
                  text-primary
                  shadow-card
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-primary
                  hover:bg-primary/10
                "
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next skills"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-border
                  bg-card
                  text-lg
                  text-primary
                  shadow-card
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-primary
                  hover:bg-primary/10
                "
              >
                →
              </button>
            </div>
          )}
        </motion.div>

        {/* =====================================================
            SLIDER
        ===================================================== */}

        <div className="overflow-visible">
          <motion.div
            className="flex"
            animate={{
              x: `-${
                activeIndex *
                (100 / visibleCards)
              }%`,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {skills.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                skill={skill}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            INDICATORS
        ===================================================== */}

        {skills.length > visibleCards && (
          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {Array.from({
              length: maxIndex + 1,
            }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setCurrentIndex(index)
                }
                aria-label={`Go to skills slide ${
                  index + 1
                }`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/50"
                  }
                `}
              />
            ))}
          </div>
        )}

        {/* =====================================================
            EXPERTISE AREAS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-12
            grid
            gap-4
            md:grid-cols-3
          "
        >
          {/* DEVELOPMENT */}

          <div
            className="
              group
              rounded-2xl
              border
              border-border
              bg-card
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/50
              hover:shadow-primary
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                bg-primary/10
                font-mono
                text-sm
                font-bold
                text-primary
              "
            >
              {"</>"}
            </div>

            <h3
              className="
                mt-5
                font-semibold
                text-text
              "
            >
              Development
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-muted
              "
            >
              Web and mobile applications using
              modern JavaScript technologies.
            </p>
          </div>

          {/* BACKEND */}

          <div
            className="
              group
              rounded-2xl
              border
              border-border
              bg-card
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/50
              hover:shadow-primary
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                bg-primary/10
                text-sm
                font-bold
                text-primary
              "
            >
              DB
            </div>

            <h3
              className="
                mt-5
                font-semibold
                text-text
              "
            >
              Backend & Data
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-muted
              "
            >
              APIs, databases, Firebase, SQLite,
              Python, and application data management.
            </p>
          </div>

          {/* IT SUPPORT */}

          <div
            className="
              group
              rounded-2xl
              border
              border-border
              bg-card
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/50
              hover:shadow-primary
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                bg-primary/10
                text-sm
                font-bold
                text-primary
              "
            >
              IT
            </div>

            <h3
              className="
                mt-5
                font-semibold
                text-text
              "
            >
              IT Support
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-muted
              "
            >
              Hardware, software, networking,
              printers, workstations, and
              troubleshooting.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-8
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-primary/30
            bg-primary/5
            p-6
            sm:p-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <p
              className="
                text-lg
                font-semibold
                text-text
              "
            >
              Need someone with both technical and
              problem-solving skills?
            </p>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-muted
              "
            >
              I combine development, IT support,
              technical troubleshooting, and customer
              service experience to solve real-world
              technology problems.
            </p>
          </div>

          <a
            href="#contact"
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-gradient-primary
              px-6
              py-3
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
            Let's Work Together
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;