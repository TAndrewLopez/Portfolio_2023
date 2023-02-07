import Bar from "@/components/Bar";
import { languages, tools } from "data";

const resume = () => {
  return (
    <div className="p-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
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
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Talent Acquisition Specialist
            </h5>
            <p className="font-semibold">
              Fullstack Academy (07/2022 - 11/2022)
            </p>
            <p className="my-3">
              Lead the full recruitment life-cycle, from sourcing strategies,
              talent recruitment, and acquisition.
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((lang) => (
              <Bar data={lang} key={lang.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
