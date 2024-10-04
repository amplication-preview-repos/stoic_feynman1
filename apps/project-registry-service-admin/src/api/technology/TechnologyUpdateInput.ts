import { SoftwareProjectUpdateManyWithoutTechnologiesInput } from "./SoftwareProjectUpdateManyWithoutTechnologiesInput";

export type TechnologyUpdateInput = {
  expiryDate?: Date | null;
  name?: string | null;
  softwareProjects?: SoftwareProjectUpdateManyWithoutTechnologiesInput;
};
