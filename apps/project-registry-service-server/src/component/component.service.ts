import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComponentServiceBase } from "./base/component.service.base";

@Injectable()
export class ComponentService extends ComponentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
