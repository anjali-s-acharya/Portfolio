import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center gap-4">
                <div className="relative size-14">
                    <div className="absolute inset-0 rounded-full border-2 border-white/10" />
                    <div className="absolute inset-0 rounded-full border-2 border-t-lavender border-r-aqua border-b-transparent border-l-transparent animate-spin" />
                </div>
                <p className="text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {Math.round(progress)}% loaded
                </p>
            </div>
        </Html>
    );
};

export default Loader;