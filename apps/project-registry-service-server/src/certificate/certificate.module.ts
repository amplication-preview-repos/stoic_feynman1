import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CertificateModuleBase } from "./base/certificate.module.base";
import { CertificateService } from "./certificate.service";
import { CertificateController } from "./certificate.controller";
import { CertificateResolver } from "./certificate.resolver";

@Module({
  imports: [CertificateModuleBase, forwardRef(() => AuthModule)],
  controllers: [CertificateController],
  providers: [CertificateService, CertificateResolver],
  exports: [CertificateService],
})
export class CertificateModule {}
