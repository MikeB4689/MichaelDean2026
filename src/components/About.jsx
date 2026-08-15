import React from "react";
import { motion } from "framer-motion";

const About = ({ personalData }) => {
  const {
    personalInfo,
    about,
    highlights = [],
    services = [],
    technologies = [],
  } = personalData;

  return (
    <section
      id="about"
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
      "
    >
      {/* =====================================
          BACKGROUND GLOW
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-glow-purple
          blur-3xl
          opacity-40
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-[300px]
          w-[300px]
          rounded-full
          bg-glow-blue
          blur-3xl
          opacity-30
        "
      />


      {/* =====================================
          MAIN CONTAINER
      ===================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-content
        "
      >

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <motion.div
          className="mb-12 max-w-3xl"
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
            ease: "easeOut",
          }}
        >

          <div className="flex items-center gap-3">

            <span className="h-px w-10 bg-primary" />

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[3px]
                text-primary
                sm:text-sm
              "
            >
              Get to know me
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
              lg:text-6xl
            "
          >
            About
            <span className="text-primary"> Me</span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-muted
              sm:text-[17px]
            "
          >
            A combination of software development, IT support,
            and customer-focused problem solving.
          </p>

        </motion.div>


        {/* =====================================
            MAIN CONTENT
        ===================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1.35fr_0.65fr]
            lg:gap-10
          "
        >

          {/* =====================================
              ABOUT CARD
          ===================================== */}

          <motion.div
            className="
              rounded-2xl
              border
              border-border
              bg-card
              p-6
              shadow-card
              sm:p-8
              lg:p-10
            "
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >

            {/* =================================
                CARD HEADER
            ================================= */}

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-primary/20
                  bg-primary/10
                  font-mono
                  text-lg
                  font-bold
                  text-primary
                "
              >
                {"</>"}
              </div>

              <div>

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-primary
                  "
                >
                  Who I Am
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-semibold
                    text-text
                  "
                >
                  {personalInfo.name}
                </h3>

              </div>

            </div>


            {/* =================================
                DESCRIPTION
            ================================= */}

            <div className="mt-8 space-y-5">

              <p
                className="
                  text-base
                  leading-8
                  text-muted
                  sm:text-[17px]
                "
              >
                {about.description}
              </p>

              {about.passion && (
                <p
                  className="
                    text-base
                    leading-8
                    text-muted
                    sm:text-[17px]
                  "
                >
                  {about.passion}
                </p>
              )}

            </div>


            {/* =================================
                LOCATION / AVAILABILITY
            ================================= */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                border-t
                border-border
                pt-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div
                className="
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

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-success
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

                <span>
                  {personalInfo.availability ||
                    "Available for work"}
                </span>

              </div>

            </div>

          </motion.div>


          {/* =====================================
              HIGHLIGHTS
          ===================================== */}

          <motion.div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-1
            "
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut",
            }}
          >

            {highlights.map((item, index) => (

              <motion.div
                key={`${item.title}-${index}`}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-border
                  bg-card
                  p-5
                  transition-all
                  duration-300
                  hover:border-primary/60
                  hover:shadow-primary
                  sm:p-6
                "
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <span
                      className="
                        block
                        text-3xl
                        font-bold
                        leading-none
                        text-primary
                      "
                    >
                      {item.value}
                    </span>

                    <h4
                      className="
                        mt-3
                        text-sm
                        font-semibold
                        text-text
                      "
                    >
                      {item.title}
                    </h4>

                  </div>

                  <span
                    className="
                      text-xs
                      font-mono
                      text-muted-dark
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-muted
                  "
                >
                  {item.description}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>


        {/* =====================================
            WHAT I DO
        ===================================== */}

        {services.length > 0 && (

          <motion.div
            className="
              mt-8
              rounded-2xl
              border
              border-border
              bg-card
              p-6
              sm:p-8
            "
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div
              className="
                flex
                flex-col
                gap-6
                lg:flex-row
                lg:items-start
                lg:justify-between
              "
            >

              {/* Header */}

              <div className="max-w-sm">

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-primary" />

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[2px]
                      text-primary
                    "
                  >
                    What I Do
                  </p>

                </div>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-bold
                    text-text
                  "
                >
                  How I Can Help
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-muted
                  "
                >
                  Combining development and technical support
                  experience to create practical solutions.
                </p>

              </div>


              {/* Services */}

              <div
                className="
                  grid
                  w-full
                  gap-3
                  sm:grid-cols-2
                  lg:max-w-2xl
                "
              >

                {services.map((service, index) => (

                  <div
                    key={service.title}
                    className="
                      group
                      rounded-xl
                      border
                      border-border
                      bg-bg-secondary
                      p-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-primary/60
                      hover:bg-primary/5
                    "
                  >

                    <div className="flex items-start gap-3">

                      <span
                        className="
                          font-mono
                          text-xs
                          font-semibold
                          text-primary
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>

                        <h4
                          className="
                            text-sm
                            font-semibold
                            text-text
                            transition-colors
                            group-hover:text-primary
                          "
                        >
                          {service.title}
                        </h4>

                        <p
                          className="
                            mt-1.5
                            text-xs
                            leading-5
                            text-muted
                          "
                        >
                          {service.description}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>

        )}


        {/* =====================================
            TECHNOLOGIES
        ===================================== */}

        {technologies.length > 0 && (

          <motion.div
            className="
              mt-8
              rounded-2xl
              border
              border-border
              bg-card
              p-6
              sm:p-8
            "
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div
              className="
                flex
                flex-col
                gap-5
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

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
                  Tech Stack
                </p>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-semibold
                    text-text
                  "
                >
                  Technologies I Work With
                </h3>

              </div>


              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  lg:max-w-3xl
                  lg:justify-end
                "
              >

                {technologies.slice(0, 12).map((technology) => (

                  <span
                    key={technology}
                    className="
                      rounded-lg
                      border
                      border-border
                      bg-bg-secondary
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-muted
                      transition-all
                      duration-200
                      hover:border-primary/50
                      hover:text-primary
                    "
                  >
                    {technology}
                  </span>

                ))}

              </div>

            </div>

          </motion.div>

        )}


        {/* =====================================
            BOTTOM CTA
        ===================================== */}

        <motion.div
          className="
            mt-8
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-primary/20
            bg-primary/5
            p-6
            sm:p-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <div>

            <p
              className="
                text-lg
                font-semibold
                text-text
              "
            >
              Let's build something useful together.
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
              Whether you need a web application, technical
              support, or help solving a technology problem,
              I'm open to new opportunities and collaborations.
            </p>

          </div>


          <a
            href="#contact"
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              rounded-md
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

            <span className="ml-2">
              →
            </span>
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default About;