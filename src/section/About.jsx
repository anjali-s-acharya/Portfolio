import { useRef } from "react";
import { motion } from "motion/react";
import Card from "../components/Card";
import { Globe, GLOBE_THEME_CONFIG } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import SectionHeading from "../components/SectionHeading";
import IntroTerminal from "../components/IntroTerminal";

const About = () => {
  const grid2Container = useRef();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative c-space section-spacing" id="about">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <SectionHeading>About Me</SectionHeading>

      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[18rem]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Grid 1 - Enhanced */}
        <motion.div 
          className="relative flex items-end overflow-hidden border grid-1 group border-white/10 rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 backdrop-blur-sm"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -6, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5" />
          <div className="absolute z-0 hidden pt-8 pr-8 top-2 right-2 sm:flex opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1">
            <IntroTerminal />
          </div>
          <div className="relative z-10 p-6">
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Hi, I'm Anjali
            </p>
            <p className="mt-2 text-base text-neutral-300">
              Software Engineer with 3 years of experience building network automation, observability,
              and AI-driven operational tools — from MCP-powered LLM integrations to telemetry-driven
              workflows that improve network visibility and operational efficiency.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo/80" />
        </motion.div>

        {/* Grid 2 - Enhanced Interactive Playground */}
        <motion.div 
          className="relative overflow-hidden border grid-2 border-white/10 rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 backdrop-blur-sm group"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -6, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5" />
          
          <div
            ref={grid2Container}
            className="relative flex items-center justify-center w-full h-full p-4"
          >
            <motion.p 
              className="flex items-end text-3xl font-bold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              CODE IS CRAFT
            </motion.p>
            
            {/* Top Row */}
            <Card
              index={0}
              rotate={12}
              position={{ top: "5%", left: "8%" }}
              text="Team Player"
              containerRef={grid2Container}
            />
            <Card
              index={1}
              rotate={-8}
              position={{ top: "3%", left: "35%" }}
              text="Agile"
              containerRef={grid2Container}
            />
            <Card
              index={2}
              rotate={15}
              position={{ top: "5%", right: "8%" }}
              text="Automation"
              containerRef={grid2Container}
            />

            {/* Upper area */}
            <Card
              index={3}
              rotate={10}
              position={{ top: "25%", right: "3%" }}
              text="Fast Learner"
              containerRef={grid2Container}
            />
            <Card
              index={4}
              rotate={20}
              position={{ top: "15%", right: "32%" }}
              text="AIOps"
              containerRef={grid2Container}
            />
            <Card
              index={5}
              rotate={8}
              position={{ top: "42%", right: "26%" }}
              text="Telemetry"
              containerRef={grid2Container}
            />

            {/* Lower area */}
            <Card
              index={6}
              rotate={12}
              position={{ bottom: "45%", left: "5%" }}
              text="Problem Solver"
              containerRef={grid2Container}
            />
            <Card
              index={7}
              rotate={-10}
              position={{ bottom: "28%", right: "5%" }}
              text="Adaptable"
              containerRef={grid2Container}
            />
            <Card
              index={8}
              rotate={10}
              position={{ bottom: "28%", left: "50%" }}
              text="MCP"
              containerRef={grid2Container}
            />

            {/* Bottom Row */}
            <Card
              index={9}
              rotate={-12}
              position={{ bottom: "5%", left: "10%" }}
              text="Critical Thinking"
              containerRef={grid2Container}
            />
            <Card
              index={10}
              rotate={8}
              position={{ bottom: "3%", left: "38%" }}
              text="CI/CD"
              containerRef={grid2Container}
            />
          </div>
          
          {/* Animated border glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Grid 3 - Enhanced */}
        <motion.div 
          className="relative overflow-hidden border grid-3 group border-white/10 rounded-3xl bg-gradient-to-br from-black/90 to-neutral-900/80 backdrop-blur-sm"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -6, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
          <div className="relative z-10 p-6 w-[50%]">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Time Zone
            </p>
            <p className="mt-2 text-sm text-neutral-300">
              I'm based in India, and work with global teams across different
              time zones to ensure seamless deliverables.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%] group-hover:scale-110 transition-transform duration-700">
            <Globe config={GLOBE_THEME_CONFIG} />
          </figure>
        </motion.div>

        {/* Grid 4 - Enhanced */}
        <motion.div 
          className="relative overflow-hidden border grid-4 group border-white/10 rounded-3xl bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-indigo-900/40 backdrop-blur-sm"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -6, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
          <motion.div 
            className="relative z-10 flex flex-col items-center justify-center gap-6 p-6 size-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-2xl font-bold text-center text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Get in touch at
            </p>
            <CopyEmailButton />
          </motion.div>
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 rounded-full bg-purple-500/20 blur-2xl"
              animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-pink-500/20 blur-2xl"
              animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Grid 5 - Enhanced */}
        <motion.div 
          className="relative overflow-hidden border grid-5 group border-white/10 rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 backdrop-blur-sm"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -6, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
          <div className="relative z-10 p-6 w-[50%]">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Tech Stack
            </p>
            <p className="mt-2 text-sm text-neutral-300">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable solutions.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 group-hover:scale-[1.3] transition-transform duration-700">
            <Frameworks />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;