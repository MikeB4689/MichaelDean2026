import React, { useEffect, useState } from "react";

const Skills = ({ personalData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const skills = personalData.skills;

  // =====================================
  // RESPONSIVE CARD COUNT
  // =====================================

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      };
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);


  // =====================================
  // MAXIMUM SLIDE
  // =====================================

  const maxIndex = Math.max(
    0,
    skills.length - visibleCards
  );


  // =====================================
  // NEXT
  // =====================================

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };


  // =====================================
  // PREVIOUS
  // =====================================

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };


  // =====================================
  // AUTO SLIDE
  // =====================================

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);


  return (
    <section
      id="skills"
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

        <div
          className="
            mb-10
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >

          <div>

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-primary
              "
            >
              My expertise
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
              Skills & Technologies
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
                max-w-text
                text-base
                leading-relaxed
                text-muted
              "
            >
              Technologies and tools I use to develop applications,
              solve technical problems, and build reliable digital
              solutions.
            </p>

          </div>


          {/* =================================
              CONTROLS
          ================================= */}

          <div className="flex gap-2">

            <button
              type="button"
              onClick={previousSlide}
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
                hover:border-primary
                hover:bg-primary/10
              "
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
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
                hover:border-primary
                hover:bg-primary/10
              "
            >
              →
            </button>

          </div>

        </div>


        {/* =====================================
            SLIDER
        ===================================== */}

        <div className="overflow-hidden">

          <div
            className="
              flex
              transition-transform
              duration-500
              ease-out
            "
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleCards)
              }%)`,
            }}
          >

            {skills.map((skill, index) => (

              <div
                key={skill.name}
                className="
                  min-w-full
                  px-2
                  sm:min-w-[50%]
                  lg:min-w-[33.333333%]
                  xl:min-w-[25%]
                "
              >

                {/* =================================
                    SKILL CARD
                ================================= */}

                <div
                  className="
                    group
                    h-full
                    min-h-[270px]
                    rounded-xl
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

                  {/* Top */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        bg-primary/10
                        text-xs
                        font-bold
                        text-primary
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-border
                        px-3
                        py-1
                        text-[10px]
                        uppercase
                        tracking-wide
                        text-muted
                      "
                    >
                      {skill.category}
                    </span>

                  </div>


                  {/* Skill name */}

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-semibold
                      text-text
                      transition-colors
                      group-hover:text-primary
                    "
                  >
                    {skill.name}
                  </h3>


                  {/* =================================
                      STAR RATING
                  ================================= */}

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      gap-1
                    "
                  >

                    {[1, 2, 3, 4, 5].map((star) => (

                      <span
                        key={star}
                        className={
                          star <= skill.rating
                            ? "text-accent"
                            : "text-border"
                        }
                      >
                        ★
                      </span>

                    ))}

                    <span
                      className="
                        ml-2
                        text-xs
                        text-muted
                      "
                    >
                      {skill.rating}/5
                    </span>

                  </div>


                  {/* Description */}

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-relaxed
                      text-muted
                    "
                  >
                    {skill.description}
                  </p>


                  {/* Bottom line */}

                  <div
                    className="
                      mt-6
                      h-1
                      w-10
                      rounded-full
                      bg-gradient-primary
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =====================================
            SLIDE INDICATORS
        ===================================== */}

        <div className="mt-6 flex justify-center gap-2">

          {Array.from({
            length: maxIndex + 1,
          }).map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300

                ${
                  currentIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-border"
                }
              `}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;