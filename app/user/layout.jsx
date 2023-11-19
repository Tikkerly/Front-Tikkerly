"use client";
import React from "react";
import SideBar from "@/components/sideBar";

const UserLayout = ({ children }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="mx-62 w-62 text-gray gap-16">
        <div style={{ background: "#0576e6e3", width: "20.2%", pointerEvents: "auto" }}>
          <SideBar />
        </div>
        <div className="flex-1 p-4">{children}</div>
      </div>
    </div>
  );
};

export default UserLayout;