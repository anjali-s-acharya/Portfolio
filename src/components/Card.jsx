import { motion } from "motion/react";
import { useState } from "react";

const Card = ({ position, rotate = 0, text, image, containerRef, index = 0 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const floatDuration = 4 + (index % 3);
  const floatDelay = (index % 5) * 0.4;

  const entrance = {
    initial: { opacity: 0, scale: 0.5, rotate: rotate * 1.4 },
    whileInView: { opacity: 1, scale: 1, rotate },
    viewport: { once: true },
    transition: { delay: index * 0.05, type: "spring", stiffness: 300, damping: 20 },
  };

  return (
    <div
      className="absolute animate-float"
      style={{
        ...position,
        animationDuration: `${floatDuration}s`,
        animationDelay: `${floatDelay}s`,
      }}
    >
      {image && !text ? (
        <motion.img
          className="w-16 cursor-grab active:cursor-grabbing drop-shadow-2xl"
          src={image}
          {...entrance}
          whileHover={{
            scale: 1.15,
            rotate: 0,
            zIndex: 50,
            filter: "drop-shadow(0 20px 25px rgba(168, 85, 247, 0.4))",
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.95, cursor: "grabbing" }}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        />
      ) : (
        <motion.div
          className="relative px-4 py-3 text-base font-medium text-center rounded-2xl cursor-grab active:cursor-grabbing backdrop-blur-md bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/20 shadow-lg"
          {...entrance}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            zIndex: 50,
            boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
            background: "linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.3))",
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.95 }}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-200">
            {text}
          </span>
          {isDragging && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur-xl -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Card;
