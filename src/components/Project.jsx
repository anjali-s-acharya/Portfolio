import { motion } from "motion/react";

const TopologyGlyph = () => (
  <svg viewBox="0 0 200 120" className="absolute inset-0 size-full" fill="none">
    <defs>
      <linearGradient id="topology-stroke" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a855f7" />
        <stop offset="1" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <g stroke="url(#topology-stroke)" strokeWidth="1.5" opacity="0.6">
      <line x1="30" y1="30" x2="90" y2="60" />
      <line x1="90" y1="60" x2="30" y2="90" />
      <line x1="90" y1="60" x2="150" y2="30" />
      <line x1="90" y1="60" x2="150" y2="90" />
      <line x1="150" y1="30" x2="180" y2="60" />
      <line x1="150" y1="90" x2="180" y2="60" />
    </g>
    <g fill="url(#topology-stroke)">
      <circle cx="30" cy="30" r="5" />
      <circle cx="30" cy="90" r="5" />
      <circle cx="90" cy="60" r="7" />
      <circle cx="150" cy="30" r="5" />
      <circle cx="150" cy="90" r="5" />
      <circle cx="180" cy="60" r="4" />
    </g>
  </svg>
);

const TerminalGlyph = () => (
  <svg viewBox="0 0 200 120" className="absolute inset-0 size-full" fill="none">
    <defs>
      <linearGradient id="terminal-stroke" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a855f7" />
        <stop offset="1" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <g stroke="url(#terminal-stroke)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.65">
      <path d="M70 35 L45 60 L70 85" />
      <path d="M130 35 L155 60 L130 85" />
      <path d="M108 30 L92 90" />
    </g>
  </svg>
);

const glyphs = {
  topology: TopologyGlyph,
  terminal: TerminalGlyph,
};

const Project = ({ title, tagline, glyph, description, subDescription, href, tags }) => {
  const Glyph = glyphs[glyph];

  return (
    <motion.div
      className="relative flex flex-col overflow-hidden border group border-white/10 rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="relative h-36 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-cyan-900/30" />
        {Glyph && (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            <Glyph />
          </div>
        )}
        <div className="absolute w-32 h-32 rounded-full -top-10 -right-10 bg-purple-500/20 blur-2xl" />
        <div className="absolute w-32 h-32 rounded-full -bottom-10 -left-10 bg-cyan-500/20 blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 p-6">
        {tagline && (
          <p className="text-xs font-medium tracking-wide uppercase text-sand">{tagline}</p>
        )}
        <h3 className="mt-1 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm text-neutral-300">{description}</p>

        <ul className="mt-4 space-y-2">
          {subDescription.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-400">
              <span className="mt-2 rounded-full size-1.5 shrink-0 bg-gradient-to-r from-purple-400 to-cyan-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs border rounded-full text-neutral-300 bg-white/5 border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 mt-6 font-medium cursor-pointer hover-animation"
        >
          View on GitHub
          <img src="assets/arrow-right.svg" className="w-5" alt="" />
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
