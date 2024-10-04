import { SoftwareProjectUpdateManyWithoutLibrariesInput } from "./SoftwareProjectUpdateManyWithoutLibrariesInput";

export type LibraryUpdateInput = {
  name?: string | null;
  softwareProjects?: SoftwareProjectUpdateManyWithoutLibrariesInput;
};
