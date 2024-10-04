import { SoftwareProjectCreateNestedManyWithoutTechnologiesInput } from "./SoftwareProjectCreateNestedManyWithoutTechnologiesInput";

export type TechnologyCreateInput = {
  expiryDate?: Date | null;
  name?: string | null;
  softwareProjects?: SoftwareProjectCreateNestedManyWithoutTechnologiesInput;
};
