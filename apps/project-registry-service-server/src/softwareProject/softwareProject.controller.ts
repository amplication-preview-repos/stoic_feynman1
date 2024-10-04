import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SoftwareProjectService } from "./softwareProject.service";
import { SoftwareProjectControllerBase } from "./base/softwareProject.controller.base";

@swagger.ApiTags("softwareProjects")
@common.Controller("softwareProjects")
export class SoftwareProjectController extends SoftwareProjectControllerBase {
  constructor(
    protected readonly service: SoftwareProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
