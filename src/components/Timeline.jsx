"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="relative c-space section-spacing" ref={containerRef}>
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <h2 className="text-heading">My Journey</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full mb-16" />
      
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex justify-start md:gap-10 ${index === 0 ? 'pt-0' : 'pt-10 md:pt-40'}`}
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              {/* Enhanced timeline dot */}
              <div className="absolute flex items-center justify-center -left-[15px]">
                <motion.div 
                  className="absolute w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50">
                  <div className="absolute inset-2 rounded-full bg-midnight" />
                  <div className="absolute inset-3 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
                </div>
              </div>
              
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl">
                <motion.h3 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.date}
                </motion.h3>
                <h3 className="text-3xl text-neutral-300">{item.title}</h3>
                <h3 className="text-2xl font-normal text-neutral-400">{item.job}</h3>
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              {/* Mobile header */}
              <div className="block mb-4 text-left md:hidden">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {item.date}
                </h3>
                <h3 className="text-xl font-bold text-neutral-300">{item.title}</h3>
                <h3 className="text-lg text-neutral-400">{item.job}</h3>
              </div>
              
              {/* Enhanced content card */}
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-white/5 shadow-xl"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.contents.map((content, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 mb-4 last:mb-0"
                  >
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                    <p className="flex-1 text-base leading-relaxed text-neutral-300">
                      {content}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
        
        {/* Enhanced timeline line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"
          />
        </div>
      </div>
    </div>
  );
};