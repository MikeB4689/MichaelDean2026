import React from "react";
import { motion } from "framer-motion";

const Experience = ({ personalData }) => {
  const experiences = personalData?.experience || [];

  return (
    <section
      id="experience"
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
          -left-48
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-glow-blue
          blur-3xl
          opacity-30
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-glow-purple
          blur-3xl
          opacity-30
        "
      />

      {/* =====================================
          CONTAINER
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
            HEADER
        ===================================== */}

        <motion.div
          className="mb-14"
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
        >
          <div
            className="
              flex
              items-center
              gap-3
              text-sm
              font-semibold
              uppercase
              tracking-[2px]
              text-primary
            "
          >
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-primary
              "
            />

            Professional Journey
          </div>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-text
              sm:text-4xl
              lg:text-5xl
            "
          >
            Work Experience
          </h2>

          <div
            className="
              mt-4
              h-1
              w-16
              rounded-full
              bg-gradient-primary
            "
          />

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
            A professional journey combining web development, IT support,
            customer service, technical troubleshooting, and e-commerce
            experience.
          </p>
        </motion.div>


        {/* =====================================
            TIMELINE
        ===================================== */}

        <div className="relative">

          {/* Timeline line */}

          <div
            className="
              absolute
              left-[19px]
              top-6
              bottom-6
              hidden
              w-px
              bg-gradient-to-b
              from-primary
              via-border
              to-transparent
              md:block
            "
          />


          <div className="space-y-8">

            {experiences.map((experience, index) => (

              <motion.article
                key={`${experience.company}-${experience.position}-${index}`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="
                  relative
                  md:pl-14
                "
              >

                {/* =================================
                    TIMELINE DOT
                ================================= */}

                <div
                  className="
                    absolute
                    left-[11px]
                    top-8
                    hidden
                    h-[17px]
                    w-[17px]
                    rounded-full
                    border-4
                    border-bg
                    bg-primary
                    shadow-primary
                    md:block
                  "
                />


                {/* =================================
                    CARD
                ================================= */}

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-6
                    shadow-card
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/50
                    hover:shadow-primary
                    sm:p-8
                  "
                >

                  {/* Top accent */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-1
                      w-0
                      bg-gradient-primary
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />


                  {/* =================================
                      HEADER
                  ================================= */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      md:flex-row
                      md:items-start
                      md:justify-between
                    "
                  >

                    <div>

                      {/* Company */}

                      <p
                        className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-[1.5px]
                          text-primary
                        "
                      >
                        {experience.company}
                      </p>


                      {/* Position */}

                      <h3
                        className="
                          mt-2
                          text-xl
                          font-bold
                          leading-tight
                          text-text
                          sm:text-2xl
                        "
                      >
                        {experience.position}
                      </h3>

                    </div>


                    {/* Date */}

                    <div
                      className="
                        flex
                        w-fit
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-border
                        bg-bg-secondary
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-muted
                      "
                    >
                      <span className="text-primary">
                        ●
                      </span>

                      {experience.year || "Previous Experience"}
                    </div>

                  </div>


                  {/* =================================
                      DIVIDER
                  ================================= */}

                  <div
                    className="
                      my-6
                      h-px
                      bg-border
                    "
                  />


                  {/* =================================
                      EXPERIENCE LABEL
                  ================================= */}

                  <div
                    className="
                      mb-4
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-md
                        bg-primary/10
                        text-xs
                        font-bold
                        text-primary
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[1.5px]
                        text-muted-dark
                      "
                    >
                      Key Responsibilities
                    </span>
                  </div>


                  {/* =================================
                      RESPONSIBILITIES
                  ================================= */}

                  {experience.responsibilities?.length > 0 && (

                    <ul
                      className="
                        grid
                        gap-x-10
                        gap-y-3
                        md:grid-cols-2
                      "
                    >
                      {experience.responsibilities.map(
                        (responsibility, responsibilityIndex) => (

                          <li
                            key={responsibilityIndex}
                            className="
                              group/item
                              flex
                              items-start
                              gap-3
                              text-sm
                              leading-6
                              text-muted
                            "
                          >

                            <span
                              className="
                                mt-[9px]
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-full
                                bg-primary
                                transition-transform
                                duration-200
                                group-hover/item:scale-150
                              "
                            />

                            <span
                              className="
                                transition-colors
                                duration-200
                                group-hover/item:text-text
                              "
                            >
                              {responsibility}
                            </span>

                          </li>

                        )
                      )}
                    </ul>

                  )}


                  {/* =================================
                      BOTTOM TAG
                  ================================= */}

                  <div
                    className="
                      mt-7
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        bg-bg-secondary
                        px-3
                        py-1
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-wide
                        text-muted
                      "
                    >
                      Professional Experience
                    </span>

                    {index === 0 && (
                      <span
                        className="
                          rounded-full
                          border
                          border-success/30
                          bg-success/5
                          px-3
                          py-1
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-wide
                          text-success
                        "
                      >
                        Recent
                      </span>
                    )}

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>


        {/* =====================================
            CAREER SUMMARY
        ===================================== */}

        <motion.div
          className="
            relative
            mt-12
            overflow-hidden
            rounded-2xl
            border
            border-primary/30
            bg-primary/5
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-40
              w-40
              rounded-full
              bg-primary
              opacity-10
              blur-3xl
            "
          />


          <div
            className="
              relative
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div>

              <p
                className="
                  text-lg
                  font-bold
                  text-text
                  sm:text-xl
                "
              >
                Technical skills backed by real-world experience.
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
                My background allows me to approach problems from both
                a technical and user-focused perspective — from building
                applications to troubleshooting systems and supporting users.
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

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Experience;