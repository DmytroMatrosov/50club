import { useContext } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";

import AuthContext from "./components/AuthContext";
import Login from "./components/Login";
import Glückwunsch from "./components/Glückwunsch";
import Geschenk from "./components/Geschenk";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route index element={<Glückwunsch />} />
        <Route path="/Geschenk" element={<Geschenk />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

const Auth = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RoutesContainer;
