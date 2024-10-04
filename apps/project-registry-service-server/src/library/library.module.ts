import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LibraryModuleBase } from "./base/library.module.base";
import { LibraryService } from "./library.service";
import { LibraryController } from "./library.controller";
import { LibraryResolver } from "./library.resolver";

@Module({
  imports: [LibraryModuleBase, forwardRef(() => AuthModule)],
  controllers: [LibraryController],
  providers: [LibraryService, LibraryResolver],
  exports: [LibraryService],
})
export class LibraryModule {}
