import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import AuthLayout from "../shared/layouts/AuthLayout";
import MainLayout from "../shared/layouts/MainLayout";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import MainPage from "@/pages/MainPage";

const Router = () => {
    return (
      <Routes>
        {/* auth layout */}
        <Route element={<AuthLayout />}>
          <Route path={routes.default} element={<LoginPage />} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.signup} element={<RegisterPage />} />
        </Route>

        {/* main layout */}
        <Route element={<MainLayout />}>
          <Route path={routes.main} element={<MainPage />} />
        </Route>
  
      </Routes>
    );
  };
  
  export default Router;