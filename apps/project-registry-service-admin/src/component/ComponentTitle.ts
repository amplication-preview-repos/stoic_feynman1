import { Component as TComponent } from "../api/component/Component";

export const COMPONENT_TITLE_FIELD = "name";

export const ComponentTitle = (record: TComponent): string => {
  return record.name?.toString() || String(record.id);
};
