import { SoftwareProject } from "../softwareProject/SoftwareProject";

export type Certificate = {
  createdAt: Date;
  expiryDate: Date | null;
  id: string;
  name: string | null;
  softwareProjects?: Array<SoftwareProject>;
  updatedAt: Date;
};
