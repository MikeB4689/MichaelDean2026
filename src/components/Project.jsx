import React from "react";
import { motion } from "framer-motion";

const Project = ({ personalData }) => {
  const projects = personalData?.projects || [];

  return (
    <section
      id="projects"
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
          BACKGROUND GLOW
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-40
          h-[350px]
          w-[350px]
          rounded-full
          bg-glow-blue
          opacity-30
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
          opacity-30
          blur-3xl
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
              My Work
            </p>
          </div>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              text-text
              sm:text-5xl
            "
          >
            Featured
            <span className="text-primary">
              {" "}
              Projects
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-text
              text-sm
              leading-7
              text-muted
              sm:text-base
            "
          >
            A selection of projects I've built while
            developing my skills in web development,
            mobile applications, and IT solutions.
          </p>
        </motion.div>

        {/* =====================================
            PROJECT GRID
        ===================================== */}

        {projects.length > 0 ? (
          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id || project.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-card
                  shadow-card
                  transition-all
                  duration-300
                  hover:border-primary/50
                  hover:shadow-primary
                "
              >
                {/* =================================
                    PROJECT IMAGE
                ================================= */}

                <div
                  className="
                    relative
                    aspect-video
                    overflow-hidden
                    bg-bg
                  "
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                        bg-gradient-primary
                        text-4xl
                        font-bold
                        text-text
                      "
                    >
                      {"</>"}
                    </div>
                  )}

                  {/* IMAGE OVERLAY */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-bg/80
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* CATEGORY */}

                  {project.category && (
                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        border
                        border-border-light
                        bg-navbar/90
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-primary
                        backdrop-blur-md
                      "
                    >
                      {project.category}
                    </div>
                  )}
                </div>

                {/* =================================
                    PROJECT CONTENT
                ================================= */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-6
                  "
                >
                  {/* TITLE */}

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-text
                      transition-colors
                      duration-200
                      group-hover:text-primary
                    "
                  >
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-muted
                    "
                  >
                    {project.description}
                  </p>

                  {/* =================================
                      TECHNOLOGIES
                  ================================= */}

                  {project.technologies?.length > 0 && (
                    <div
                      className="
                        mt-5
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-md
                              border
                              border-border
                              bg-bg
                              px-2.5
                              py-1
                              text-xs
                              font-medium
                              text-muted
                              transition-colors
                              duration-200
                              group-hover:border-primary/30
                            "
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  )}

                  {/* =================================
                      PROJECT LINKS
                  ================================= */}

                  <div
                    className="
                      mt-auto
                      flex
                      flex-wrap
                      gap-3
                      pt-6
                    "
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          flex-1
                          items-center
                          justify-center
                          rounded-md
                          bg-gradient-primary
                          px-4
                          py-2.5
                          text-sm
                          font-semibold
                          text-text
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:shadow-primary
                        "
                      >
                        Live Demo
                        <span className="ml-2">
                          ↗
                        </span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          flex-1
                          items-center
                          justify-center
                          rounded-md
                          border
                          border-border
                          px-4
                          py-2.5
                          text-sm
                          font-semibold
                          text-text
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:border-primary
                          hover:bg-primary/10
                          hover:text-primary
                        "
                      >
                        GitHub
                        <span className="ml-2">
                          ↗
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* =====================================
              EMPTY STATE
          ===================================== */

          <div
            className="
              mt-12
              rounded-2xl
              border
              border-border
              bg-card
              p-10
              text-center
            "
          >
            <div className="text-4xl">
              {"</>"}
            </div>

            <h3
              className="
                mt-4
                text-xl
                font-semibold
                text-text
              "
            >
              Projects Coming Soon
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-muted
              "
            >
              I'm currently working on new projects.
              Check back soon to see what I've been
              building.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;