import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

const logo = "../images/logo/netflix.svg";
// "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
