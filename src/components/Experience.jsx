import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = ({ personalData }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section
      id="experience"
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
      {/* =====================================
          BACKGROUND DECORATIONS
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-primary/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-purple/5
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-content">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="mb-16">

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
              Career Journey
            </p>

          </div>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              text-text
              sm:text-5xl
              lg:text-6xl
            "
          >
            Work
            <span className="text-primary"> Experience</span>
          </h2>

          <p
            className="
              mt-5
              max-w-text
              text-sm
              leading-7
              text-muted
              sm:text-base
            "
          >
            A journey through IT support, web development,
            virtual assistance, and customer service.
          </p>

        </div>


        {/* =====================================
            TIMELINE
        ===================================== */}

        <div className="relative">

          {/* TIMELINE LINE */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[19px]
              top-0
              hidden
              w-[2px]
              sm:block
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-primary
                via-primary/40
                to-transparent
              "
            />

            <div
              className="
                absolute
                -left-[3px]
                inset-y-0
                w-2
                bg-primary/20
                blur-md
              "
            />

          </div>


          {/* CAREER INDICATOR */}

          <div
            className="
              absolute
              -top-4
              left-[19px]
              z-30
              hidden
              -translate-x-1/2
              items-center
              gap-2
              rounded-full
              border
              border-primary/30
              bg-bg
              px-3
              py-1.5
              sm:flex
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                animate-pulse
                rounded-full
                bg-success
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[2px]
                text-muted
              "
            >
              Career
            </span>

          </div>


          {/* =====================================
              EXPERIENCE ITEMS
          ===================================== */}

          <div className="space-y-10">

            {personalData.experience.map((job, index) => (

              <motion.article
                key={`${job.position}-${index}`}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="
                  group
                  relative
                  pl-0
                  sm:pl-16
                "
              >

                {/* =====================================
                    TIMELINE NODE
                ===================================== */}

                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.2,
                  }}
                  className="
                    absolute
                    left-0
                    top-7
                    z-30
                    hidden
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-primary
                    bg-bg
                    shadow-primary
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:border-accent
                    sm:flex
                  "
                >

                  <div
                    className="
                      absolute
                      inset-[-7px]
                      rounded-full
                      border
                      border-primary/20
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-[4px]
                      rounded-full
                      border
                      border-primary/40
                    "
                  />

                  <div
                    className="
                      relative
                      h-3
                      w-3
                      rounded-full
                      bg-primary
                      shadow-[0_0_15px_rgba(8,200,255,0.9)]
                      transition-all
                      duration-300
                      group-hover:bg-accent
                    "
                  />

                </motion.div>


                {/* =====================================
                    CIRCUIT CONNECTION
                ===================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[20px]
                    top-[45px]
                    hidden
                    h-px
                    w-8
                    bg-gradient-to-r
                    from-primary
                    to-transparent
                    sm:block
                  "
                >

                  <div
                    className="
                      absolute
                      right-0
                      top-[-2px]
                      h-1
                      w-1
                      rounded-full
                      bg-primary
                      shadow-[0_0_8px_rgba(8,200,255,0.9)]
                    "
                  />

                </div>


                {/* =====================================
                    CARD
                ===================================== */}

                <button
                  type="button"
                  onClick={() => setSelectedJob(job)}
                  className="
                    relative
                    w-full
                    cursor-pointer
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/60
                    hover:shadow-primary
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/50
                  "
                >

                  {/* Animated top line */}

                  <motion.div
                    initial={{
                      scaleX: 0,
                      transformOrigin: "left",
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.12 + 0.2,
                    }}
                    className="
                      h-1
                      w-full
                      bg-gradient-primary
                    "
                  />


                  {/* CARD CONTENT */}

                  <div className="p-6 sm:p-8">

                    <div
                      className="
                        flex
                        flex-col
                        gap-5
                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                      "
                    >

                      {/* JOB INFORMATION */}

                      <div className="flex gap-4">

                        {/* NUMBER */}

                        <div
                          className="
                            hidden
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-border
                            bg-bg-secondary
                            text-sm
                            font-bold
                            text-primary
                            transition-all
                            duration-300
                            group-hover:border-primary
                            group-hover:shadow-primary
                            sm:flex
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>


                        <div>

                          <h3
                            className="
                              text-xl
                              font-bold
                              text-text
                              transition-colors
                              duration-300
                              group-hover:text-primary
                              sm:text-2xl
                            "
                          >
                            {job.position}
                          </h3>

                          <p
                            className="
                              mt-1
                              text-sm
                              font-medium
                              text-primary
                            "
                          >
                            {job.company}
                          </p>

                        </div>

                      </div>


                      {/* YEAR */}

                      {job.year && (

                        <span
                          className="
                            w-fit
                            rounded-full
                            border
                            border-border
                            bg-bg-secondary
                            px-4
                            py-2
                            text-xs
                            text-muted
                            transition-all
                            duration-300
                            group-hover:border-primary/50
                          "
                        >
                          {job.year}
                        </span>

                      )}

                    </div>


                    {/* RESPONSIBILITIES */}

                    <div className="mt-6">

                      <div className="space-y-2">

                        {job.responsibilities
                          .slice(0, 2)
                          .map((responsibility, i) => (

                            <div
                              key={i}
                              className="
                                flex
                                gap-3
                                text-sm
                                text-muted
                              "
                            >

                              <span
                                className="
                                  mt-2
                                  h-1.5
                                  w-1.5
                                  shrink-0
                                  rounded-full
                                  bg-primary
                                  shadow-[0_0_7px_rgba(8,200,255,0.7)]
                                "
                              />

                              <span>
                                {responsibility}
                              </span>

                            </div>

                          ))}

                      </div>


                      {/* =====================================
                          CLICK INDICATOR
                      ===================================== */}

                      <div
                        className="
                          mt-6
                          flex
                          items-center
                          justify-between
                          border-t
                          border-border
                          pt-5
                        "
                      >

                        <span
                          className="
                            text-[10px]
                            uppercase
                            tracking-[2px]
                            text-muted-dark
                          "
                        >
                          Click to view details
                        </span>


                        {/* =================================
                            ANIMATED ARROW
                        ================================= */}

                        <motion.span
                          initial={{
                            opacity: 0.5,
                            x: 0,
                          }}
                          whileInView={{
                            opacity: [0.5, 1, 0.7, 1],
                            x: [0, 5, 2, 5],
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 1.2,
                            delay: index * 0.12 + 0.5,
                            ease: "easeInOut",
                          }}
                          className="
                            text-xl
                            font-semibold
                            text-primary
                            drop-shadow-[0_0_0px_rgba(8,200,255,0)]
                            transition-all
                            duration-300
                            group-hover:text-accent
                            group-hover:drop-shadow-[0_0_10px_rgba(255,210,63,0.9)]
                          "
                        >
                          ↗
                        </motion.span>

                      </div>

                    </div>

                  </div>

                </button>

              </motion.article>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================
          ZOOM MODAL
      ===================================== */}

      {selectedJob && (

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
            z-[100]
            flex
            items-center
            justify-center
            bg-bg/80
            px-4
            py-8
            backdrop-blur-md
          "
          onClick={() => setSelectedJob(null)}
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-3xl
              overflow-y-auto
              rounded-2xl
              border
              border-primary/50
              bg-card
              shadow-2xl
            "
          >

            <div
              className="
                h-1.5
                w-full
                bg-gradient-primary
              "
            />

            <div className="p-6 sm:p-8 lg:p-10">

              {/* CLOSE */}

              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  text-muted
                  transition-all
                  hover:border-primary
                  hover:bg-primary
                  hover:text-bg
                "
                aria-label="Close"
              >
                ×
              </button>


              {/* JOB HEADER */}

              <div className="pr-10">

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-primary
                  "
                >
                  Professional Experience
                </p>

                <h2
                  className="
                    mt-3
                    text-2xl
                    font-bold
                    text-text
                    sm:text-4xl
                  "
                >
                  {selectedJob.position}
                </h2>

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    items-center
                    gap-3
                  "
                >

                  <span className="text-primary">
                    {selectedJob.company}
                  </span>

                  {selectedJob.year && (
                    <>
                      <span className="text-border">
                        •
                      </span>

                      <span className="text-sm text-muted">
                        {selectedJob.year}
                      </span>
                    </>
                  )}

                </div>

              </div>


              <div className="my-8 h-px bg-border" />


              {/* RESPONSIBILITIES */}

              <div>

                <h3
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-muted-dark
                  "
                >
                  Key Responsibilities
                </h3>

                <div
                  className="
                    mt-5
                    grid
                    gap-4
                    sm:grid-cols-2
                  "
                >

                  {selectedJob.responsibilities.map(
                    (responsibility, index) => (

                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                        className="
                          flex
                          gap-3
                          rounded-lg
                          border
                          border-border
                          bg-bg-secondary
                          p-4
                          transition-all
                          duration-300
                          hover:border-primary/50
                        "
                      >

                        <span
                          className="
                            mt-1
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-primary/10
                            text-xs
                            text-primary
                          "
                        >
                          ✓
                        </span>

                        <p
                          className="
                            text-sm
                            leading-6
                            text-muted
                          "
                        >
                          {responsibility}
                        </p>

                      </motion.div>

                    )
                  )}

                </div>

              </div>


              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="
                  mt-8
                  w-full
                  rounded-lg
                  border
                  border-primary
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-primary
                  transition-all
                  hover:bg-primary
                  hover:text-bg
                "
              >
                Close
              </button>

            </div>

          </motion.div>

        </motion.div>

      )}

    </section>
  );
};

export default Experience;