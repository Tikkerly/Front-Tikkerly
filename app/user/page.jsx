"use client";

import React, { useEffect, useState } from "react";
import Profile from "@/components/profile";
import UserLayout from "./layout";
import { AlertBar } from "@/components";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "@/redux/slices/authSlices";
import axios from "axios";
import { USER_ROUTES } from "@/routes/routes";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const oldUser = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const userUpdate = async () => {
      const { data } = await axios.post(
        `${USER_ROUTES.getUser}/${oldUser._id}`
      );

      dispatch(userDetails(data));
      setUser(data);
    };
    userUpdate();
  }, []);

  return (
    <div>
      {/* {user.isPaid === false ? <AlertBar /> : null} */}

      <Profile />
    </div>
  );
};

UserProfile.getLayout = function getLayout(page) {
  return <UserLayout> {user.isPaid === false ? <AlertBar /> : null} {page}</UserLayout>;
};

export default UserProfile;
