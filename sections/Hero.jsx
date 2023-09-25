"use client";

import { motion } from "framer-motion";

import styles from "../styles/index";
import {
  slideIn,
  staggerContainer,
  textContainer,
  textVariant,
} from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm-pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flext  flex-col justify-center items-center relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading}`}
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.4)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading}`}> Ma</h1>
          <div className={`${styles.heroDText}`} />
          <h1 className={`${styles.heroHeading}`}>ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[350px] rounded-tl-[140px]   hero-gradient  z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-[10] relative"
        />

        <img
          src="/stamp.png"
          alt="stamp"
          className="object-contain absolute -mb-[50px] w-[100px] z-[10] h-[100px] bottom-0 right-0 opacity-[0.9]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
