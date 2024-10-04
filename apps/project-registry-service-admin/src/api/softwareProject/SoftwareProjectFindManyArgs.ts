import { SoftwareProjectWhereInput } from "./SoftwareProjectWhereInput";
import { SoftwareProjectOrderByInput } from "./SoftwareProjectOrderByInput";

export type SoftwareProjectFindManyArgs = {
  where?: SoftwareProjectWhereInput;
  orderBy?: Array<SoftwareProjectOrderByInput>;
  skip?: number;
  take?: number;
};
