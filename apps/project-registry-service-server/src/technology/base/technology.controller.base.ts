/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TechnologyService } from "../technology.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TechnologyCreateInput } from "./TechnologyCreateInput";
import { Technology } from "./Technology";
import { TechnologyFindManyArgs } from "./TechnologyFindManyArgs";
import { TechnologyWhereUniqueInput } from "./TechnologyWhereUniqueInput";
import { TechnologyUpdateInput } from "./TechnologyUpdateInput";
import { SoftwareProjectFindManyArgs } from "../../softwareProject/base/SoftwareProjectFindManyArgs";
import { SoftwareProject } from "../../softwareProject/base/SoftwareProject";
import { SoftwareProjectWhereUniqueInput } from "../../softwareProject/base/SoftwareProjectWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TechnologyControllerBase {
  constructor(
    protected readonly service: TechnologyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Technology })
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTechnology(
    @common.Body() data: TechnologyCreateInput
  ): Promise<Technology> {
    return await this.service.createTechnology({
      data: data,
      select: {
        createdAt: true,
        expiryDate: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Technology] })
  @ApiNestedQuery(TechnologyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async technologies(@common.Req() request: Request): Promise<Technology[]> {
    const args = plainToClass(TechnologyFindManyArgs, request.query);
    return this.service.technologies({
      ...args,
      select: {
        createdAt: true,
        expiryDate: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Technology })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async technology(
    @common.Param() params: TechnologyWhereUniqueInput
  ): Promise<Technology | null> {
    const result = await this.service.technology({
      where: params,
      select: {
        createdAt: true,
        expiryDate: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Technology })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTechnology(
    @common.Param() params: TechnologyWhereUniqueInput,
    @common.Body() data: TechnologyUpdateInput
  ): Promise<Technology | null> {
    try {
      return await this.service.updateTechnology({
        where: params,
        data: data,
        select: {
          createdAt: true,
          expiryDate: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Technology })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTechnology(
    @common.Param() params: TechnologyWhereUniqueInput
  ): Promise<Technology | null> {
    try {
      return await this.service.deleteTechnology({
        where: params,
        select: {
          createdAt: true,
          expiryDate: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/softwareProjects")
  @ApiNestedQuery(SoftwareProjectFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SoftwareProject",
    action: "read",
    possession: "any",
  })
  async findSoftwareProjects(
    @common.Req() request: Request,
    @common.Param() params: TechnologyWhereUniqueInput
  ): Promise<SoftwareProject[]> {
    const query = plainToClass(SoftwareProjectFindManyArgs, request.query);
    const results = await this.service.findSoftwareProjects(params.id, {
      ...query,
      select: {
        certificate: {
          select: {
            id: true,
          },
        },

        component: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        framework: {
          select: {
            id: true,
          },
        },

        handoverDate: true,
        id: true,

        library: {
          select: {
            id: true,
          },
        },

        licenseSubscription: {
          select: {
            id: true,
          },
        },

        technology: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        warrantyEndDate: true,
        warrantyStartDate: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/softwareProjects")
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "update",
    possession: "any",
  })
  async connectSoftwareProjects(
    @common.Param() params: TechnologyWhereUniqueInput,
    @common.Body() body: SoftwareProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      softwareProjects: {
        connect: body,
      },
    };
    await this.service.updateTechnology({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/softwareProjects")
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "update",
    possession: "any",
  })
  async updateSoftwareProjects(
    @common.Param() params: TechnologyWhereUniqueInput,
    @common.Body() body: SoftwareProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      softwareProjects: {
        set: body,
      },
    };
    await this.service.updateTechnology({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/softwareProjects")
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "update",
    possession: "any",
  })
  async disconnectSoftwareProjects(
    @common.Param() params: TechnologyWhereUniqueInput,
    @common.Body() body: SoftwareProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      softwareProjects: {
        disconnect: body,
      },
    };
    await this.service.updateTechnology({
      where: params,
      data,
      select: { id: true },
    });
  }
}
