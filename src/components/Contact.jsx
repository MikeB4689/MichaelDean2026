import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { InlineWidget } from "react-calendly";

const Contact = ({ personalData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          to_email: personalData.contact.email,
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
        w-full
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
              Get In Touch
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
            Let's
            <span className="text-primary"> Connect</span>
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
            Have a project, job opportunity, or technical
            question? Send me a message or book a meeting.
          </p>

        </div>


        {/* =====================================
            CONTACT OPTIONS
        ===================================== */}

        <div
          className="
            mb-10
            grid
            gap-5
            md:grid-cols-2
          "
        >

          {/* EMAIL CARD */}

          <a
            href={`mailto:${personalData.contact.email}`}
            className="
              group
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

            <div className="flex items-start gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-primary/30
                  bg-primary/10
                  text-xl
                  text-primary
                "
              >
                @
              </div>

              <div className="flex-1">

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-primary
                  "
                >
                  Prefer Email?
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-semibold
                    text-text
                  "
                >
                  Send Me an Email
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-muted
                  "
                >
                  Send me your questions, project details,
                  or job opportunities directly.
                </p>

                <span
                  className="
                    mt-4
                    inline-block
                    text-sm
                    font-medium
                    text-primary
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
                  {personalData.contact.email} →
                </span>

              </div>

            </div>

          </a>


          {/* CALENDLY CARD */}

          <a
            href={personalData.booking?.calendarUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-2xl
              border
              border-border
              bg-card
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-accent
              hover:shadow-primary
            "
          >

            <div className="flex items-start gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-accent/30
                  bg-accent/10
                  text-xl
                  text-accent
                "
              >
                📅
              </div>

              <div className="flex-1">

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-accent
                  "
                >
                  Let's Talk
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-semibold
                    text-text
                  "
                >
                  {personalData.booking?.title || "Book a Meeting"}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-muted
                  "
                >
                  {personalData.booking?.description ||
                    "Choose a convenient date and time for an online meeting."}
                </p>

                <span
                  className="
                    mt-4
                    inline-block
                    text-sm
                    font-medium
                    text-accent
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
                  {personalData.booking?.buttonText ||
                    "Schedule a meeting →"}
                </span>

              </div>

            </div>

          </a>

        </div>


        {/* =====================================
            FORM + CALENDLY
        ===================================== */}

        <div
          className="
            grid
            gap-6
            lg:grid-cols-2
          "
        >

          {/* =====================================
              CONTACT FORM
          ===================================== */}

          <form
            onSubmit={handleSubmit}
            className="
              rounded-2xl
              border
              border-border
              bg-card
              p-6
              sm:p-8
            "
          >

            <div className="mb-8">

              <h3
                className="
                  text-2xl
                  font-bold
                  text-text
                "
              >
                Send Me a Message
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-muted
                "
              >
                I'll receive your message directly through email.
              </p>

            </div>


            {/* NAME + EMAIL */}

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
                  placeholder="Your name"
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
                    focus:ring-1
                    focus:ring-primary
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
                    focus:ring-1
                    focus:ring-primary
                  "
                />

              </div>

            </div>


            {/* SUBJECT */}

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
                placeholder="Project inquiry"
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
                  focus:ring-1
                  focus:ring-primary
                "
              />

            </div>


            {/* MESSAGE */}

            <div className="mt-5">

              <label
                htmlFor="message"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-text
                "
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project..."
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
                  text-text
                  outline-none
                  transition-all
                  placeholder:text-muted-dark
                  focus:border-primary
                  focus:ring-1
                  focus:ring-primary
                "
              />

            </div>


            {/* STATUS */}

            {status === "success" && (

              <div
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
                ✓ Message sent successfully! I'll get back to you soon.
              </div>

            )}


            {status === "error" && (

              <div
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
                ✕ Something went wrong. Please try again.
              </div>

            )}


            {/* SUBMIT */}

            <button
              type="submit"
              disabled={sending}
              className="
                mt-6
                inline-flex
                w-full
                items-center
                justify-center
                rounded-lg
                bg-gradient-primary
                px-7
                py-3
                text-sm
                font-semibold
                text-text
                shadow-primary
                transition-all
                duration-300
                hover:-translate-y-1
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>

          </form>


          {/* =====================================
              CALENDLY
          ===================================== */}

          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-card
            "
          >

            <div
              className="
                border-b
                border-border
                p-6
                sm:p-8
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-accent/30
                    bg-accent/10
                    text-xl
                  "
                >
                  📅
                </div>

                <div>

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-text
                    "
                  >
                    {personalData.booking?.title ||
                      "Book a Meeting"}
                  </h3>

                  <p className="text-sm text-muted">
                    {personalData.booking?.meetingDuration ||
                      "Choose a convenient time"}
                  </p>

                </div>

              </div>

            </div>


            {/* CALENDLY WIDGET */}

            <div className="px-2 pb-2 sm:px-4">

              {personalData.booking?.calendarUrl ? (

                <InlineWidget
                  url={personalData.booking.calendarUrl}
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
                    p-6
                    text-center
                  "
                >

                  <div>

                    <div className="mb-3 text-4xl">
                      📅
                    </div>

                    <h4 className="font-semibold text-text">
                      Calendar Coming Soon
                    </h4>

                    <p className="mt-2 text-sm text-muted">
                      The meeting calendar has not been configured yet.
                    </p>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;