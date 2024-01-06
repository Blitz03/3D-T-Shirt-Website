import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";

export default function Home() {
  const snap = useSnapshot(state);

  // Enables the animation of components that have been removed from the tree.
  return (
    <AnimatePresence>
      {/* Checking if whether we are on the home page or not */}
      {snap.intro && (
        // A regular section element but with an animations
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}>
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3d
                Customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>

              <CustomButton
                type="filled"
                title="Customize it"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
