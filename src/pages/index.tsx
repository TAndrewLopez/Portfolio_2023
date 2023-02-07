import ServiceCard from "@/components/ServiceCard";
import { services } from "../../data";

const Home = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I'm a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I'm focused on
        building accessible, human-centered products.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-400"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer:</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => (
            <div
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={i}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
