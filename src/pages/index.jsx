import * as React from "react";
import { motion } from "framer-motion";

import {
  SiNodedotjs as SiNodeJs,
  SiJavascript,
  SiVisualstudiocode,
  SiReact,
  SiGatsby,
  SiNextdotjs as SiNextJs,
  SiStyledcomponents as SiStyledComponents,
  SiCsharp,
  SiCplusplus,
  SiPython,
  SiJava,
  SiGit
} from "react-icons/si";
import { HiLockClosed } from "react-icons/hi";
import { TechItem } from "../components/TechItem";

import TypeWriter from "../components/TypeWriter";
import Age from "../components/Age";

/* <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Ryan 👌</h1> */
const Index = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: "easeOut", duration: 0.15 }}
      className="mt-24 w-full mb-32"
    >
      <TypeWriter
        text="Hey, I'm Ryan 👌"
        onComplete={() => setLoaded(true)}
      />
      {loaded && (
        <>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12"
          >
            I'm a <Age /> year old Canadian software/web developer that is on the autism spectrum and has high functioning autism. I'm actively pursuing software development
            and full-stack web development.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="font-medium text-3xl mb-4"
          >What I Do 💭</motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12"
          >
            I'm extending my knowledge for everything about technology, including learning more about web
            frameworks or different software languages. Sometimes, I also extend my knowledge about
            cybersecurity and public key infrastructures.
            You can take a look at my company <a className="text-gray-900 dark:text-gray-400" target="_blank" href="https://www.emeraldsys.xyz">here</a>.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="font-medium text-3xl mb-4"
          >Technologies 💻</motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6"
          >
            I use a combination of different languages and tools to further guide me in my
            development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12"
          >
            <TechItem icon={SiNodeJs} name="Node.js" />
            <TechItem icon={SiJavascript} name="JavaScript" />
            <TechItem icon={SiVisualstudiocode} name="VSCode" />
            <TechItem icon={SiReact} name="React.js" />
            <TechItem icon={SiGatsby} name="Gatsby.js" />
            <TechItem icon={SiNextJs} name="Next.js" />
            <TechItem icon={SiStyledComponents} name="styled-components" />
            <TechItem icon={SiCsharp} name="CSharp" />
            <TechItem icon={SiCplusplus} name="C++" />
            <TechItem icon={SiPython} name="Python" />
            <TechItem icon={SiJava} name="Java" />
            <TechItem icon={SiGit} name="Git" />
            <TechItem icon={HiLockClosed} name="PKI" />
          </motion.div>
        </>
      )}
    </motion.div>
  )
};

export default Index;

export { Head } from "../layouts";