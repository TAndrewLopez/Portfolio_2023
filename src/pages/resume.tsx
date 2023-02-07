import Bar from "@/components/Bar";
import { frontend, backend } from "data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "animations";
const resume = () => {
  return (
    <motion.div
      className="p-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Fullstack Software Engineer
            </h5>
            <p className="font-semibold">
              Fullstack Academy (07/2022 - 11/2022)
            </p>
            <p className="my-3">
              Graduated from Full-time Immersive Software Engineering Program
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Talent Acquisition Specialist
            </h5>
            <p className="font-semibold">
              Credit Saint LLC (02/2020 - 05/2022)
            </p>
            <p className="my-3">
              Lead the full recruitment life-cycle, from sourcing strategies,
              talent recruitment, and acquisition.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Frontend</h5>
          <div className="my-2">
            {frontend.map((lang) => (
              <Bar data={lang} key={lang.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Backend</h5>
          <div className="my-2">
            {backend.map((lang) => (
              <Bar data={lang} key={lang.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
