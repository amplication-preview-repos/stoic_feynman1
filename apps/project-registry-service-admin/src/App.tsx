import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ComponentList } from "./component/ComponentList";
import { ComponentCreate } from "./component/ComponentCreate";
import { ComponentEdit } from "./component/ComponentEdit";
import { ComponentShow } from "./component/ComponentShow";
import { FrameworkList } from "./framework/FrameworkList";
import { FrameworkCreate } from "./framework/FrameworkCreate";
import { FrameworkEdit } from "./framework/FrameworkEdit";
import { FrameworkShow } from "./framework/FrameworkShow";
import { LibraryList } from "./library/LibraryList";
import { LibraryCreate } from "./library/LibraryCreate";
import { LibraryEdit } from "./library/LibraryEdit";
import { LibraryShow } from "./library/LibraryShow";
import { CertificateList } from "./certificate/CertificateList";
import { CertificateCreate } from "./certificate/CertificateCreate";
import { CertificateEdit } from "./certificate/CertificateEdit";
import { CertificateShow } from "./certificate/CertificateShow";
import { SoftwareProjectList } from "./softwareProject/SoftwareProjectList";
import { SoftwareProjectCreate } from "./softwareProject/SoftwareProjectCreate";
import { SoftwareProjectEdit } from "./softwareProject/SoftwareProjectEdit";
import { SoftwareProjectShow } from "./softwareProject/SoftwareProjectShow";
import { LicenseSubscriptionList } from "./licenseSubscription/LicenseSubscriptionList";
import { LicenseSubscriptionCreate } from "./licenseSubscription/LicenseSubscriptionCreate";
import { LicenseSubscriptionEdit } from "./licenseSubscription/LicenseSubscriptionEdit";
import { LicenseSubscriptionShow } from "./licenseSubscription/LicenseSubscriptionShow";
import { TechnologyList } from "./technology/TechnologyList";
import { TechnologyCreate } from "./technology/TechnologyCreate";
import { TechnologyEdit } from "./technology/TechnologyEdit";
import { TechnologyShow } from "./technology/TechnologyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"ProjectRegistryService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Component"
          list={ComponentList}
          edit={ComponentEdit}
          create={ComponentCreate}
          show={ComponentShow}
        />
        <Resource
          name="Framework"
          list={FrameworkList}
          edit={FrameworkEdit}
          create={FrameworkCreate}
          show={FrameworkShow}
        />
        <Resource
          name="Library"
          list={LibraryList}
          edit={LibraryEdit}
          create={LibraryCreate}
          show={LibraryShow}
        />
        <Resource
          name="Certificate"
          list={CertificateList}
          edit={CertificateEdit}
          create={CertificateCreate}
          show={CertificateShow}
        />
        <Resource
          name="SoftwareProject"
          list={SoftwareProjectList}
          edit={SoftwareProjectEdit}
          create={SoftwareProjectCreate}
          show={SoftwareProjectShow}
        />
        <Resource
          name="LicenseSubscription"
          list={LicenseSubscriptionList}
          edit={LicenseSubscriptionEdit}
          create={LicenseSubscriptionCreate}
          show={LicenseSubscriptionShow}
        />
        <Resource
          name="Technology"
          list={TechnologyList}
          edit={TechnologyEdit}
          create={TechnologyCreate}
          show={TechnologyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
