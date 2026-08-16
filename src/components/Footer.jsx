import React from "react";

const Footer = ({ personalData }) => {
  const { personalInfo = {}, about = {}, socials = [] } = personalData || {};

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const currentYear = new Date().getFullYear();

  const getSocialIcon = (icon) => {
    switch (icon?.toLowerCase()) {
      case "github":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.217.68-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.591 1.028 2.683 0 3.842-2.339 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481A10.001 10.001 0 0022 12C22 6.477 17.523 2 12 2Z" />
          </svg>
        );

      case "linkedin":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3C4.11 3 3.2 3.9 3.2 5.01c0 1.1.9 2.01 2.02 2.01 1.11 0 2.01-.9 2.01-2.01C7.23 3.9 6.33 3 5.22 3ZM20.5 13.41c0-3.47-1.86-5.09-4.34-5.09-2 0-2.89 1.1-3.39 1.87V8.5H9.33V20h3.44v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20h3.44l.3-6.59Z" />
          </svg>
        );

      case "facebook":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V3.96c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.25 1.54-4.25 4.37V10H7v3h2.9v8h3.6Z" />
          </svg>
        );

      default:
        return (
          <span className="text-sm font-semibold">
            {icon?.charAt(0)?.toUpperCase() || "•"}
          </span>
        );
    }
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-border
        bg-bg-dark
      "
    >
      {/* =====================================
          BACKGROUND GLOW
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[300px]
          w-[300px]
          rounded-full
          bg-glow-blue
          opacity-10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-glow-purple
          opacity-10
          blur-3xl
        "
      />

      {/* =====================================
          MAIN FOOTER
      ===================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-wide
          px-4
          py-14
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.4fr_0.8fr_1fr]
            lg:gap-16
          "
        >
          {/* =================================
              BRAND
          ================================= */}

          <div>
            <a
              href="#home"
              className="
                group
                inline-flex
                items-center
                gap-2
              "
              aria-label="Back to homepage"
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-primary/30
                  bg-primary/10
                  font-mono
                  text-sm
                  font-bold
                  text-primary
                  transition-all
                  duration-300
                  group-hover:border-primary
                  group-hover:shadow-primary
                "
              >
                {"</>"}
              </span>

              <div>
                <p
                  className="
                    text-base
                    font-bold
                    text-text
                  "
                >
                  {personalInfo.name || "Michael Dean Belen"}
                </p>

                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[2px]
                    text-primary
                  "
                >
                  IT • WEB • SUPPORT
                </p>
              </div>
            </a>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-7
                text-muted
              "
            >
              {about.passion ||
                "Building practical digital solutions through web development, IT support, and technical problem solving."}
            </p>

            {/* Availability */}

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-success/20
                bg-success/5
                px-3
                py-1.5
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-success
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  text-success
                "
              >
                {personalInfo.availability ||
                  "Available for opportunities"}
              </span>
            </div>

            {/* Location */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-sm
                text-muted
              "
            >
              <span className="text-primary">
                📍
              </span>

              <span>
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* =================================
              NAVIGATION
          ================================= */}

          <div>
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[2px]
                text-primary
              "
            >
              Navigation
            </p>

            <h3
              className="
                mt-2
                text-lg
                font-semibold
                text-text
              "
            >
              Explore
            </h3>

            <nav className="mt-5">
              <ul
                className="
                  grid
                  grid-cols-2
                  gap-x-6
                  gap-y-3
                "
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-muted
                        transition-all
                        duration-200
                        hover:translate-x-1
                        hover:text-primary
                      "
                    >
                      <span
                        className="
                          h-1
                          w-1
                          rounded-full
                          bg-border
                          transition-colors
                          group-hover:bg-primary
                        "
                      />

                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* =================================
              CONTACT
          ================================= */}

          <div>
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[2px]
                text-primary
              "
            >
              Let's Connect
            </p>

            <h3
              className="
                mt-2
                text-lg
                font-semibold
                text-text
              "
            >
              Get In Touch
            </h3>

            <div className="mt-5 space-y-3">
              {/* Email */}

              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    border
                    border-border
                    bg-card
                    p-3
                    transition-all
                    duration-300
                    hover:border-primary/50
                    hover:bg-primary/5
                  "
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-primary/10
                      text-primary
                    "
                  >
                    ✉
                  </span>

                  <span
                    className="
                      min-w-0
                      break-all
                      text-sm
                      text-muted
                      group-hover:text-primary
                    "
                  >
                    {personalInfo.email}
                  </span>
                </a>
              )}

              {/* Phone */}

              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    border
                    border-border
                    bg-card
                    p-3
                    transition-all
                    duration-300
                    hover:border-primary/50
                    hover:bg-primary/5
                  "
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-primary/10
                      text-primary
                    "
                  >
                    ☎
                  </span>

                  <span
                    className="
                      text-sm
                      text-muted
                      group-hover:text-primary
                    "
                  >
                    {personalInfo.phone}
                  </span>
                </a>
              )}
            </div>

            {/* Social */}

            {socials.length > 0 && (
              <div className="mt-6">
                <p
                  className="
                    mb-3
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-muted
                  "
                >
                  Follow Me
                </p>

                <div className="flex gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${social.name}`}
                      title={social.name}
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
                        text-muted
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-primary
                        hover:bg-primary/10
                        hover:text-primary
                        hover:shadow-primary
                      "
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* =====================================
            DIVIDER
        ===================================== */}

        <div className="my-10 h-px bg-border" />

        {/* =====================================
            BOTTOM
        ===================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            text-center
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >
          <div>
            <p className="text-xs text-muted">
              © {currentYear}{" "}
              <span className="font-medium text-text">
                {personalInfo.name}
              </span>
              . All rights reserved.
            </p>

            <p className="mt-1 text-[11px] text-muted-dark">
              Designed and developed with React & Tailwind CSS.
            </p>
          </div>

          {/* Back to top */}

          <a
            href="#home"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              text-xs
              font-medium
              text-muted
              transition-colors
              hover:text-primary
            "
          >
            Back to top

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-border
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:border-primary
                group-hover:bg-primary/10
              "
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;