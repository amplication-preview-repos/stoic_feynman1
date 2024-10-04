import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SoftwareProjectModuleBase } from "./base/softwareProject.module.base";
import { SoftwareProjectService } from "./softwareProject.service";
import { SoftwareProjectController } from "./softwareProject.controller";
import { SoftwareProjectResolver } from "./softwareProject.resolver";

@Module({
  imports: [SoftwareProjectModuleBase, forwardRef(() => AuthModule)],
  controllers: [SoftwareProjectController],
  providers: [SoftwareProjectService, SoftwareProjectResolver],
  exports: [SoftwareProjectService],
})
export class SoftwareProjectModule {}
