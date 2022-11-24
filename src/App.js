import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Error from "./component/Error";
import { Layout } from "./component/Layout";
import NotFoundPage from "./component/NotFoundPage";
import { authUser, clearError } from "./redux/actions/actionCreatore";
import { privateRoutes, publicRoutes } from "./routes";

function App() {
  const token = useSelector((store) => store?.user?.token);
  const error = useSelector((store) => store?.errorMessage?.messeages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authUser());
  }, []);

  console.log(error);

  const clear = (id) => {
    console.log(id);
    dispatch(clearError(id));
  };

  const isAuth = !!token;

  return (
    <>
      <div className="relative">
        <div className="absolute left-1/2 top-0 translate-x-[-50%]">
          {error.map((el) => (
            <Error key={el.id} id={el.id} string={el.messeage} remove={clear} />
          ))}
        </div>
      </div>
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
