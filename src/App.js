import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import { OvalSpinner } from "components/Loader/GenericLoaders";
import { profileFetch } from "store/actions";
import {
  // affiliateRoutes,
  kycVerifiedUserRoutes,
  publicRoutes,
  pManagersRoutes,
} from "./routes";

// Relative imports
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css';
import "video-react/dist/video-react.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import Layout from 'layouts/mainLayout'

const App = () => {
  const [tokenPresent, setTokenPresent] = useState(
    !!localStorage.getItem("authToken")
  );
  const location = useLocation();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const isLogin  = useSelector((state) => state.auth.isLogin);

  useEffect(() => {
    setTokenPresent(!!localStorage.getItem("authToken"));
    if (tokenPresent && !userData?.kycStatus && isLogin) {
      dispatch(profileFetch());
    }
  }, [userData, tokenPresent]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);
  
  const MogulSpinner = () => <div className="loader_content"><OvalSpinner isLoading={true} /></div>;

    // Remove lodader from index.html
    useEffect(() => {
        const loaderEle = document.getElementById('root-loader')
        loaderEle?.remove()
    }, []);
  

  // Setting up routes for every path defined in guestRoutes
  const routeSetter = (routes, access) => (
    <>
      {routes.map((route) => {
        if (route.component) {
          return (
            <Route
              key={route.name}
              path={route.path}
              name={route.name}
              element={
                <Suspense fallback={<MogulSpinner />}>
                    {route.component}
                </Suspense>
              }
            >
              {route.subRoutes && route.subRoutes.length > 0
                ? route.subRoutes.map(
                  (subRoute) => {
                    subRoute.component && (
                      <Route
                        key={subRoute.name}
                        path={subRoute.path}
                        name={subRoute.name}
                        element={
                          <Suspense fallback={<MogulSpinner />}>{subRoute.component}</Suspense>
                        }
                      />
                    )
                  }
                )
                : ""}
            </Route>
          );
        } else {
          return (
            route.redirectRoute && (
              <Route
                path={route.path}
                key={route.name}
                element={
                  <Suspense fallback={<MogulSpinner />}>
                    <Navigate
                      to={route.redirectPath}
                      state={{
                        access: access ? true : false,
                      }}
                    />
                  </Suspense>
                }
              />
            )
          );
        }
      })}
    </>
  );

  let mainContent;

  if (tokenPresent) {
    // if (userData?.kycStatus === "approved") {
    if (userData?.userType === "property_manager") {
      mainContent = routeSetter(pManagersRoutes, false);
    } else {
      mainContent = routeSetter(kycVerifiedUserRoutes, false);
    }
    // } 
    // else if (
    //   userData?.kycStatus === "whitelisting" &&
    //   userData?.securityCheck
    // ) {
    //   if (userData?.userType === "property_manager") {
    //     mainContent = routeSetter(pManagersRoutes, true);
    //   } else {
    //     // alert("i am called");
    //     mainContent = routeSetter(kycPendingUserRoutes, true);
    //   }
    // } 
    // else {
    //   mainContent = routeSetter(guestRoutes, true);
    // }
  } else {
    mainContent = routeSetter(publicRoutes, false);
  }

  return (
    <>
      <div className="root"> 
        <Layout>
            <Routes>{mainContent}</Routes>
        </Layout>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        progressClassName="toastProgress"
        bodyClassName="toastBody"
        className="toastBox"
      />
    </>
  );
};

export default App;