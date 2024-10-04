import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CertificateService } from "./certificate.service";
import { CertificateControllerBase } from "./base/certificate.controller.base";

@swagger.ApiTags("certificates")
@common.Controller("certificates")
export class CertificateController extends CertificateControllerBase {
  constructor(
    protected readonly service: CertificateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
