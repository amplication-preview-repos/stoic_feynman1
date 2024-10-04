import { FrameworkWhereInput } from "./FrameworkWhereInput";
import { FrameworkOrderByInput } from "./FrameworkOrderByInput";

export type FrameworkFindManyArgs = {
  where?: FrameworkWhereInput;
  orderBy?: Array<FrameworkOrderByInput>;
  skip?: number;
  take?: number;
};
