"use client";
import { finalClients, serviceAgents, technicians } from "@/redux/slices";
import { USER_ROUTES } from "@/routes/routes";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const TicketsLayout = ({ children }) => {
  const dispatch = useDispatch();

  const servAgents = async () => {
    const { data } = await axios(`${USER_ROUTES.init}/serviceagent`);
    dispatch(serviceAgents(data));
  };
  const techs = async () => {
    const { data } = await axios(`${USER_ROUTES.init}/technician`);
    dispatch(technicians(data));
  };
  const finalCli = async () => {
    const { data } = await axios(`${USER_ROUTES.init}/finalclient`);
    dispatch(finalClients(data));
  };

  useEffect(() => {
    servAgents();
    techs();
    finalCli();
  }, []);

  return <div className="flex-1 p-4">{children}</div>;
};

export default TicketsLayout;
