import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FrameworkModuleBase } from "./base/framework.module.base";
import { FrameworkService } from "./framework.service";
import { FrameworkController } from "./framework.controller";
import { FrameworkResolver } from "./framework.resolver";

@Module({
  imports: [FrameworkModuleBase, forwardRef(() => AuthModule)],
  controllers: [FrameworkController],
  providers: [FrameworkService, FrameworkResolver],
  exports: [FrameworkService],
})
export class FrameworkModule {}
