import { motion, AnimatePresence } from "motion/react";

const Alert = ({ type, text }) => {
  const alertVarients = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };

  const isSuccess = type !== "danger";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 flex items-center justify-center bottom-5 right-5"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVarients}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div
          className={`relative overflow-hidden backdrop-blur-xl rounded-2xl shadow-2xl border ${
            isSuccess
              ? "bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border-emerald-400/30"
              : "bg-gradient-to-br from-red-500/20 via-rose-500/20 to-pink-500/20 border-red-400/30"
          } p-6 min-w-[320px] max-w-md`}
        >
          {/* Animated background gradient */}
          <div
            className={`absolute inset-0 opacity-30 ${
              isSuccess ? "bg-gradient-to-r from-emerald-400 to-cyan-400" : "bg-gradient-to-r from-red-400 to-pink-400"
            } blur-3xl`}
          />

          <div className="relative flex items-start gap-4">
            {/* Icon */}
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                isSuccess ? "bg-emerald-500/30 ring-2 ring-emerald-400/50" : "bg-red-500/30 ring-2 ring-red-400/50"
              }`}
            >
              {isSuccess ? (
                <svg
                  className="w-6 h-6 text-emerald-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-red-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <h3
                className={`text-sm font-bold mb-1 ${
                  isSuccess ? "text-emerald-200" : "text-red-200"
                }`}
              >
                {isSuccess ? "Success!" : "Error"}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">{text}</p>
            </div>
          </div>

          {/* Progress bar */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 ${
              isSuccess ? "bg-gradient-to-r from-emerald-400 to-cyan-400" : "bg-gradient-to-r from-red-400 to-pink-400"
            }`}
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;