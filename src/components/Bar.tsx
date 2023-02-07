import { motion } from "framer-motion";
import { Skill } from "types";

type BarProps = {
  data: Skill;
};

const Bar: React.FC<BarProps> = ({ data: { Icon, level, name } }) => {
  const variants = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 45,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-green-default">
        <motion.span variants={variants} initial="initial" animate="animate">
          <Icon className="mr-3 " />
        </motion.span>
        <motion.span variants={variants} initial="initial" animate="animate">
          {name}
        </motion.span>
      </div>
    </div>
  );
};

export default Bar;
