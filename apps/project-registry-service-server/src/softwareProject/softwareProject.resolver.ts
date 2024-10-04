import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SoftwareProjectResolverBase } from "./base/softwareProject.resolver.base";
import { SoftwareProject } from "./base/SoftwareProject";
import { SoftwareProjectService } from "./softwareProject.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SoftwareProject)
export class SoftwareProjectResolver extends SoftwareProjectResolverBase {
  constructor(
    protected readonly service: SoftwareProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
