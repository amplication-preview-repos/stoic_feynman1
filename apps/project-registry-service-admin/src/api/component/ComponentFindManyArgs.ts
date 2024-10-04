import { ComponentWhereInput } from "./ComponentWhereInput";
import { ComponentOrderByInput } from "./ComponentOrderByInput";

export type ComponentFindManyArgs = {
  where?: ComponentWhereInput;
  orderBy?: Array<ComponentOrderByInput>;
  skip?: number;
  take?: number;
};
