import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/Michael Resume 2026.pdf";

const NAVBAR_OFFSET = 100;

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
  // ACTIVE SECTION
  // =====================================

  useEffect(() => {
    const handleScroll = () => {
      const sections = navbarButtons
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) {
        setActiveSection("home");
        return;
      }

      const scrollPosition =
        window.scrollY + NAVBAR_OFFSET;

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // =====================================
  // CLOSE MENU WHEN RESIZING
  // =====================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =====================================
  // ESCAPE KEY
  // =====================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // =====================================
  // PREVENT BACKGROUND SCROLL
  // =====================================

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // =====================================
  // NAVIGATION
  // =====================================

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);

    // Close mobile menu first
    setIsOpen(false);

    if (!section) {
      console.warn(
        `Section with id="${sectionId}" was not found.`
      );
      return;
    }

    // Give React/browser time to close menu
    requestAnimationFrame(() => {
      const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        NAVBAR_OFFSET;

      window.scrollTo({
        top: Math.max(0, sectionPosition),
        behavior: "smooth",
      });
    });
  };

  return (
    <>
      {/* =====================================
          NAVBAR
      ===================================== */}

      <motion.nav
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          sticky
          top-3
          z-50
          mx-auto
          mt-3
          w-[calc(100%-1.5rem)]
          max-w-wide
          rounded-2xl
          border
          border-border
          bg-navbar/90
          shadow-card
          backdrop-blur-xl
        "
      >
        {/* =====================================
            NAVBAR CONTAINER
        ===================================== */}

        <div
          className="
            flex
            min-h-[68px]
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
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              flex
              items-center
              gap-1.5
              whitespace-nowrap
              rounded-lg
              px-1
              py-2
              focus:outline-none
              focus:ring-2
              focus:ring-primary/40
            "
            aria-label="Go to homepage"
          >
            <span
              className="
                text-lg
                font-extrabold
                tracking-tight
                text-primary
                sm:text-xl
              "
            >
              Developer
            </span>

            <span className="text-xs font-medium text-text">
              IT
            </span>

            <span className="text-xs font-medium text-text">
              WEB
            </span>

            <span className="text-xs font-medium text-accent">
              SUPPORT
            </span>
          </motion.button>

          {/* =====================================
              DESKTOP NAV
          ===================================== */}

          <div className="hidden items-center gap-3 md:flex">
            <ul className="flex items-center gap-1">
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
                        y: -1,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      aria-current={
                        isActive ? "page" : undefined
                      }
                      className={`
                        relative
                        rounded-lg
                        px-3
                        py-2
                        text-sm
                        font-medium
                        transition-all
                        duration-200
                        focus:outline-none
                        focus:ring-2
                        focus:ring-primary/30

                        ${
                          isActive
                            ? `
                              bg-primary/10
                              text-primary
                            `
                            : `
                              text-nav
                              hover:bg-primary/5
                              hover:text-primary
                            `
                        }
                      `}
                    >
                      {button.label}

                      {isActive && (
                        <motion.span
                          layoutId="activeNavbarIndicator"
                          className="
                            absolute
                            bottom-1
                            left-1/2
                            h-0.5
                            w-5
                            -translate-x-1/2
                            rounded-full
                            bg-primary
                          "
                          transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.button>
                  </li>
                );
              })}
            </ul>

            {/* Theme */}

            <ThemeToggle
              isDark={isDark}
              onToggle={toggleTheme}
            />

            {/* CV */}

            <motion.a
              href={resume}
              download="Michael-Dean-L-Belen-CV.pdf"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-gradient-primary
                px-4
                py-2
                text-sm
                font-semibold
                text-text
                shadow-primary
                transition-all
                duration-300
                hover:shadow-primary-lg
              "
            >
              CV

              <span className="ml-1.5">
                ↓
              </span>
            </motion.a>
          </div>

          {/* =====================================
              MOBILE CONTROLS
          ===================================== */}

          <div
            className="
              flex
              items-center
              gap-2
              md:hidden
            "
          >
            <ThemeToggle
              isDark={isDark}
              onToggle={toggleTheme}
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
                rounded-lg
                border
                border-border
                bg-card
                text-primary
                transition-all
                duration-200
                hover:border-primary
                hover:bg-primary/10
                focus:outline-none
                focus:ring-2
                focus:ring-primary/40
              "
              aria-label={
                isOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
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
                    className="h-5 w-5"
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
                    className="h-5 w-5"
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
              id="mobile-navigation"
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
                duration: 0.25,
                ease: "easeInOut",
              }}
              className="
                overflow-hidden
                border-t
                border-border
                md:hidden
              "
            >
              <div className="p-3">
                <ul className="space-y-1">
                  {navbarButtons.map(
                    (button, index) => {
                      const isActive =
                        activeSection === button.id;

                      return (
                        <motion.li
                          key={button.id}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.035,
                            duration: 0.2,
                          }}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              handleNavClick(
                                button.id
                              )
                            }
                            aria-current={
                              isActive
                                ? "page"
                                : undefined
                            }
                            className={`
                              flex
                              w-full
                              items-center
                              justify-between
                              rounded-xl
                              border
                              px-4
                              py-3
                              text-left
                              text-sm
                              font-medium
                              transition-all
                              duration-200
                              focus:outline-none
                              focus:ring-2
                              focus:ring-primary/30

                              ${
                                isActive
                                  ? `
                                    border-primary/40
                                    bg-primary/10
                                    text-primary
                                  `
                                  : `
                                    border-transparent
                                    text-nav
                                    hover:border-border
                                    hover:bg-card
                                    hover:text-primary
                                  `
                              }
                            `}
                          >
                            <span>
                              {button.label}
                            </span>

                            <span
                              className={`
                                text-xs
                                transition-transform
                                duration-200
                                ${
                                  isActive
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-1 opacity-0"
                                }
                              `}
                            >
                              →
                            </span>
                          </button>
                        </motion.li>
                      );
                    }
                  )}
                </ul>

                {/* =================================
                    MOBILE CV
                ================================= */}

                <motion.a
                  href={resume}
                  download="Michael-Dean-L-Belen-CV.pdf"
                  onClick={() =>
                    setIsOpen(false)
                  }
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
                      navbarButtons.length *
                      0.035,
                  }}
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-primary
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-text
                    shadow-primary
                    transition-all
                    duration-300
                    hover:shadow-primary-lg
                  "
                >
                  Download My CV

                  <span className="ml-2">
                    ↓
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* =====================================
          MOBILE BACKDROP
      ===================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-bg/40
              backdrop-blur-[2px]
              md:hidden
            "
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
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
        scale: 0.9,
      }}
      className="
        relative
        flex
        h-10
        w-10
        shrink-0
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