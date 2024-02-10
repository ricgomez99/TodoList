"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import styles from "@/styles";
import Image from "next/image";

const NavBar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-6 relative mx-auto max-w-[1366px]`}>
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth}mx-auto flex justify-between gap-8`}>
      <Image
        src="/check.png"
        alt="Navbar icon"
        width={27}
        height={27}
        className="object-contain w-[27px] h-[27px]"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-black">
        Notes Manager
      </h2>
      <Image
        src="/menu.png"
        alt="menu"
        width={24}
        height={24}
        className="object-contain w-[24px] h-[24px]"
      />
    </div>
  </motion.nav>
);

export default NavBar;
