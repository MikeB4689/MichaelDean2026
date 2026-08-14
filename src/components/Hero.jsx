import React from "react";
import profileImage from "../assets/profile.png";

const Hero = ({ personalData }) => {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        overflow-hidden
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
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
          h-[350px]
          w-[350px]
          rounded-full
          bg-glow-blue
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-glow-purple
          blur-3xl
        "
      />


      {/* =====================================
          HERO CONTAINER
      ===================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-hero
          items-center
          gap-14
          lg:grid-cols-2
          lg:gap-20
        "
      >

        {/* =====================================
            HERO CONTENT
        ===================================== */}

        <div className="order-2 lg:order-1">

          {/* Greeting */}

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-primary
              sm:text-base
            "
          >
            Hello, I'm
          </p>


          {/* Name */}

          <h1
            className="
              mt-3
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-text
              sm:text-5xl
              md:text-6xl
              lg:text-hero
            "
          >
            {personalData.personalInfo.name}
          </h1>


          {/* =====================================
              PROFESSIONAL TITLES
          ===================================== */}

          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              text-lg
              font-semibold
              sm:text-xl
              md:text-2xl
            "
          >

            {personalData.personalInfo.title.map(
              (title, index) => (

                <React.Fragment key={title}>

                  <span
                    className="
                      bg-gradient-primary
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {title}
                  </span>

                  {index !==
                    personalData.personalInfo.title.length - 1 && (
                    <span className="text-accent">
                      •
                    </span>
                  )}

                </React.Fragment>

              )
            )}

          </div>


          {/* =====================================
              DESCRIPTION
          ===================================== */}

          <p
            className="
              mt-6
              max-w-text
              text-base
              leading-relaxed
              text-muted
              sm:text-[17px]
            "
          >
            {personalData.about.passion}
          </p>


          {/* =====================================
              CTA BUTTONS
          ===================================== */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >

            {/* Projects */}

            <a
              href="#projects"
              className="
                inline-flex
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
              View My Projects
              <span className="ml-2">
                →
              </span>
            </a>


            {/* Contact */}

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-md
                border
                border-primary
                px-6
                py-3
                text-sm
                font-semibold
                text-primary
                transition-all
                duration-300
                hover:bg-primary
                hover:text-bg
              "
            >
              Contact Me
            </a>

          </div>


          {/* =====================================
              SMALL INFO
          ===================================== */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-5
              text-xs
              text-muted-dark
              sm:text-sm
            "
          >

            <span className="flex items-center gap-2">

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-success
                  animate-pulse
                "
              />

              Available for work

            </span>


            <span className="text-border">
              |
            </span>


            <span>
              Philippines 🇵🇭
            </span>

          </div>

        </div>


        {/* =====================================
            PROFILE IMAGE
        ===================================== */}

        <div
          className="
            order-1
            flex
            justify-center
            lg:order-2
            lg:justify-end
          "
        >

          <div className="relative">

            {/* =================================
                BLUE GLOW
            ================================= */}

            <div
              className="
                absolute
                -inset-8
                rounded-[40px]
                bg-primary
                opacity-10
                blur-3xl
              "
            />


            {/* =================================
                PURPLE GLOW
            ================================= */}

            <div
              className="
                absolute
                -bottom-10
                -right-10
                h-40
                w-40
                rounded-full
                bg-purple
                opacity-20
                blur-3xl
              "
            />


            {/* =================================
                TOP DECORATION
            ================================= */}

            <div
              className="
                absolute
                -right-4
                -top-4
                z-30
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-primary
                bg-bg
                text-xl
                text-primary
                shadow-primary
                animate-float
              "
            >
              ✦
            </div>


            {/* =================================
                PROFILE FRAME
            ================================= */}

            <div
              className="
                relative
                h-[390px]
                w-[300px]
                overflow-hidden
                rounded-[30px]
                bg-gradient-primary
                p-[3px]
                shadow-primary-lg
                sm:h-[450px]
                sm:w-[350px]
                md:h-[480px]
                md:w-[370px]
              "
            >

              {/* Inner frame */}

              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-[27px]
                  bg-card
                "
              >

                {/* Image */}

                <img
                  src={profileImage}
                  alt={personalData.personalInfo.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />


                {/* =================================
                    IMAGE OVERLAY
                ================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-bg
                    via-transparent
                    to-primary/10
                    opacity-70
                  "
                />


                {/* =================================
                    BOTTOM BADGE
                ================================= */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    rounded-xl
                    border
                    border-border-light
                    bg-navbar/90
                    p-4
                    backdrop-blur-md
                  "
                >

                  <p
                    className="
                      text-xs
                      font-medium
                      uppercase
                      tracking-wider
                      text-primary
                    "
                  >
                    IT • WEB • SUPPORT
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-text
                    "
                  >
                    Building practical digital solutions.
                  </p>

                </div>

              </div>

            </div>


            {/* =================================
                DEVELOPER DECORATION
            ================================= */}

            <div
              className="
                absolute
                -bottom-5
                -left-5
                z-30
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-accent
                bg-bg
                font-mono
                text-sm
                font-bold
                text-accent
                shadow-accent
              "
            >
              {"</>"}
            </div>


            {/* =================================
                STATUS BADGE
            ================================= */}

            <div
              className="
                absolute
                -bottom-6
                right-4
                z-30
                flex
                items-center
                gap-2
                rounded-full
                border
                border-border
                bg-navbar
                px-4
                py-2
                shadow-card
              "
            >

              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-success
                  animate-pulse
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  text-nav
                "
              >
                Available for work
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;