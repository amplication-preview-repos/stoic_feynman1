import { Certificate } from "../certificate/Certificate";
import { Component } from "../component/Component";
import { Framework } from "../framework/Framework";
import { Library } from "../library/Library";
import { LicenseSubscription } from "../licenseSubscription/LicenseSubscription";
import { Technology } from "../technology/Technology";

export type SoftwareProject = {
  certificate?: Certificate | null;
  component?: Component | null;
  createdAt: Date;
  framework?: Framework | null;
  handoverDate: Date | null;
  id: string;
  library?: Library | null;
  licenseSubscription?: LicenseSubscription | null;
  technology?: Technology | null;
  updatedAt: Date;
  warrantyEndDate: Date | null;
  warrantyStartDate: Date | null;
};
