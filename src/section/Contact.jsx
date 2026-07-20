import { useState, useEffect } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { Globe, GLOBE_THEME_CONFIG } from "../components/globe";
import { mySocials } from "../constants";
import SectionHeading from "../components/SectionHeading";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("YBFESflnAh_x07Jey");
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_jccz9rj",
        "template_c9zlrpk",
        {
          from_name: formData.name,
          to_name: "Anjali",
          from_email: formData.email,
          to_email: "anjaliacharya0512@gmail.com",
          message: formData.message,
        },
        "_ZOoNehg_GQwIAwI7"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };
  return (
    <section id="contact" className="relative c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        colors={["#7a57db", "#33c2cc"]}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <SectionHeading>Contact Me</SectionHeading>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Enhanced Globe with custom config - Animated from left */}
          <motion.div 
            className="hidden lg:block w-full lg:w-1/2 max-w-lg"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-600/10 blur-2xl" />
              
              {/* Globe container with custom styling */}
              <div className="relative z-10 rounded-full overflow-hidden">
                <Globe
                  className="w-full h-auto scale-110 group-hover:scale-115 transition-transform duration-700"
                  config={GLOBE_THEME_CONFIG}
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Animated from right */}
          <motion.div 
            className="flex flex-col items-center justify-center w-full lg:w-1/2 max-w-md p-5 border border-white/10 rounded-2xl bg-primary"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Hiring for a network automation, DevOps, or AI-driven ops role? Want to
            talk shop about MCP and LLM-assisted troubleshooting? I'd love to hear
            from you.
          </p>
          <div className="flex gap-3">
            {mySocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.name}
                className="flex items-center justify-center border rounded-full size-11 border-white/10 bg-white/5 hover-animation hover:bg-white/10"
              >
                <img src={social.icon} className="size-5 brightness-0 invert" alt="" />
              </a>
            ))}
          </div>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;