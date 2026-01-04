import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, type Variants } from "motion/react";

const navVariants: Variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationLinks = [
    {
      title: "Home",
      ref: "#home",
    },
    {
      title: "Expirence",
      ref: "#expirence",
    },
    {
      title: "Projects",
      ref: "#projects",
    },
  ];
  return (
    <header className="flex justify-between md:justify-around items-center py-2 px-4 space-x-4 relative">
      <a
        href="#home"
        className="text-white text-2xl md:text-3xl font-medium hover:text-teal-300 transition-transform"
      >
        &lt;Mohammed/<span className="text-teal-300">Dev</span>&gt;
      </a>
      <Menu
        color="#5eead4"
        onClick={() => setIsOpen(true)}
        className="md:hidden"
      />

      <motion.nav
        variants={navVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="md:hidden fixed w-[80vw] h-screen max-w-sm z-20 right-0 top-0 p-6 bg-neutral-900 overflow-y-auto"
      >
        <div className="flex justify-end md:hidden">
          <X
            color="#5eead4"
            onClick={() => setIsOpen(false)}
            className="mb-8"
          />
        </div>
        <div className="flex flex-col space-y-8 text-2x w-full">
          {navigationLinks.map((nav, idx) => (
            <a
              key={idx}
              href={nav.ref}
              className="rounded-full px-4 text-center font-medium text-teal-300 hover:text-teal-300 hover:bg-neutral-600/30 duration-300 transition"
            >
              {nav.title}
            </a>
          ))}
          <a
            href="#timeline"
            className=" inline-block rounded-full p-2 text-center font-medium bg-teal-600 hover:bg-teal-400/80 hover:scale-115 duration-300 transition"
          >
            Let's Talk
          </a>
        </div>
      </motion.nav>

      <nav className="hidden md:flex justify-around items-center px-6 md:px-8 py-4 text-white ">
        <div className="text-sm md:text-md border border-neutral-700 rounded-full py-2 px-4 space-x-4 ">
          {navigationLinks.map((nav, idx) => (
            <a
              key={idx}
              href={nav.ref}
              className="rounded-full py-2 px-4 text-center font-medium hover:text-teal-300 hover:bg-neutral-600/30 duration-300 transition"
            >
              {nav.title}
            </a>
          ))}
          <a
            href="#contact"
            className=" inline-block rounded-full p-2 text-center font-medium bg-teal-600 hover:bg-teal-400/80 hover:scale-115 duration-300 transition"
          >
            Let's Talk
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
