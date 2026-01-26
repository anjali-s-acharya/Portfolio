import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { Globe } from "../components/globe";
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
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      <h2 className="text-heading">Contact Me</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full mb-16" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Enhanced Globe with custom config - Animated from left */}
          <motion.div 
            className="hidden lg:block w-full lg:w-1/2 max-w-lg"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
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
                  config={{
                    width: 800,
                    height: 800,
                    onRender: () => {},
                    devicePixelRatio: 2,
                    phi: 0,
                    theta: 0.3,
                    dark: 1,
                    diffuse: 1.2,
                    mapSamples: 16000,
                    mapBrightness: 6,
                    baseColor: [0.3, 0.3, 0.3],
                    markerColor: [0.1, 0.8, 1],
                    glowColor: [0.2, 0.5, 1],
                    markers: [
                      { location: [14.5995, 120.9842], size: 0.03 },
                      { location: [19.076, 72.8777], size: 0.1 },
                      { location: [23.8103, 90.4125], size: 0.05 },
                      { location: [30.0444, 31.2357], size: 0.07 },
                      { location: [39.9042, 116.4074], size: 0.08 },
                      { location: [-23.5505, -46.6333], size: 0.1 },
                      { location: [19.4326, -99.1332], size: 0.1 },
                      { location: [40.7128, -74.006], size: 0.1 },
                      { location: [34.6937, 135.5022], size: 0.05 },
                      { location: [41.0082, 28.9784], size: 0.06 },
                    ],
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Animated from right */}
          <motion.div 
            className="flex flex-col items-center justify-center w-full lg:w-1/2 max-w-md p-5 border border-white/10 rounded-2xl bg-primary"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
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