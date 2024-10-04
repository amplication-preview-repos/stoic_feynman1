import { Framework as TFramework } from "../api/framework/Framework";

export const FRAMEWORK_TITLE_FIELD = "name";

export const FrameworkTitle = (record: TFramework): string => {
  return record.name?.toString() || String(record.id);
};
