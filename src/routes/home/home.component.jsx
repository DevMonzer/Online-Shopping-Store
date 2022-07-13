import { Outlet } from "react-router-dom";

import Directory from "../../components/directory-item/directory-item.component";

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
          rel="noreferrer"
        >
          Monzer
        </a>
      </p>
    </div>
  );
};

export default Home;
