import { SoftwareProjectCreateNestedManyWithoutFrameworksInput } from "./SoftwareProjectCreateNestedManyWithoutFrameworksInput";

export type FrameworkCreateInput = {
  name?: string | null;
  softwareProjects?: SoftwareProjectCreateNestedManyWithoutFrameworksInput;
};
