import { SoftwareProjectCreateNestedManyWithoutLibrariesInput } from "./SoftwareProjectCreateNestedManyWithoutLibrariesInput";

export type LibraryCreateInput = {
  name?: string | null;
  softwareProjects?: SoftwareProjectCreateNestedManyWithoutLibrariesInput;
};
