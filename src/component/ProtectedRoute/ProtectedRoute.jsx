import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ path, element }) => {
  const user = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Route path={path} element={element} />;
};

export default ProtectedRoute;
