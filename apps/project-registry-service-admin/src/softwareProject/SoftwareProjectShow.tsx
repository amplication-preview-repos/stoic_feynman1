import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CERTIFICATE_TITLE_FIELD } from "../certificate/CertificateTitle";
import { COMPONENT_TITLE_FIELD } from "../component/ComponentTitle";
import { FRAMEWORK_TITLE_FIELD } from "../framework/FrameworkTitle";
import { LIBRARY_TITLE_FIELD } from "../library/LibraryTitle";
import { LICENSESUBSCRIPTION_TITLE_FIELD } from "../licenseSubscription/LicenseSubscriptionTitle";
import { TECHNOLOGY_TITLE_FIELD } from "../technology/TechnologyTitle";

export const SoftwareProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Certificate"
          source="certificate.id"
          reference="Certificate"
        >
          <TextField source={CERTIFICATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Component"
          source="component.id"
          reference="Component"
        >
          <TextField source={COMPONENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Framework"
          source="framework.id"
          reference="Framework"
        >
          <TextField source={FRAMEWORK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="handoverDate" source="handoverDate" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Library" source="library.id" reference="Library">
          <TextField source={LIBRARY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="LicenseSubscription"
          source="licensesubscription.id"
          reference="LicenseSubscription"
        >
          <TextField source={LICENSESUBSCRIPTION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Technology"
          source="technology.id"
          reference="Technology"
        >
          <TextField source={TECHNOLOGY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="warrantyEndDate" source="warrantyEndDate" />
        <TextField label="warrantyStartDate" source="warrantyStartDate" />
      </SimpleShowLayout>
    </Show>
  );
};
