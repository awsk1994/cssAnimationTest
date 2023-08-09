import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const Collaboration = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });
    const scale = useTransform(
        scrollYProgress,
        [0.1, 0.4],
        [1, 2.5]
    );
    const x = useTransform(
        scrollYProgress,
        [0.1, 0.25, 0.7, 1],
        ["0%", "-55%", "-60%", "-80%"]
    );

    return (
        <section className="mt-[-30vh]">
            <div ref={targetRef} className="h-[300vh] w-full">
                <div className="sticky top-[10vh]">
                    <div className="flex justify-center">
                        <motion.div style={{x, scale}} className="origin-top">
                            <img
                                src="/main-screen.svg"
                                className="h-[75vh] max-h-[45w] w-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};