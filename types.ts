import { IconType } from "react-icons";

export interface Service {
  title: string;
  about: string;
  Icon: IconType;
}

export interface Skill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface Project {
  name: string;
  description: string;
  imageURL: string;
  deployedURL: string;
  githubURL: string;
  category: Category[];
  technologies: string[];
}

export type Category = "react" | "postgresql" | "nosql";
