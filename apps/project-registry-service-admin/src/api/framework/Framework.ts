import { SoftwareProject } from "../softwareProject/SoftwareProject";

export type Framework = {
  createdAt: Date;
  id: string;
  name: string | null;
  softwareProjects?: Array<SoftwareProject>;
  updatedAt: Date;
};
