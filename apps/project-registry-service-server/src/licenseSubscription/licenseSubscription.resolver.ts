import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LicenseSubscriptionResolverBase } from "./base/licenseSubscription.resolver.base";
import { LicenseSubscription } from "./base/LicenseSubscription";
import { LicenseSubscriptionService } from "./licenseSubscription.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LicenseSubscription)
export class LicenseSubscriptionResolver extends LicenseSubscriptionResolverBase {
  constructor(
    protected readonly service: LicenseSubscriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
