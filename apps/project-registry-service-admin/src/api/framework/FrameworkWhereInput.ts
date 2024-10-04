import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SoftwareProjectListRelationFilter } from "../softwareProject/SoftwareProjectListRelationFilter";

export type FrameworkWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  softwareProjects?: SoftwareProjectListRelationFilter;
};
