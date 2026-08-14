import React from "react";

const About = ({ personalData }) => {
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

      {/* Background glow */}

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
        "
      />


      {/* Container */}

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

        <div className="mb-10">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-primary
            "
          >
            Get to know me
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              text-text
              sm:text-4xl
              lg:text-5xl
            "
          >
            About Me
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

        </div>


        {/* =====================================
            MAIN CONTENT
        ===================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1.4fr_0.6fr]
            lg:gap-12
          "
        >

          {/* =================================
              ABOUT CARD
          ================================= */}

          <div
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
          >

            <div className="mb-6 flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-lg
                  bg-primary/10
                  font-mono
                  text-primary
                "
              >
                {"</>"}
              </div>

              <div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-text
                  "
                >
                  Who I Am
                </h3>

                <p className="text-xs text-muted-dark">
                  Developer • IT • Support
                </p>

              </div>

            </div>


            {/* Description */}

            <p
              className="
                text-base
                leading-relaxed
                text-muted
                sm:text-[17px]
              "
            >
              {personalData.about.description}
            </p>


            {/* Extra paragraph */}

            <p
              className="
                mt-5
                text-base
                leading-relaxed
                text-muted
                sm:text-[17px]
              "
            >
              I enjoy learning new technologies, solving technical
              problems, and creating applications that are simple,
              practical, and easy to use.
            </p>


            {/* Small divider */}

            <div
              className="
                my-7
                h-px
                w-full
                bg-border
              "
            />


            {/* Focus areas */}

            <div>

              <p
                className="
                  mb-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-primary
                "
              >
                What I Do
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {[
                  "Web Development",
                  "IT Support",
                  "Technical Support",
                  "Problem Solving",
                ].map((item) => (

                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-border
                      bg-bg-secondary
                      px-4
                      py-2
                      text-xs
                      text-text-secondary
                      transition-all
                      duration-200
                      hover:border-primary
                      hover:text-primary
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>


          {/* =================================
              HIGHLIGHTS
          ================================= */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            {/* Experience */}

            <div
              className="
                rounded-2xl
                border
                border-border
                bg-card
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary
                hover:shadow-primary
              "
            >

              <span className="text-3xl font-bold text-primary">
                2+
              </span>

              <h4
                className="
                  mt-2
                  font-semibold
                  text-text
                "
              >
                Years Experience
              </h4>

              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-muted
                "
              >
                Building websites and applications with modern
                web technologies.
              </p>

            </div>


            {/* IT Support */}

            <div
              className="
                rounded-2xl
                border
                border-border
                bg-card
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-purple
                hover:shadow-purple
              "
            >

              <span className="text-3xl font-bold text-purple">
                IT
              </span>

              <h4
                className="
                  mt-2
                  font-semibold
                  text-text
                "
              >
                Technical Support
              </h4>

              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-muted
                "
              >
                Troubleshooting hardware, software, networks,
                and day-to-day technical issues.
              </p>

            </div>


            {/* Learning */}

            <div
              className="
                rounded-2xl
                border
                border-border
                bg-card
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-accent
                hover:shadow-accent
              "
            >

              <span className="text-3xl font-bold text-accent">
                ∞
              </span>

              <h4
                className="
                  mt-2
                  font-semibold
                  text-text
                "
              >
                Always Learning
              </h4>

              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-muted
                "
              >
                Continuously improving my skills and exploring
                new tools and technologies.
              </p>

            </div>

          </div>

        </div>


        {/* =====================================
            BOTTOM CTA
        ===================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-primary/30
            bg-primary/5
            p-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-8
          "
        >

          <div>

            <p
              className="
                text-sm
                font-semibold
                text-primary
              "
            >
              Let's build something useful.
            </p>

            <p
              className="
                mt-1
                text-sm
                text-muted
              "
            >
              I'm always open to learning, collaborating,
              and working on new projects.
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
              px-5
              py-2.5
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
            Get in Touch →
          </a>

        </div>

      </div>

    </section>
  );
};

export default About;