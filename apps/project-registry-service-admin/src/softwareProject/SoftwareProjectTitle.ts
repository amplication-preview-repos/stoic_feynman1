import { SoftwareProject as TSoftwareProject } from "../api/softwareProject/SoftwareProject";

export const SOFTWAREPROJECT_TITLE_FIELD = "id";

export const SoftwareProjectTitle = (record: TSoftwareProject): string => {
  return record.id?.toString() || String(record.id);
};
