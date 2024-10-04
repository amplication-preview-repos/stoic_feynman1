import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { SoftwareProjectController } from "../softwareProject.controller";
import { SoftwareProjectService } from "../softwareProject.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  handoverDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
  warrantyEndDate: new Date(),
  warrantyStartDate: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  handoverDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
  warrantyEndDate: new Date(),
  warrantyStartDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    handoverDate: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
    warrantyEndDate: new Date(),
    warrantyStartDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  handoverDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
  warrantyEndDate: new Date(),
  warrantyStartDate: new Date(),
};

const service = {
  createSoftwareProject() {
    return CREATE_RESULT;
  },
  softwareProjects: () => FIND_MANY_RESULT,
  softwareProject: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("SoftwareProject", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SoftwareProjectService,
          useValue: service,
        },
      ],
      controllers: [SoftwareProjectController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /softwareProjects", async () => {
    await request(app.getHttpServer())
      .post("/softwareProjects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        handoverDate: CREATE_RESULT.handoverDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        warrantyEndDate: CREATE_RESULT.warrantyEndDate.toISOString(),
        warrantyStartDate: CREATE_RESULT.warrantyStartDate.toISOString(),
      });
  });

  test("GET /softwareProjects", async () => {
    await request(app.getHttpServer())
      .get("/softwareProjects")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          handoverDate: FIND_MANY_RESULT[0].handoverDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          warrantyEndDate: FIND_MANY_RESULT[0].warrantyEndDate.toISOString(),
          warrantyStartDate:
            FIND_MANY_RESULT[0].warrantyStartDate.toISOString(),
        },
      ]);
  });

  test("GET /softwareProjects/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/softwareProjects"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /softwareProjects/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/softwareProjects"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        handoverDate: FIND_ONE_RESULT.handoverDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        warrantyEndDate: FIND_ONE_RESULT.warrantyEndDate.toISOString(),
        warrantyStartDate: FIND_ONE_RESULT.warrantyStartDate.toISOString(),
      });
  });

  test("POST /softwareProjects existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/softwareProjects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        handoverDate: CREATE_RESULT.handoverDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        warrantyEndDate: CREATE_RESULT.warrantyEndDate.toISOString(),
        warrantyStartDate: CREATE_RESULT.warrantyStartDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/softwareProjects")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
