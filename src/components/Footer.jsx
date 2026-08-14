import React from "react";

const Footer = ({ personalData }) => {
  const navLinks = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "services",
    "contact",
  ];

  const currentYear = new Date().getFullYear();

  const getSocialIcon = (icon) => {
    switch (icon) {
      case "github":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.97c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.92-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.28 10.28 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
          </svg>
        );

      case "linkedin":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3C4.11 3 3.2 3.9 3.2 5.01c0 1.1.9 2.01 2.02 2.01 1.11 0 2.01-.9 2.01-2.01C7.23 3.9 6.33 3 5.22 3ZM20.5 13.41c0-3.47-1.86-5.09-4.34-5.09-2 0-2.89 1.1-3.39 1.87V8.5H9.33V20h3.44v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20h3.44l.3-6.59Z" />
          </svg>
        );

      case "facebook":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V3.96c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.25 1.54-4.25 4.37V10H7v3h2.9v8h3.6Z" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-border bg-bg-dark">

      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div
        className="
          mx-auto
          w-full
          max-w-wide
          px-4
          py-14
          sm:px-6
          lg:px-8
          lg:py-16
        "
      >

        <div
          className="
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {/* =========================
              BRAND
          ========================= */}

          <div>

            <a
              href="#home"
              className="inline-flex items-center gap-2"
            >
              <span className="text-xl font-bold text-primary">
                Developer
              </span>

              <span className="text-sm text-text">
                IT
              </span>

              <span className="text-sm text-text">
                WEB
              </span>

              <span className="text-sm text-accent">
                SUPPORT
              </span>
            </a>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-7
                text-muted
              "
            >
              {personalData.about.passion}
            </p>

            {/* Location */}

            <div className="mt-5 flex items-center gap-2 text-sm text-muted">
              <span className="text-primary">📍</span>

              <span>
                {personalData.personalInfo.location}
              </span>
            </div>

          </div>


          {/* =========================
              QUICK LINKS
          ========================= */}

          <div>

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[2px]
                text-text
              "
            >
              Quick Links
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-y-3">

              {navLinks.map((link) => (

                <li key={link}>

                  <a
                    href={`#${link}`}
                    className="
                      text-sm
                      capitalize
                      text-muted
                      transition-colors
                      duration-200
                      hover:text-primary
                    "
                  >
                    {link}
                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* =========================
              CONTACT
          ========================= */}

          <div>

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[2px]
                text-text
              "
            >
              Get In Touch
            </h3>

            <div className="mt-5 space-y-3">

              {/* Email */}

              <a
                href={`mailto:${personalData.personalInfo.email}`}
                className="
                  block
                  break-all
                  text-sm
                  text-muted
                  transition-colors
                  hover:text-primary
                "
              >
                ✉ {personalData.personalInfo.email}
              </a>


              {/* Phone */}

              <a
                href={`tel:${personalData.personalInfo.phone}`}
                className="
                  block
                  text-sm
                  text-muted
                  transition-colors
                  hover:text-primary
                "
              >
                ☎ {personalData.personalInfo.phone}
              </a>

            </div>


            {/* Social Media */}

            <div className="mt-6">

              <p className="mb-3 text-xs uppercase tracking-wider text-muted">
                Follow Me
              </p>

              <div className="flex gap-3">

                {personalData.socials?.map((social) => (

                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
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
                    "
                  >
                    {getSocialIcon(social.icon)}
                  </a>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            DIVIDER
        ========================= */}

        <div className="my-10 h-px bg-border" />


        {/* =========================
            BOTTOM
        ========================= */}

        <div
          className="
            flex
            flex-col
            gap-3
            text-center
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >

          <p className="text-xs text-muted">
            © {currentYear} {personalData.personalInfo.name}.
            All rights reserved.
          </p>

          <p className="text-xs text-muted">
            Built with{" "}
            <span className="font-medium text-primary">
              React
            </span>{" "}
            +{" "}
            <span className="font-medium text-primary">
              Tailwind CSS
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;