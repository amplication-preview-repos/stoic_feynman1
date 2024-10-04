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
import { SoftwareProjectService } from "../softwareProject.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SoftwareProjectCreateInput } from "./SoftwareProjectCreateInput";
import { SoftwareProject } from "./SoftwareProject";
import { SoftwareProjectFindManyArgs } from "./SoftwareProjectFindManyArgs";
import { SoftwareProjectWhereUniqueInput } from "./SoftwareProjectWhereUniqueInput";
import { SoftwareProjectUpdateInput } from "./SoftwareProjectUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SoftwareProjectControllerBase {
  constructor(
    protected readonly service: SoftwareProjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SoftwareProject })
  @nestAccessControl.UseRoles({
    resource: "SoftwareProject",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSoftwareProject(
    @common.Body() data: SoftwareProjectCreateInput
  ): Promise<SoftwareProject> {
    return await this.service.createSoftwareProject({
      data: {
        ...data,

        certificate: data.certificate
          ? {
              connect: data.certificate,
            }
          : undefined,

        component: data.component
          ? {
              connect: data.component,
            }
          : undefined,

        framework: data.framework
          ? {
              connect: data.framework,
            }
          : undefined,

        library: data.library
          ? {
              connect: data.library,
            }
          : undefined,

        licenseSubscription: data.licenseSubscription
          ? {
              connect: data.licenseSubscription,
            }
          : undefined,

        technology: data.technology
          ? {
              connect: data.technology,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SoftwareProject] })
  @ApiNestedQuery(SoftwareProjectFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SoftwareProject",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async softwareProjects(
    @common.Req() request: Request
  ): Promise<SoftwareProject[]> {
    const args = plainToClass(SoftwareProjectFindManyArgs, request.query);
    return this.service.softwareProjects({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SoftwareProject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SoftwareProject",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async softwareProject(
    @common.Param() params: SoftwareProjectWhereUniqueInput
  ): Promise<SoftwareProject | null> {
    const result = await this.service.softwareProject({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SoftwareProject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SoftwareProject",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSoftwareProject(
    @common.Param() params: SoftwareProjectWhereUniqueInput,
    @common.Body() data: SoftwareProjectUpdateInput
  ): Promise<SoftwareProject | null> {
    try {
      return await this.service.updateSoftwareProject({
        where: params,
        data: {
          ...data,

          certificate: data.certificate
            ? {
                connect: data.certificate,
              }
            : undefined,

          component: data.component
            ? {
                connect: data.component,
              }
            : undefined,

          framework: data.framework
            ? {
                connect: data.framework,
              }
            : undefined,

          library: data.library
            ? {
                connect: data.library,
              }
            : undefined,

          licenseSubscription: data.licenseSubscription
            ? {
                connect: data.licenseSubscription,
              }
            : undefined,

          technology: data.technology
            ? {
                connect: data.technology,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: SoftwareProject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SoftwareProject",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSoftwareProject(
    @common.Param() params: SoftwareProjectWhereUniqueInput
  ): Promise<SoftwareProject | null> {
    try {
      return await this.service.deleteSoftwareProject({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
