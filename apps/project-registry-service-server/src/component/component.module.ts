import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComponentModuleBase } from "./base/component.module.base";
import { ComponentService } from "./component.service";
import { ComponentController } from "./component.controller";
import { ComponentResolver } from "./component.resolver";

@Module({
  imports: [ComponentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComponentController],
  providers: [ComponentService, ComponentResolver],
  exports: [ComponentService],
})
export class ComponentModule {}
