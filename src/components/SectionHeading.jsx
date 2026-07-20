import { motion } from "motion/react";

const SectionHeading = ({ children }) => (
  <>
    <motion.h2
      className="text-heading"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
    <motion.div
      className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full mb-16"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
  </>
);

export default SectionHeading;
