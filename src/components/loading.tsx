"use client"

import { useState, useEffect } from "react";
import Router from "next/router";

const LoadingWidget = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  return loading ? (
    <div className='h-screen w-screen flex items-center justify-center bg-red-400'>
        <h1>Loading...</h1>
    </div>
  ) : null;
};

export default LoadingWidget;