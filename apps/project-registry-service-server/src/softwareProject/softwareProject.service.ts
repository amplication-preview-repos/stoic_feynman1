import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SoftwareProjectServiceBase } from "./base/softwareProject.service.base";

@Injectable()
export class SoftwareProjectService extends SoftwareProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
