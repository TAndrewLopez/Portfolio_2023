import { fadeInUp, stagger } from "animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Project } from "types";

type ProjectCardProps = {
  project: Project;
  showDetails: number | null;
  setShowDetails: (id: null | number) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: {
    id,
    name,
    deployedURL,
    description,
    githubURL,
    imageURL,
    technologies,
  },
  showDetails,
  setShowDetails,
}) => {
  return (
    <div>
      <div className="w-full">
        <Image
          width={300}
          height={150}
          src={imageURL}
          alt={name}
          className="cursor-pointer"
          onClick={() => setShowDetails(id)}
          style={{ width: "100%" }}
          priority
        />
      </div>
      <p className="my-2 text-center">{name}</p>
      {showDetails === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100">
              <Image
                width={300}
                height={150}
                src={imageURL}
                alt={name}
                style={{ width: "100%" }}
                priority
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3">
              <a
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                href={githubURL}>
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                href={deployedURL}>
                <AiFillProject />
                <span>Live Site</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl">
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {technologies.map((tech, i) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                  key={i}>
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setShowDetails(null)}>
            <MdClose size={30} />
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
