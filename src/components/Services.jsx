import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/* =========================================================
   SERVICE ICONS
========================================================= */

const serviceIcons = {
  "Web Development": "</>",
  "IT Support": "IT",
  "Virtual Assistance": "VA",
  "Technical Support": "TS",
  "Mobile Development": "APP",
  "Data & Backend": "DB",
};

/* =========================================================
   DEFAULT SERVICES
========================================================= */

const defaultServices = [
  {
    title: "Web Development",
    description:
      "Building responsive, modern, and user-friendly websites and web applications using current web technologies.",
    category: "Development",
  },
  {
    title: "IT Support",
    description:
      "Hardware, software, networking, printer, workstation, and general technical troubleshooting for reliable IT operations.",
    category: "IT Services",
  },
  {
    title: "Virtual Assistance",
    description:
      "Providing reliable remote support including data entry, online research, product research, and administrative tasks.",
    category: "Business Support",
  },
  {
    title: "Technical Support",
    description:
      "Helping users troubleshoot technical issues, resolve problems efficiently, and maintain a positive support experience.",
    category: "Customer Support",
  },
  {
    title: "Mobile Development",
    description:
      "Creating practical mobile applications with React Native and Expo for Android and cross-platform environments.",
    category: "Mobile",
  },
  {
    title: "Data & Backend",
    description:
      "Working with APIs, databases, Firebase, SQLite, PHP, Python, and application data management.",
    category: "Backend",
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({
  service,
  index,
}) => {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  /* =======================================================
     3D ROTATION
  ======================================================= */

  const rotateX = useSpring(
    useTransform(
      mouseY,
      [0, 1],
      [6, -6]
    ),
    {
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    }
  );

  const rotateY = useSpring(
    useTransform(
      mouseX,
      [0, 1],
      [-6, 6]
    ),
    {
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    }
  );

  /* =======================================================
     CURSOR GLOW POSITION
  ======================================================= */

  const glowX = useTransform(
    mouseX,
    [0, 1],
    ["0%", "100%"]
  );

  const glowY = useTransform(
    mouseY,
    [0, 1],
    ["0%", "100%"]
  );

  /* =======================================================
     MOUSE MOVE
  ======================================================= */

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width;

    const y =
      (event.clientY - rect.top) /
      rect.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  /* =======================================================
     RESET
  ======================================================= */

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const icon =
    service.icon ||
    serviceIcons[service.title] ||
    "</>";

  return (
    <div
      className="h-full"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          y: -8,
          scale: 1.015,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
        className="
          group
          relative
          flex
          h-full
          min-h-[330px]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-card
          p-6
          shadow-card
          transition-shadow
          duration-300
          hover:border-primary/60
          hover:shadow-primary
          sm:p-7
        "
      >
        {/* =================================================
            CURSOR GLOW
        ================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -translate-x-1/2
            -translate-y-1/2
            h-44
            w-44
            rounded-full
            bg-primary/10
            blur-3xl
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
          style={{
            left: glowX,
            top: glowY,
          }}
        />

        {/* =================================================
            TOP GLOW
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-40
            w-40
            rounded-full
            bg-primary/5
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-primary/15
          "
        />

        {/* =================================================
            SERVICE NUMBER
        ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-between
          "
          style={{
            transform:
              "translateZ(25px)",
          }}
        >
          <span
            className="
              text-xs
              font-bold
              tracking-[2px]
              text-primary
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {service.category && (
            <span
              className="
                rounded-full
                border
                border-border
                bg-bg
                px-3
                py-1
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-muted
              "
            >
              {service.category}
            </span>
          )}
        </div>

        {/* =================================================
            ICON
        ================================================= */}

        <motion.div
          className="
            relative
            z-10
            mt-7
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            border
            border-primary/20
            bg-primary/10
            font-mono
            text-sm
            font-bold
            text-primary
          "
          style={{
            transform:
              "translateZ(35px)",
          }}
          whileHover={{
            rotate: -5,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          {icon}
        </motion.div>

        {/* =================================================
            TITLE
        ================================================= */}

        <h3
          className="
            relative
            z-10
            mt-6
            text-xl
            font-bold
            text-text
            transition-colors
            duration-300
            group-hover:text-primary
          "
          style={{
            transform:
              "translateZ(30px)",
          }}
        >
          {service.title}
        </h3>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            relative
            z-10
            mt-3
            flex-1
            text-sm
            leading-6
            text-muted
          "
          style={{
            transform:
              "translateZ(20px)",
          }}
        >
          {service.description}
        </p>

        {/* =================================================
            BOTTOM LINK
        ================================================= */}

        <div
          className="
            relative
            z-10
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-border
            pt-5
          "
          style={{
            transform:
              "translateZ(25px)",
          }}
        >
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-muted
              transition-colors
              duration-300
              group-hover:text-primary
            "
          >
            Learn More
          </span>

          <motion.span
            className="
              text-lg
              text-primary
            "
            animate={{
              x: [0, 0],
            }}
            whileHover={{
              x: 4,
            }}
          >
            →
          </motion.span>
        </div>

        {/* =================================================
            HOVER ACCENT
        ================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-1
            w-12
            rounded-r-full
            bg-gradient-primary
            transition-all
            duration-500
            group-hover:w-full
          "
        />

        {/* =================================================
            INNER HIGHLIGHT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            border
            border-white/5
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </motion.article>
    </div>
  );
};

/* =========================================================
   SERVICES
========================================================= */

const Services = ({
  personalData,
}) => {
  const services =
    personalData?.services?.length > 0
      ? personalData.services
      : defaultServices;

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
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

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
          opacity-20
          blur-3xl
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
          opacity-20
          blur-3xl
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-content
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

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
          className="
            mb-12
            max-w-3xl
          "
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                bg-primary
              "
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
              What I Do
            </p>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              tracking-tight
              text-text
              sm:text-5xl
            "
          >
            Services &{" "}
            <span className="text-primary">
              Solutions
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-muted
              sm:text-base
            "
          >
            I provide practical technology solutions
            combining web development, IT support,
            technical troubleshooting, and remote
            business assistance.
          </p>
        </motion.div>

        {/* ===================================================
            SERVICES GRID
        =================================================== */}

        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {services.map(
            (service, index) => (
              <motion.div
                key={
                  service.id ||
                  service.title ||
                  index
                }
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
              >
                <ServiceCard
                  service={service}
                  index={index}
                />
              </motion.div>
            )
          )}
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

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
            delay: 0.15,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-primary/30
            bg-primary/5
            p-6
            sm:p-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <p
              className="
                text-lg
                font-semibold
                text-text
              "
            >
              Have a project or technical problem?
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
              Let's discuss your requirements and
              find a practical solution that fits
              your goals.
            </p>
          </div>

          <a
            href="#contact"
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              rounded-xl
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

export default Services;