import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FrameworkService } from "./framework.service";
import { FrameworkControllerBase } from "./base/framework.controller.base";

@swagger.ApiTags("frameworks")
@common.Controller("frameworks")
export class FrameworkController extends FrameworkControllerBase {
  constructor(
    protected readonly service: FrameworkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
