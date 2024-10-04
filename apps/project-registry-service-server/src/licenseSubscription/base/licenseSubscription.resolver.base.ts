/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { LicenseSubscription } from "./LicenseSubscription";
import { LicenseSubscriptionCountArgs } from "./LicenseSubscriptionCountArgs";
import { LicenseSubscriptionFindManyArgs } from "./LicenseSubscriptionFindManyArgs";
import { LicenseSubscriptionFindUniqueArgs } from "./LicenseSubscriptionFindUniqueArgs";
import { CreateLicenseSubscriptionArgs } from "./CreateLicenseSubscriptionArgs";
import { UpdateLicenseSubscriptionArgs } from "./UpdateLicenseSubscriptionArgs";
import { DeleteLicenseSubscriptionArgs } from "./DeleteLicenseSubscriptionArgs";
import { SoftwareProjectFindManyArgs } from "../../softwareProject/base/SoftwareProjectFindManyArgs";
import { SoftwareProject } from "../../softwareProject/base/SoftwareProject";
import { LicenseSubscriptionService } from "../licenseSubscription.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LicenseSubscription)
export class LicenseSubscriptionResolverBase {
  constructor(
    protected readonly service: LicenseSubscriptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LicenseSubscription",
    action: "read",
    possession: "any",
  })
  async _licenseSubscriptionsMeta(
    @graphql.Args() args: LicenseSubscriptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LicenseSubscription])
  @nestAccessControl.UseRoles({
    resource: "LicenseSubscription",
    action: "read",
    possession: "any",
  })
  async licenseSubscriptions(
    @graphql.Args() args: LicenseSubscriptionFindManyArgs
  ): Promise<LicenseSubscription[]> {
    return this.service.licenseSubscriptions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LicenseSubscription, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LicenseSubscription",
    action: "read",
    possession: "own",
  })
  async licenseSubscription(
    @graphql.Args() args: LicenseSubscriptionFindUniqueArgs
  ): Promise<LicenseSubscription | null> {
    const result = await this.service.licenseSubscription(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LicenseSubscription)
  @nestAccessControl.UseRoles({
    resource: "LicenseSubscription",
    action: "create",
    possession: "any",
  })
  async createLicenseSubscription(
    @graphql.Args() args: CreateLicenseSubscriptionArgs
  ): Promise<LicenseSubscription> {
    return await this.service.createLicenseSubscription({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LicenseSubscription)
  @nestAccessControl.UseRoles({
    resource: "LicenseSubscription",
    action: "update",
    possession: "any",
  })
  async updateLicenseSubscription(
    @graphql.Args() args: UpdateLicenseSubscriptionArgs
  ): Promise<LicenseSubscription | null> {
    try {
      return await this.service.updateLicenseSubscription({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LicenseSubscription)
  @nestAccessControl.UseRoles({
    resource: "LicenseSubscription",
    action: "delete",
    possession: "any",
  })
  async deleteLicenseSubscription(
    @graphql.Args() args: DeleteLicenseSubscriptionArgs
  ): Promise<LicenseSubscription | null> {
    try {
      return await this.service.deleteLicenseSubscription(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SoftwareProject], { name: "softwareProjects" })
  @nestAccessControl.UseRoles({
    resource: "SoftwareProject",
    action: "read",
    possession: "any",
  })
  async findSoftwareProjects(
    @graphql.Parent() parent: LicenseSubscription,
    @graphql.Args() args: SoftwareProjectFindManyArgs
  ): Promise<SoftwareProject[]> {
    const results = await this.service.findSoftwareProjects(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
