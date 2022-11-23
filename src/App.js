import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Layout } from "./component/Layout";
import NotFoundPage from "./component/NotFoundPage";
import { authUser, getFavourite } from "./redux/actions/actionCreatore";
import { privateRoutes, publicRoutes } from "./routes";

function App() {
  const token = useSelector((store) => store?.user?.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authUser());
  }, []);

  const isAuth = !!token;

  return (
    <>
      <Routes>
        {publicRoutes.withoutLayout.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="characters" />} />
          {isAuth &&
            privateRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={Component} />
            ))}
          {publicRoutes.withLayout.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
