import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { CertificateTitle } from "../certificate/CertificateTitle";
import { ComponentTitle } from "../component/ComponentTitle";
import { FrameworkTitle } from "../framework/FrameworkTitle";
import { LibraryTitle } from "../library/LibraryTitle";
import { LicenseSubscriptionTitle } from "../licenseSubscription/LicenseSubscriptionTitle";
import { TechnologyTitle } from "../technology/TechnologyTitle";

export const SoftwareProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="certificate.id"
          reference="Certificate"
          label="Certificate"
        >
          <SelectInput optionText={CertificateTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="component.id"
          reference="Component"
          label="Component"
        >
          <SelectInput optionText={ComponentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="framework.id"
          reference="Framework"
          label="Framework"
        >
          <SelectInput optionText={FrameworkTitle} />
        </ReferenceInput>
        <DateTimeInput label="handoverDate" source="handoverDate" />
        <ReferenceInput source="library.id" reference="Library" label="Library">
          <SelectInput optionText={LibraryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="licenseSubscription.id"
          reference="LicenseSubscription"
          label="LicenseSubscription"
        >
          <SelectInput optionText={LicenseSubscriptionTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="technology.id"
          reference="Technology"
          label="Technology"
        >
          <SelectInput optionText={TechnologyTitle} />
        </ReferenceInput>
        <DateTimeInput label="warrantyEndDate" source="warrantyEndDate" />
        <DateTimeInput label="warrantyStartDate" source="warrantyStartDate" />
      </SimpleForm>
    </Edit>
  );
};
