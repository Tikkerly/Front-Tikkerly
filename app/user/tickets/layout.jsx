"use client";
import { finalClients, serviceAgents, technicians } from "@/redux/slices";
import { USER_ROUTES } from "@/routes/routes";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const TicketsLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { _id } = useSelector(state => state.auth.user)
  const token = Cookies.get("token")

  const servAgents = async () => {
    const { data } = await axios(USER_ROUTES.getServiceAgentsById(_id),
      {
        headers: {
          "x-token": token
        }
      });
    dispatch(serviceAgents(data.serviceAgent));
  };
  const techs = async () => {
    const { data } = await axios(USER_ROUTES.getTechniciansById(_id),
      {
        headers: {
          "x-token": token
        }
      }
    );
  dispatch(technicians(data.technicians));
  };
const finalCli = async () => {
  const { data } = await axios(USER_ROUTES.getFinalClientsById(_id),
  {
    headers: {
      "x-token": token
    }
  });
  dispatch(finalClients(data.finalClients));
};

useEffect(() => {
  servAgents();
  techs();
  finalCli();
}, []);

return <div className="flex-1 p-4">{children}</div>;
};

export default TicketsLayout;
