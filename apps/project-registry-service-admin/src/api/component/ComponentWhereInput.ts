import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SoftwareProjectListRelationFilter } from "../softwareProject/SoftwareProjectListRelationFilter";

export type ComponentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  softwareProjects?: SoftwareProjectListRelationFilter;
};
