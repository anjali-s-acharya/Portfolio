import { motion } from "motion/react";

const FIELDS = [
  { key: "role", value: '"Software Engineer"' },
  { key: "focus", value: '["network automation", "AI-driven ops", "MCP + LLM tooling"]' },
  { key: "experience", value: '"3+ years"' },
  { key: "based_in", value: '"India"' },
];

const IntroTerminal = () => (
  <div className="w-full max-w-sm overflow-hidden text-xs border shadow-xl rounded-2xl border-white/10 bg-black/50 backdrop-blur-md font-mono sm:text-sm">
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-white/5">
      <span className="rounded-full size-2.5 bg-red-400/70" />
      <span className="rounded-full size-2.5 bg-yellow-400/70" />
      <span className="rounded-full size-2.5 bg-green-400/70" />
      <span className="ml-3 text-neutral-500">whoami.py</span>
    </div>
    <div className="p-4 space-y-1.5 leading-relaxed">
      <p className="text-neutral-500">&gt;&gt;&gt; whoami()</p>
      <p className="text-neutral-300">{"{"}</p>
      {FIELDS.map((field, i) => (
        <motion.p
          key={field.key}
          className="pl-4 break-words"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
        >
          <span className="text-cyan-300">"{field.key}"</span>
          <span className="text-neutral-500">: </span>
          <span className="text-purple-300">{field.value}</span>
          <span className="text-neutral-500">,</span>
        </motion.p>
      ))}
      <p className="text-neutral-300">
        {"}"}
        <span className="inline-block w-2 h-4 ml-1 align-middle bg-cyan-300/80 animate-pulse" />
      </p>
    </div>
  </div>
);

export default IntroTerminal;
