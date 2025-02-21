"use client";

import useObserver from "@/hooks/use-observer";
import { TActiveSection } from "@/store/use-observer-store";
import { motion } from "motion/react";

const ScrollReveal = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: TActiveSection;
}) => {
  const { ref } = useObserver(name);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, stiffness: 100, type: "spring", delay: 0.5 }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
