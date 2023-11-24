"use client";
import React from "react";
import SideBar from "@/components/sideBar";

import { AlertBar } from "@/components";
import { useSelector } from "react-redux";

const UserLayout = ({ children }) => {
  //const dispatch = useDispatch();

  //useEffect(() => {
  //   const savedState = localStorage.getItem("reduxState");

  //   if (savedState) {
  //     const parsedState = JSON.parse(savedState);
  //     const savedUser = parsedState.user;

  //     if (savedUser) {
  //       dispatch(login(savedUser));
  //     }
  //   }
  // }, []);
  const oldUser = useSelector((state) => state.auth.user);
  console.log(oldUser);
  return (
    <div className="flex h-screen mt-40 bg-white">
      {oldUser.isPaid === false ? <AlertBar /> : null}

      <div style={{ background: "gray", width: "5%", position: "fixed", height: "100vh" }} className="flex items-start justify-center">

        <SideBar />
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default UserLayout;
