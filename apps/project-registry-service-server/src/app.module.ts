import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ComponentModule } from "./component/component.module";
import { FrameworkModule } from "./framework/framework.module";
import { LibraryModule } from "./library/library.module";
import { CertificateModule } from "./certificate/certificate.module";
import { SoftwareProjectModule } from "./softwareProject/softwareProject.module";
import { LicenseSubscriptionModule } from "./licenseSubscription/licenseSubscription.module";
import { TechnologyModule } from "./technology/technology.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    ComponentModule,
    FrameworkModule,
    LibraryModule,
    CertificateModule,
    SoftwareProjectModule,
    LicenseSubscriptionModule,
    TechnologyModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
