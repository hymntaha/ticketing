import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import { app } from "../../auth/src/app";

const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default AppComponent;
