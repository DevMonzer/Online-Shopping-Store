import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
      <p style={{ fontSize: "1.2rem" }}>
        This app is built by:{" "}
        <a style={{ color: "blue" }} href="https://github.com/DevMonzer">
          {" "}
          Monzer
        </a>
      </p>
    </div>
  );
};

export default Home;
