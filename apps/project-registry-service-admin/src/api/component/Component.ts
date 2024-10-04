import { SoftwareProject } from "../softwareProject/SoftwareProject";

export type Component = {
  createdAt: Date;
  id: string;
  name: string | null;
  softwareProjects?: Array<SoftwareProject>;
  updatedAt: Date;
};
