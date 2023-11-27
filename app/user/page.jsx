"use client";

import React, { useEffect, useState } from "react";
import Profile from "@/components/profile";
import UserLayout from "./layout";
import { AlertBar } from "@/components";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const oldUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    setUser(oldUser);
  }, []);

  return (
    <div>
      {user.isPaid === false ? <AlertBar /> : null}
      <Profile />
    </div>
  );
};

UserProfile.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default UserProfile;
