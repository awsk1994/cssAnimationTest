import { motion } from "framer-motion";

export const Collaboration = () => {
  return (
    <section className="relative z-10 mt-[-30vh] h-[300vh]">
      <div className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div className="origin-top">
              <motion.img
                src="/main-screen.svg"
                className="h-auto max-h-none w-[70vw]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};