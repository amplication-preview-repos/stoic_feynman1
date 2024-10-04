import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComponentService } from "./component.service";
import { ComponentControllerBase } from "./base/component.controller.base";

@swagger.ApiTags("components")
@common.Controller("components")
export class ComponentController extends ComponentControllerBase {
  constructor(
    protected readonly service: ComponentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
