import Container from "../custom-components/Container";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";
import Code from "../custom-components/Code";
const Hero = () => {
  const variants = {
    initial: {
      backgroundColor: "#fff",
    },
    onHover: {
      scale: 1.05,
      backgroundColor: "#5eead4",
    },
  };

  const iconVariants = {
    initial: { rotate: 0 },
    onHover: {
      rotate: 45,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <section id="home">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
        <div className="flex flex-col space-y-4 mb-10">
          <div className="brightness-175 flex flex-row bg-teal-700/20 text-teal-600 px-4 font-medium text-sm rounded-full items-center py-2 w-fit border border-teal-300">
            <motion.span
              initial={{ opacity: 1 }}
              animate={{
                opacity: 0.5,
                transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              className="w-2 h-2 rounded-full bg-teal-400 block mx-2"
            ></motion.span>
            <h2 className="uppercase">Open for freelance</h2>
          </div>

          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight py-6 ">
            Building <br />
            <span className="text-transparent bg-linear-to-r from-teal-400 from-10% via-emerald-300 via-40% to-violet-500 to-90% bg-clip-text ">
              Fullstack
            </span>
            <br />
            Applictions.
          </h1>

          <p className="text-neutral-400 text-xl max-w-lg">
            Hi, I’m Mohammed. I build robust, scalable digital products — from
            clean architecture in the backend to intuitive, responsive
            interfaces in the frontend. I turn complex ideas into elegant,
            maintainable systems.
          </p>

          <div className="space-x-4 items-center flex py-6">
            <motion.a
              href="#projects"
              initial="initial"
              whileHover="onHover"
              whileTap={{
                scale: 0.9,
                y: 1,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              variants={variants}
              className="flex text-black rounded-full font-bold p-4 hover:cursor-pointer"
            >
              View Projects
              <motion.span
                className="ml-3 inline-block"
                variants={iconVariants}
              >
                <ArrowUpRight />
              </motion.span>
            </motion.a>
            <a
              href="https://github.com/Mohammedaabdu"
              target="_blank"
              className="bg-neutral-950 text-white px-6 py-4 rounded-full font-bold border border-slate-800 hover:cursor-pointer flex hover:bg-neutral-600/30 duration-300 transition"
            >
              <SiGithub className="mr-3" />
              Github
            </a>
          </div>
        </div>
        <Code></Code>
      </Container>
    </section>
  );
};

export default Hero;
