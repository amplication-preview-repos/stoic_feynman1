import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FrameworkServiceBase } from "./base/framework.service.base";

@Injectable()
export class FrameworkService extends FrameworkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
