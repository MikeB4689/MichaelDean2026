 
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/Michael Resume 2026.pdf";

const navbarButtons = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "skills",
    label: "Skills",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "services",
    label: "Services",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // =====================================
  // DETECT ACTIVE SECTION
  // =====================================

  useEffect(() => {
    const sections = navbarButtons
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // =====================================
  // NAVIGATION
  // =====================================

  const handleNavClick = (sectionId) => {
    setIsOpen(false);

    const section =
      document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // =====================================
  // THEME TOGGLE
  // =====================================

  const handleThemeToggle = () => {
    toggleTheme();
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        sticky
        top-4
        z-50
        mx-auto
        mt-4
        w-[calc(100%-2rem)]
        max-w-wide
        rounded-xl
        border
        border-border
        bg-navbar/95
        shadow-card
        backdrop-blur-md
        transition-colors
        duration-300
      "
    >
      {/* =====================================
          NAVBAR CONTAINER
      ===================================== */}

      <div
        className="
          flex
          min-h-[70px]
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================
            LOGO
        ===================================== */}

        <motion.button
          type="button"
          onClick={() => handleNavClick("home")}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            flex
            items-center
            gap-2
            whitespace-nowrap
          "
          aria-label="Go to home"
        >
          <span
            className="
              text-lg
              font-bold
              text-primary
              sm:text-xl
            "
          >
            Developer
          </span>

          <span className="text-xs text-text sm:text-sm">
            IT
          </span>

          <span className="text-xs text-text sm:text-sm">
            WEB
          </span>

          <span className="text-xs text-accent sm:text-sm">
            SUPPORT
          </span>
        </motion.button>

        {/* =====================================
            DESKTOP NAVIGATION
        ===================================== */}

        <div className="hidden items-center gap-3 md:flex lg:gap-4">
          <ul className="flex items-center gap-2 lg:gap-4">
            {navbarButtons.map((button) => {
              const isActive =
                activeSection === button.id;

              return (
                <li key={button.id}>
                  <motion.button
                    type="button"
                    onClick={() =>
                      handleNavClick(button.id)
                    }
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className={`
                      relative
                      inline-flex
                      items-center
                      rounded-md
                      border
                      px-3
                      py-2
                      text-sm
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? `
                            border-primary
                            bg-primary/10
                            text-primary
                          `
                          : `
                            border-transparent
                            text-nav
                            hover:border-primary
                            hover:text-primary
                          `
                      }
                    `}
                  >
                    {button.label}

                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="
                          absolute
                          -bottom-[1px]
                          left-1/2
                          h-[2px]
                          w-5
                          -translate-x-1/2
                          rounded-full
                          bg-primary
                        "
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                </li>
              );
            })}
          </ul>

          {/* =====================================
              THEME SWITCH
          ===================================== */}

          <ThemeToggle
            isDark={isDark}
            onToggle={handleThemeToggle}
          />

          {/* =====================================
              CV BUTTON
          ===================================== */}

          <motion.a
            href={resume}
            download="Michael-Dean-Belen-CV.pdf"
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              inline-flex
              items-center
              rounded-md
              border
              border-primary
              px-4
              py-2
              text-sm
              font-medium
              text-primary
              transition-all
              duration-200
              hover:bg-primary
              hover:text-bg
              hover:shadow-primary
            "
          >
            Download CV

            <span className="ml-2">
              ↓
            </span>
          </motion.a>
        </div>

        {/* =====================================
            MOBILE CONTROLS
        ===================================== */}

        <div className="flex items-center gap-2 md:hidden">

          <ThemeToggle
            isDark={isDark}
            onToggle={handleThemeToggle}
          />

          <motion.button
            type="button"
            onClick={() =>
              setIsOpen((prev) => !prev)
            }
            whileTap={{
              scale: 0.9,
            }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              border
              border-border
              text-primary
              transition-all
              duration-200
              hover:border-primary
              hover:bg-primary/10
            "
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.svg
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>

        </div>
      </div>

      {/* =====================================
          MOBILE MENU
      ===================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden md:hidden"
          >
            <ul
              className="
                border-t
                border-border
                px-4
                py-4
              "
            >
              {navbarButtons.map(
                (button, index) => {
                  const isActive =
                    activeSection === button.id;

                  return (
                    <motion.li
                      key={button.id}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          handleNavClick(
                            button.id
                          )
                        }
                        className={`
                          block
                          w-full
                          rounded-md
                          border
                          px-4
                          py-3
                          text-left
                          text-sm
                          transition-all
                          duration-200

                          ${
                            isActive
                              ? `
                                border-primary
                                bg-primary/10
                                text-primary
                              `
                              : `
                                border-transparent
                                text-nav
                                hover:bg-card
                                hover:text-primary
                              `
                          }
                        `}
                      >
                        {button.label}
                      </button>
                    </motion.li>
                  );
                }
              )}

              {/* =================================
                  MOBILE CV
              ================================= */}

              <motion.li
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    navbarButtons.length * 0.05,
                }}
                className="mt-3"
              >
                <motion.a
                  href={resume}
                  download="Michael-Dean-Belen-CV.pdf"
                  onClick={() =>
                    setIsOpen(false)
                  }
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-primary
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-primary
                    transition-all
                    duration-200
                    hover:bg-primary
                    hover:text-bg
                    hover:shadow-primary
                  "
                >
                  Download my CV

                  <span className="ml-2">
                    ↓
                  </span>
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};


// =====================================
// THEME TOGGLE
// =====================================

const ThemeToggle = ({
  isDark,
  onToggle,
}) => {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileTap={{
        scale: 0.92,
      }}
      className="
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-border
        bg-card
        text-primary
        transition-all
        duration-300
        hover:border-primary
        hover:bg-primary/10
        focus:outline-none
        focus:ring-2
        focus:ring-primary/40
      "
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.svg
            key="sun"
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.5,
            }}
            transition={{
              duration: 0.25,
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <circle
              cx="12"
              cy="12"
              r="4"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="
                M12 2v2
                M12 20v2
                M4.93 4.93l1.42 1.42
                M17.65 17.65l1.42 1.42
                M2 12h2
                M20 12h2
                M4.93 19.07l1.42-1.42
                M17.65 6.35l1.42-1.42
              "
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            initial={{
              opacity: 0,
              rotate: 90,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: -90,
              scale: 0.5,
            }}
            transition={{
              duration: 0.25,
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="
                M21 12.79A9 9 0 1 1
                11.21 3
                A7 7 0 0 0
                21 12.79Z
              "
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default Navbar;
 