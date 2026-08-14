import React, { useEffect, useState } from "react";

const Services = ({ personalData }) => {
  const services = personalData.services;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  /*
   * Clone cards at both ends.
   * This allows the slider to continue moving
   * and then reset invisibly.
   */
  const slides = [
    ...services.slice(-3),
    ...services,
    ...services.slice(0, 3),
  ];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  /*
   * Start in the real first card.
   */
  useEffect(() => {
    setCurrentIndex(3);
  }, []);

  /*
   * When reaching a cloned card,
   * instantly move back to the real card.
   */
  useEffect(() => {
    if (currentIndex === services.length + 3) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(3);
      }, 500);

      return () => clearTimeout(timeout);
    }

    if (currentIndex === 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(services.length);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, services.length]);

  /*
   * Re-enable animation after an instant reset.
   */
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  /*
   * Automatic sliding.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Calculate which card is active for the dots.
   */
  const activeIndex =
    (currentIndex - 3 + services.length) % services.length;

  return (
    <section
      id="services"
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
      <div className="mx-auto w-full max-w-content">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="mb-12">

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
              What I Do
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
            My
            <span className="text-primary"> Services</span>
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
            I provide technical, development, and support services
            focused on creating reliable and practical solutions.
          </p>

        </div>


        {/* =====================================
            SLIDER
        ===================================== */}

        <div className="relative">

          {/* Previous */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous service"
            className="
              absolute
              left-0
              top-1/2
              z-20
              hidden
              h-11
              w-11
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-bg-secondary
              text-xl
              text-primary
              shadow-card
              transition-all
              duration-300
              hover:border-primary
              hover:bg-primary
              hover:text-bg
              lg:flex
            "
          >
            ←
          </button>


          {/* Cards */}

          <div className="overflow-hidden">

            <div
              className={`
                flex
                ${
                  isTransitioning
                    ? "transition-transform duration-500 ease-out"
                    : ""
                }
              `}
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% / 3))`,
              }}
            >

              {slides.map((service, index) => (

                <div
                  key={`${service.title}-${index}`}
                  className="
                    w-full
                    shrink-0
                    px-2
                    sm:w-1/2
                    lg:w-1/3
                  "
                >

                  <article
                    className="
                      group
                      relative
                      h-full
                      min-h-[320px]
                      overflow-hidden
                      rounded-2xl
                      border
                      border-border
                      bg-card
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-primary/60
                      hover:shadow-primary
                      sm:p-7
                    "
                  >

                    {/* Top gradient */}

                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        top-0
                        h-1
                        bg-gradient-primary
                        opacity-40
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />


                    {/* Number */}

                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        text-sm
                        font-bold
                        text-muted-dark
                        transition-colors
                        duration-300
                        group-hover:text-primary
                      "
                    >
                      {String((index % services.length) + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>


                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-border
                        bg-bg-secondary
                        text-xl
                        text-primary
                        transition-all
                        duration-300
                        group-hover:border-primary
                        group-hover:shadow-primary
                      "
                    >
                      {getServiceIcon(service.title)}
                    </div>


                    {/* Title */}

                    <h3
                      className="
                        mt-7
                        text-xl
                        font-bold
                        text-text
                        transition-colors
                        duration-300
                        group-hover:text-primary
                      "
                    >
                      {service.title}
                    </h3>


                    {/* Description */}

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-7
                        text-muted
                      "
                    >
                      {service.description}
                    </p>


                    {/* Bottom */}

                    <div
                      className="
                        absolute
                        bottom-6
                        left-6
                        right-6
                        flex
                        items-center
                        justify-between
                        border-t
                        border-border
                        pt-4
                      "
                    >

                      <span
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[2px]
                          text-muted-dark
                        "
                      >
                        Service
                      </span>

                      <span
                        className="
                          text-lg
                          text-primary
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>

                    </div>

                  </article>

                </div>

              ))}

            </div>

          </div>


          {/* Next */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next service"
            className="
              absolute
              right-0
              top-1/2
              z-20
              hidden
              h-11
              w-11
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-bg-secondary
              text-xl
              text-primary
              shadow-card
              transition-all
              duration-300
              hover:border-primary
              hover:bg-primary
              hover:text-bg
              lg:flex
            "
          >
            →
          </button>

        </div>


        {/* =====================================
            MOBILE CONTROLS
        ===================================== */}

        <div className="mt-6 flex items-center justify-center gap-4">

          {/* Previous */}

          <button
            type="button"
            onClick={prevSlide}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-bg-secondary
              text-primary
              transition-all
              hover:border-primary
              hover:bg-primary
              hover:text-bg
            "
          >
            ←
          </button>


          {/* Dots */}

          <div className="flex items-center gap-2">

            {services.map((_, index) => (

              <button
                key={index}
                type="button"
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(index + 3);
                }}
                aria-label={`Go to service ${index + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeIndex === index
                      ? "w-6 bg-primary"
                      : "w-2 bg-border"
                  }
                `}
              />

            ))}

          </div>


          {/* Next */}

          <button
            type="button"
            onClick={nextSlide}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-bg-secondary
              text-primary
              transition-all
              hover:border-primary
              hover:bg-primary
              hover:text-bg
            "
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
};


/* ========================================
   SERVICE ICONS
======================================== */

const getServiceIcon = (title) => {
  switch (title) {
    case "IT Support":
      return "🖥️";

    case "Web Development":
      return "</>";

    case "Mobile App Development":
      return "📱";

    case "Virtual Assistance":
      return "📋";

    case "Technical Support":
      return "⚙️";

    default:
      return "✦";
  }
};


export default Services;