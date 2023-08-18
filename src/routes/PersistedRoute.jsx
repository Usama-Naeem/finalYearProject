import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Spin } from "antd";
import { DASHBOARD } from "../shared/constant/pageRoutes";
import { getJWT } from "../shared/utils";

const PersistRoutes = () => {
  const [loginState, setLoginState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  if (loginState) {
    return <Navigate to={DASHBOARD} />;
  }

  return <Outlet />;
};

export default PersistRoutes;
