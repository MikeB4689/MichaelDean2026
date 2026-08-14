 
import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const Experience = ({ personalData }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  // Close modal with Escape
  useEffect(() => {
    if (!selectedJob) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedJob(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedJob]);

  const experiences = personalData?.experience ?? [];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const nodeVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
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
      {/* Background decorations */}
      <div
        aria-hidden="true"
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
        aria-hidden="true"
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
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mb-16"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-primary"
            />

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
            id="experience-title"
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
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
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

          {/* Career indicator */}
          <div
            aria-hidden="true"
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

          {/* Experience items */}
          <div className="space-y-10">
            {experiences.map((job, index) => {
              const jobKey = `${job.position}-${job.company}-${job.year ?? index}`;

              return (
                <motion.article
                  key={jobKey}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.55,
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.1,
                    ease: "easeOut",
                  }}
                  className="
                    group
                    relative
                    pl-0
                    sm:pl-16
                  "
                >
                  {/* Timeline node */}
                  <motion.div
                    variants={nodeVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay: shouldReduceMotion
                        ? 0
                        : index * 0.1 + 0.15,
                    }}
                    aria-hidden="true"
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

                  {/* Circuit connection */}
                  <div
                    aria-hidden="true"
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

                  {/* Experience card */}
                  <button
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    aria-label={`View details for ${job.position} at ${job.company}`}
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
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.7,
                        delay: shouldReduceMotion
                          ? 0
                          : index * 0.1 + 0.15,
                        ease: "easeOut",
                      }}
                      style={{
                        transformOrigin: "left",
                      }}
                      aria-hidden="true"
                      className="
                        h-1
                        w-full
                        bg-gradient-primary
                      "
                    />

                    <div className="p-6 sm:p-8">
                      {/* Header */}
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
                        <div className="flex gap-4">
                          {/* Number */}
                          <div
                            aria-hidden="true"
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

                        {/* Year */}
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

                      {/* Responsibilities preview */}
                      <div className="mt-6">
                        <div className="space-y-2">
                          {(job.responsibilities ?? [])
                            .slice(0, 2)
                            .map((responsibility) => (
                              <div
                                key={responsibility}
                                className="
                                  flex
                                  gap-3
                                  text-sm
                                  text-muted
                                "
                              >
                                <span
                                  aria-hidden="true"
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

                                <span>{responsibility}</span>
                              </div>
                            ))}
                        </div>

                        {/* Click indicator */}
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

                          {/* Arrow */}
                          <motion.span
                            initial={{
                              opacity: 0.4,
                              x: 0,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: shouldReduceMotion ? 0 : 5,
                            }}
                            viewport={{
                              once: true,
                              amount: 0.5,
                            }}
                            transition={{
                              duration: shouldReduceMotion
                                ? 0
                                : 0.5,
                              delay: shouldReduceMotion
                                ? 0
                                : index * 0.1 + 0.4,
                              ease: "easeOut",
                            }}
                            aria-hidden="true"
                            className="
                              text-xl
                              font-semibold
                              text-primary
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
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            key="experience-modal"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
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
              role="dialog"
              aria-modal="true"
              aria-labelledby="experience-modal-title"
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.92,
                y: shouldReduceMotion ? 0 : 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.96,
                y: shouldReduceMotion ? 0 : 10,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.3,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
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
                aria-hidden="true"
                className="
                  h-1.5
                  w-full
                  bg-gradient-primary
                "
              />

              <div className="p-6 sm:p-8 lg:p-10">
                {/* Close */}
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  aria-label="Close experience details"
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
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/50
                  "
                >
                  ×
                </button>

                {/* Job header */}
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
                    id="experience-modal-title"
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
                        <span
                          aria-hidden="true"
                          className="text-border"
                        >
                          •
                        </span>

                        <span className="text-sm text-muted">
                          {selectedJob.year}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="my-8 h-px bg-border"
                />

                {/* Responsibilities */}
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
                    {(selectedJob.responsibilities ?? []).map(
                      (responsibility) => (
                        <motion.div
                          key={responsibility}
                          initial={{
                            opacity: 0,
                            x: shouldReduceMotion ? 0 : -10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: shouldReduceMotion
                              ? 0
                              : 0.25,
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
                            aria-hidden="true"
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

                {/* Close button */}
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
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/50
                  "
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
 
