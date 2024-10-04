import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LibraryService } from "./library.service";
import { LibraryControllerBase } from "./base/library.controller.base";

@swagger.ApiTags("libraries")
@common.Controller("libraries")
export class LibraryController extends LibraryControllerBase {
  constructor(
    protected readonly service: LibraryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
