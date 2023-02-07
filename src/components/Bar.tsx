import { Skill } from "types";

type BarProps = {
  data: Skill;
};

const Bar: React.FC<BarProps> = ({ data: { Icon, level, name } }) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-green-default">
        <Icon className="mr-3 " />
        {name}
      </div>
    </div>
  );
};

export default Bar;

//from-green-default to-blue-600
