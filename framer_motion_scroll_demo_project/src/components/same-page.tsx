import { BranchIcon } from "../icons/branch";
import { stylesWithCssVar } from "../utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const SamePage = () => {
  return (
    <section>
      <div className="relative h-[800vh]">
        <div className="sticky top-1/2 flex origin-center -translate-y-1/2 justify-center">
          <motion.div   
            className="translate-x-centered-offset absolute left-1/2 top-1/2 flex w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center "
          >
            <img src="/main-screen.svg" className="h-auto w-full" />
            <motion.img
              className="absolute left-[13%] top-1/2 h-[1.5vw] w-[1.5vw] translate-y-1/2 rounded-full border border-[#c82] object-cover will-change-transform"
              src="https://unsplash.com/photos/sibVwORYqs0/download?force=true&w=128&h=128"
            />
            <motion.span
              className="mt-3 block text-2xl text-white"
            >
              <BranchIcon className="mr-3 inline-block h-12 w-12" /> Feature
              branch
            </motion.span>
          </motion.div>
          <motion.div
            className="translate-x-centered-offset absolute left-1/2 top-1/2 flex w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center"
          >
            <img src="/loading-screen.svg" className="h-auto w-full" />
            <motion.div
              className="absolute inset-0"
            >
              <img src="/main-screen.svg" className="h-auto w-full" />
            </motion.div>
            <motion.span
              className="mt-3 block text-2xl text-white"
            >
              <BranchIcon className="mr-3 inline-block h-12 w-12" /> Frontend
              FYI's branch
            </motion.span>
          </motion.div>

          <motion.p
            className="translate-y-centered-offset absolute top-1/2 left-[calc(50%-60rem)] w-[50rem] pl-16 text-2xl leading-tight text-white"
          >
            <span className="text-primary">Built for flow</span>
            <br />
            Spin up a new branch for any sized project in seconds.
          </motion.p>
        </div>
        <motion.p
          className="translate-y-centered-offset top-1/2 left-[20px] w-[300px] pl-16 text-2xl leading-tight text-white"
        >
          Not only share code,
          <br />
          <span className="text-primary">share the context.</span>
        </motion.p>
        <motion.p
          className="translate-y-centered-offset top-1/2 right-[20px] w-[300px] pr-16 text-xl leading-tight text-white"
        >
          Sometimes it's not about code.
          <br />
          <span className="text-primary">
            Get everybody on the same page. Literally.
          </span>
        </motion.p>
      </div>
    </section>
  );
};
