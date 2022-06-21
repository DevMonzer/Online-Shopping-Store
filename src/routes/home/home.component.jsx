import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
      <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
        This app is built by:
        <a
          style={{ color: "blue" }}
          target="_blank"
          href="https://dev-monzer.vercel.app/"
        >
          Monzer
        </a>
      </p>
    </div>
  );
};

export default Home;
