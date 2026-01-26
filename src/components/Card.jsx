import { motion } from "motion/react";
import { useState } from "react";

const Card = ({ style, text, image, containerRef }) => {
  const [isDragging, setIsDragging] = useState(false);

  return image && !text ? (
    <motion.img
      className="absolute w-16 cursor-grab active:cursor-grabbing drop-shadow-2xl"
      src={image}
      style={style}
      whileHover={{ 
        scale: 1.15,
        rotate: 0,
        zIndex: 50,
        filter: "drop-shadow(0 20px 25px rgba(168, 85, 247, 0.4))"
      }}
      whileTap={{ scale: 0.95, cursor: "grabbing" }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  ) : (
    <motion.div
      className="absolute px-4 py-3 text-base font-medium text-center rounded-2xl cursor-grab active:cursor-grabbing backdrop-blur-md bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/20 shadow-lg"
      style={style}
      whileHover={{ 
        scale: 1.1,
        rotate: 0,
        zIndex: 50,
        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
        background: "linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.3))"
      }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
  );
};

export default Card;