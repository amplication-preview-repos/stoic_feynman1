import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LicenseSubscriptionService } from "./licenseSubscription.service";
import { LicenseSubscriptionControllerBase } from "./base/licenseSubscription.controller.base";

@swagger.ApiTags("licenseSubscriptions")
@common.Controller("licenseSubscriptions")
export class LicenseSubscriptionController extends LicenseSubscriptionControllerBase {
  constructor(
    protected readonly service: LicenseSubscriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
