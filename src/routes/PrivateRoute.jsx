import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getJWT } from "../shared/utils";
import { SIGNIN } from "../shared/constant/pageRoutes";
import { Spin } from "antd";

const PrivateRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loginState, setLoginState] = useState(false);

  // checking if the user is logged in
  useEffect(() => {
    (async () => {
      try {
        await getJWT();
        setLoginState(true);
      } catch (error) {
        setLoginState(false);
      }
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) {
    return (
      <div className="w-full min-h-full text-center mt-[40vh]">
        <Spin />
      </div>
    );
  }

  if (!loginState) {
    return <Navigate to={SIGNIN} />;
  }
  return children;
};

export default PrivateRoute;
