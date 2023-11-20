"use client";

import React, { useEffect } from "react";
import UserLayout from "./layout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { serviceAgents, technicians, finalClients } from "@/redux/slices";
import { Dasboard } from "@/components";

const Dashboard = () => {
  const dispatch = useDispatch();

  const servAgents = async () => {
    const { data } = await axios("http://localhost:3001/api/v1/serviceagent");
    dispatch(serviceAgents(data));
  };
  const techs = async () => {
    const { data } = await axios("http://localhost:3001/api/v1/technician");
    dispatch(technicians(data));
  };
  const finalCli = async () => {
    const { data } = await axios("http://localhost:3001/api/v1/finalclient");
    dispatch(finalClients(data));
  };

  useEffect(() => {
    servAgents();
    techs();
    finalCli();
  }, []);

  return (
    <div>
      <Dasboard />
    </div>
  );
};

Dashboard.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default Dasboard;
