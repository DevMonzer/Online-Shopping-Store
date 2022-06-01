import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
      This app is built by <a href="https://github.com/DevMonzer">DevMonzer</a>
    </div>
  );
};

export default Home;
