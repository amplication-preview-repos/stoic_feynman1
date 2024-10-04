import { SoftwareProject } from "../softwareProject/SoftwareProject";

export type Technology = {
  createdAt: Date;
  expiryDate: Date | null;
  id: string;
  name: string | null;
  softwareProjects?: Array<SoftwareProject>;
  updatedAt: Date;
};
