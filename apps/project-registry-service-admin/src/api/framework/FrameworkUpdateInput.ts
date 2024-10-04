import { SoftwareProjectUpdateManyWithoutFrameworksInput } from "./SoftwareProjectUpdateManyWithoutFrameworksInput";

export type FrameworkUpdateInput = {
  name?: string | null;
  softwareProjects?: SoftwareProjectUpdateManyWithoutFrameworksInput;
};
