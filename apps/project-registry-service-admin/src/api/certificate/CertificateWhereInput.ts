import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SoftwareProjectListRelationFilter } from "../softwareProject/SoftwareProjectListRelationFilter";

export type CertificateWhereInput = {
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  softwareProjects?: SoftwareProjectListRelationFilter;
};
