import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";

const Contact = ({ personalData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const contact = personalData.contact || {};
  const booking = personalData.booking || {};
  const personalInfo = personalData.personalInfo || {};

  const maxMessageLength = 1000;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "message"
          ? value.slice(0, maxMessageLength)
          : value,
    }));

    if (status) {
      setStatus("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_j8zr0ds",
        "YOUR_TEMPLATE_ID",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: contact.email,
        },
        "YOUR_PUBLIC_KEY"
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
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
          -left-40
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
          -right-40
          bottom-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-glow-blue
          blur-3xl
          opacity-40
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
          className="mb-12"
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

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[2px]
              text-primary
            "
          >
            Get In Touch
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              tracking-tight
              text-text
              sm:text-4xl
              lg:text-5xl
            "
          >
            Let's{" "}
            <span className="text-primary">
              Connect
            </span>
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
            {contact.message ||
              "Have a project, job opportunity, or technical question? Feel free to get in touch."}
          </p>

        </motion.div>


        {/* =====================================
            CONTACT INFO
        ===================================== */}

        <motion.div
          className="
            mb-8
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
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

          {/* EMAIL */}

          <a
            href={`mailto:${contact.email}`}
            className="
              group
              rounded-2xl
              border
              border-border
              bg-card
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/60
              hover:shadow-primary
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-lg
                  font-bold
                  text-primary
                "
              >
                @
              </div>

              <div className="min-w-0">

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-muted-dark
                  "
                >
                  Email
                </p>

                <p
                  className="
                    mt-1
                    truncate
                    text-sm
                    font-medium
                    text-text
                    group-hover:text-primary
                  "
                >
                  {contact.email}
                </p>

              </div>

            </div>

          </a>


          {/* PHONE */}

          <a
            href={`tel:${contact.phone}`}
            className="
              group
              rounded-2xl
              border
              border-border
              bg-card
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary/60
              hover:shadow-primary
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-lg
                "
              >
                ☎
              </div>

              <div>

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-muted-dark
                  "
                >
                  Phone
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-medium
                    text-text
                    group-hover:text-primary
                  "
                >
                  {contact.phone}
                </p>

              </div>

            </div>

          </a>


          {/* AVAILABILITY */}

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-card
              p-5
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-success/10
                "
              >

                <span
                  className="
                    h-3
                    w-3
                    animate-pulse
                    rounded-full
                    bg-success
                  "
                />

              </div>

              <div>

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-muted-dark
                  "
                >
                  Availability
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                    text-success
                  "
                >
                  {personalInfo.availability ||
                    "Available for work"}
                </p>

              </div>

            </div>

          </div>

        </motion.div>


        {/* =====================================
            MAIN CONTACT GRID
        ===================================== */}

        <div
          className="
            grid
            gap-6
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >

          {/* =====================================
              CONTACT FORM
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <form
              onSubmit={handleSubmit}
              className="
                rounded-2xl
                border
                border-border
                bg-card
                p-6
                shadow-card
                sm:p-8
              "
            >

              {/* FORM HEADER */}

              <div className="mb-7">

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[1.5px]
                    text-primary
                  "
                >
                  Send a Message
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-text
                  "
                >
                  Tell Me About Your Project
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-muted
                  "
                >
                  Whether it's a job opportunity, website,
                  technical issue, or collaboration, I'd be
                  happy to hear from you.
                </p>

              </div>


              {/* =================================
                  NAME + EMAIL
              ================================= */}

              <div
                className="
                  grid
                  gap-5
                  sm:grid-cols-2
                "
              >

                {/* NAME */}

                <div>

                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-text
                    "
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="John Doe"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-border
                      bg-input
                      px-4
                      py-3
                      text-sm
                      text-text
                      outline-none
                      transition-all
                      placeholder:text-muted-dark
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/20
                    "
                  />

                </div>


                {/* EMAIL */}

                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-text
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-border
                      bg-input
                      px-4
                      py-3
                      text-sm
                      text-text
                      outline-none
                      transition-all
                      placeholder:text-muted-dark
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/20
                    "
                  />

                </div>

              </div>


              {/* =================================
                  SUBJECT
              ================================= */}

              <div className="mt-5">

                <label
                  htmlFor="subject"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-text
                  "
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Job opportunity / Project inquiry"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-border
                    bg-input
                    px-4
                    py-3
                    text-sm
                    text-text
                    outline-none
                    transition-all
                    placeholder:text-muted-dark
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/20
                  "
                />

              </div>


              {/* =================================
                  MESSAGE
              ================================= */}

              <div className="mt-5">

                <div
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                  "
                >

                  <label
                    htmlFor="message"
                    className="
                      text-sm
                      font-medium
                      text-text
                    "
                  >
                    Message
                  </label>

                  <span
                    className="
                      text-xs
                      text-muted-dark
                    "
                  >
                    {formData.message.length}/{maxMessageLength}
                  </span>

                </div>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  maxLength={maxMessageLength}
                  placeholder="Tell me about your project, job opportunity, or technical concern..."
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-border
                    bg-input
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-text
                    outline-none
                    transition-all
                    placeholder:text-muted-dark
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/20
                  "
                />

              </div>


              {/* =================================
                  STATUS
              ================================= */}

              {status === "success" && (

                <div
                  role="status"
                  className="
                    mt-5
                    rounded-lg
                    border
                    border-success/30
                    bg-success/10
                    px-4
                    py-3
                    text-sm
                    text-success
                  "
                >
                  ✓ Message sent successfully. I'll get back
                  to you as soon as possible.
                </div>

              )}


              {status === "error" && (

                <div
                  role="alert"
                  className="
                    mt-5
                    rounded-lg
                    border
                    border-danger/30
                    bg-danger/10
                    px-4
                    py-3
                    text-sm
                    text-danger
                  "
                >
                  ✕ Unable to send your message right now.
                  Please try again or contact me directly by email.
                </div>

              )}


              {/* =================================
                  SUBMIT BUTTON
              ================================= */}

              <button
                type="submit"
                disabled={sending}
                className="
                  mt-6
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-gradient-primary
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-text
                  shadow-primary
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-primary-lg
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:translate-y-0
                "
              >

                {sending ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-text/30
                        border-t-text
                      "
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span>→</span>
                  </>
                )}

              </button>

            </form>

          </motion.div>


          {/* =====================================
              BOOKING
          ===================================== */}

          <motion.div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-card
              shadow-card
            "
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >

            {/* BOOKING HEADER */}

            <div
              className="
                border-b
                border-border
                p-6
                sm:p-8
              "
            >

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >

                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-accent/10
                      text-lg
                    "
                  >
                    📅
                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[1.5px]
                        text-accent
                      "
                    >
                      Schedule a Call
                    </p>

                    <h3
                      className="
                        mt-1
                        text-xl
                        font-bold
                        text-text
                      "
                    >
                      {booking.title || "Book a Meeting"}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        text-sm
                        text-muted
                      "
                    >
                      {booking.meetingDuration ||
                        "Choose a convenient time"}
                    </p>

                  </div>

                </div>

              </div>


              <p
                className="
                  mt-5
                  text-sm
                  leading-6
                  text-muted
                "
              >
                {booking.description ||
                  "Choose a convenient date and time for us to discuss a project or opportunity."}
              </p>

            </div>


            {/* CALENDLY */}

            <div className="bg-bg-secondary">

              {booking.enabled && booking.calendarUrl ? (

                <InlineWidget
                  url={booking.calendarUrl}
                  styles={{
                    height: "650px",
                    width: "100%",
                  }}
                />

              ) : (

                <div
                  className="
                    flex
                    h-[650px]
                    items-center
                    justify-center
                    p-8
                    text-center
                  "
                >

                  <div>

                    <div className="mb-4 text-4xl">
                      📅
                    </div>

                    <h4
                      className="
                        text-lg
                        font-semibold
                        text-text
                      "
                    >
                      Calendar Coming Soon
                    </h4>

                    <p
                      className="
                        mx-auto
                        mt-2
                        max-w-sm
                        text-sm
                        leading-6
                        text-muted
                      "
                    >
                      The meeting calendar is currently
                      unavailable. Please contact me directly
                      by email.
                    </p>

                    <a
                      href={`mailto:${contact.email}`}
                      className="
                        mt-5
                        inline-flex
                        items-center
                        rounded-lg
                        bg-gradient-primary
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-text
                      "
                    >
                      Email Me →
                    </a>

                  </div>

                </div>

              )}

            </div>

          </motion.div>

        </div>


        {/* =====================================
            FINAL CTA
        ===================================== */}

        <motion.div
          className="
            mt-8
            text-center
          "
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
        >

          <p
            className="
              text-sm
              text-muted
            "
          >
            Prefer a quick conversation?
          </p>

          {booking.calendarUrl && booking.enabled && (

            <a
              href={booking.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-2
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-primary
                transition-colors
                hover:text-accent
              "
            >
              Schedule a meeting
              <span>→</span>
            </a>

          )}

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;