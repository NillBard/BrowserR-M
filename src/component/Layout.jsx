import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { clearNotification } from "../redux/actions/actionCreatore";
import Header from "./Header";
import Notification from "./Notification";

const Layout = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (store) => store?.notifications?.notifications
  );
  const clear = (id) => {
    dispatch(clearNotification(id));
  };
  return (
    <>
      <Header />
      <div className="relative">
        <div className="absolute top-0 right-0">
          {notifications.map((el) => (
            <Notification
              key={el.id}
              id={el.id}
              string={el.string}
              remove={clear}
            />
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export { Layout };
