import { Category } from "types";

type NavItemProps = {
  value: Category | "all";
  handleFilterCategory: Function;
  active: string;
};
export const NavItem: React.FC<NavItemProps> = ({
  value,
  handleFilterCategory,
  active,
}) => {
  let className = "capitalize cursor-pointer hover:text-green-default";
  if (active === value) className += " text-green-default";
  return (
    <li
      className={className}
      onClick={() => {
        handleFilterCategory(value);
      }}>
      {value}
    </li>
  );
};

type ProjectsNavbarProps = {
  handleFilterCategory: Function;
  active: string;
};

const ProjectsNavbar: React.FC<ProjectsNavbarProps> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="postgresql" {...props} />
      <NavItem value="nosql" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
