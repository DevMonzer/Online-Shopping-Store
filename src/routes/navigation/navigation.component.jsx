import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../../components/navBar/navBar.component";

const Navigation = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
