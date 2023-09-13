import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const authentication = useSelector((state) => state.authentication);

  const [isAuth, setIsAuth] = useState(localStorage.getItem("authentication"));

  const storedAuth1 = localStorage.getItem("authentication");

  console.log("valor del locale storage", isAuth);

  useEffect(() => {
    const storedAuth = localStorage.getItem("authentication");
    setIsAuth(storedAuth);
  }, [isAuth, authentication, storedAuth1]);

  return storedAuth1 == "true" ? <Outlet /> : <Navigate to="/login" />;
  // return (
  //   <>{isAuth ? <Navigate to="/vistatest" /> : <Navigate to="/login" />}</>
  // );
};

export default ProtectedRoute;
