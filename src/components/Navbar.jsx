import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/Michael Resume 2026.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // =====================================
  // NAVIGATION LINKS
  // =====================================

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

  // =====================================
  // DETECT ACTIVE SECTION
  // =====================================

  useEffect(() => {
    const sections = navbarButtons
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
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
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // =====================================
  // NAVIGATION CLICK
  // =====================================

  const handleNavClick = (sectionId) => {
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

        <ul
          className="
            hidden
            items-center
            gap-2
            md:flex
            lg:gap-4
          "
        >
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

          {/* =====================================
              CV BUTTON
          ===================================== */}

          <li className="ml-2">
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
              Download my CV

              <span className="ml-2">
                ↓
              </span>
            </motion.a>
          </li>
        </ul>

        {/* =====================================
            MOBILE BUTTON
        ===================================== */}

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
            md:hidden
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
                          handleNavClick(button.id)
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

export default Navbar;