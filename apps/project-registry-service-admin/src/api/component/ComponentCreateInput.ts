import { SoftwareProjectCreateNestedManyWithoutComponentsInput } from "./SoftwareProjectCreateNestedManyWithoutComponentsInput";

export type ComponentCreateInput = {
  name?: string | null;
  softwareProjects?: SoftwareProjectCreateNestedManyWithoutComponentsInput;
};
