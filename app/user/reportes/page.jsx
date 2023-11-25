"use client";

import { excelUtils } from "@/utils";
import styled from "./styles.module.css";
import { useSelector } from "react-redux";
const ReportesPage = () => {
  //!-* Obtener de redux la data necesaria para la generacion de reportes
  //!-* En el caso de showDataTechnician y showDataServices dejar como esta, estos datos interactuan con los checkbox haciendo que el usuario decida que data
  // !-* se mostrará en el reporte

  const showDataTechnician = {
    username: false,
    email: false,
    phone: false,
    documentType: false,
    document: false,
    paymentMethods: false,
    servicesType: false,
    address: false,
  };

  const showDataServices = {
    serviceType: false,
    serviceDescription: false,
    registerDate: false,
    startDate: false,
    endDate: false,
    amount: false,
    cost: false,
    utility: false,
    others: false,
    IVA: false,
    paymentMethod: false,
    status: false,
    isPaid: false,
    ticketStatus: false,
  };
  const ticketStatusCount = {
    Pendiente: 0,
    Aprobado: 0,
    Cancelado: 0,
    "En proceso": 0,
    Completado: 0,
    Cerrado: 0,
    Rechazado: 0,
  };

  // const dataTechnicians = useSelector((state) => state.options.technicians);

  //! Para pruebas trabajar con data como si fueran tecnicos

  const data = [
    {
      username: "CRISTHIAN",
      email: "crisrodam1996@gmail.com",
      phone: "0981135286",
      documentType: "DNI",
      document: "0940501596",
      paymentMethods: "Efectivo",
      address: "QUITO-ECUADOR",
      accountNumber: "22038208302803",
    },
    {
      username: "CRISTHIAN",
      email: "crisrodam1996@gmail.com",
      phone: "0981135286",
      documentType: "DNI",
      document: "0940501596",
      paymentMethods: "Efectivo",
      address: "QUITO-ECUADOR",
      accountNumber: "22038208302803",
    },
    {
      username: "CRISTHIAN",
      email: "crisrodam1996@gmail.com",
      phone: "0981135286",
      documentType: "DNI",
      document: "0940501596",
      paymentMethods: "Efectivo",
      address: "QUITO-ECUADOR",
      accountNumber: "22038208302803",
    },
    {
      username: "CRISTHIAN",
      email: "crisrodam1996@gmail.com",
      phone: "0981135286",
      documentType: "DNI",
      document: "0940501596",
      paymentMethods: "Efectivo",
      address: "QUITO-ECUADOR",
      accountNumber: "22038208302803",
    },
  ];

  //! Aquí irían los tickets o servicios, pero no estaban en el redux
  const dataServices = [
    {
      serviceType: "Reparacion",
      serviceDescription: "Reparacion de celular",
      registerDate: "21/11/23",
      startDate: "2023-11-23",
      endDate: "",
      amount: 8000,
      cost: 1000,
      utility: 8,
      others: 200,
      IVA: 380,
      paymentMethod: "Transferencia",
      status: true,
      ispaid: false,
      ticketStatus: "Pendiente",
      serviceClient_id: "655cc9276f3fe7bbfaaa4ad1",
      finalClient_id: "655cd82f775c74784018b863",
    },
    {
      serviceType: "Reparacion",
      serviceDescription: "Reparacion de celular",
      registerDate: "21/11/23",
      startDate: "2023-11-23",
      endDate: "",
      amount: 2000,
      cost: 1000,
      utility: 8,
      others: 200,
      IVA: 380,
      paymentMethod: "Transferencia",
      status: true,
      ispaid: false,
      ticketStatus: "Pendiente",
      serviceClient_id: "655cc9276f3fe7bbfaaa4ad0",
      finalClient_id: "655cd82f775c74784018b862",
    },
    {
      serviceType: "Reparacion",
      serviceDescription: "Reparacion de celular",
      registerDate: "21/11/23",
      startDate: "2023-11-23",
      endDate: "",
      amount: 2000,
      cost: 1000,
      utility: 8,
      others: 200,
      IVA: 380,
      paymentMethod: "Transferencia",
      status: true,
      ispaid: false,
      ticketStatus: "Pendiente",
      serviceClient_id: "655cc9276f3fe7bbfaaa4ad0",
      finalClient_id: "655cd82f775c74784018b862",
    },
    {
      serviceType: "Reparacion",
      serviceDescription: "Reparacion de celular",
      registerDate: "21/11/23",
      startDate: "2023-11-23",
      endDate: "",
      amount: 2000,
      cost: 1000,
      utility: 8,
      others: 200,
      IVA: 380,
      paymentMethod: "Transferencia",
      status: true,
      ispaid: false,
      ticketStatus: "Pendiente",
      serviceClient_id: "655cc9276f3fe7bbfaaa4ad0",
      finalClient_id: "655cd82f775c74784018b862",
    },
  ];

  const pendingPaymentsReport = async () => {
    const excelData = data.map((currentData) => {
      const newObj = {};
      for (const key in showDataTechnician) {
        if (showDataTechnician[key]) {
          newObj[key] = currentData[key];
        }
      }
      return newObj;
    });
    await excelUtils(excelData, "Pagos pendientes");
  };

  const handleTechnician = (e) => {
    const { name } = e.target;
    showDataTechnician[name] = !showDataTechnician[name];
  };

  const handleService = (e) => {
    const { name } = e.target;
    showDataServices[name] = !showDataServices[name];
  };

  const servicesReport = async () => {
    const excelData = dataServices.map((currentData) => {
      const newObj = {};
      for (const key in showDataServices) {
        if (showDataServices[key]) {
          newObj[key] = currentData[key];
        }
      }
      return newObj;
    });
    await excelUtils(excelData, "Servicios");
  };
  const servicesAgentReport = async () => {
    const servicesAgent = {};

    dataServices.forEach((service) => {
      const { serviceClient_id } = service;
      if (servicesAgent.hasOwnProperty(serviceClient_id)) {
        servicesAgent[serviceClient_id] += 1;
      } else {
        servicesAgent[serviceClient_id] = 1;
      }
    });
    const servicesAgentArray = Object.entries(servicesAgent);

    const [serviceAgentWithMostTickets, numberOfTickets] =
      servicesAgentArray.reduce(
        (max, current) => (current[1] > max[1] ? current : max),
        ["", 0]
      );

    const excelData = dataServices.filter(
      (service) => service.serviceClient_id == serviceAgentWithMostTickets
    );
    await excelUtils(excelData, "Agentes de Servicios");
  };

  const clientCountServiceReport = async () => {
    const clients = {};
    dataServices.forEach((service) => {
      const { finalClient_id } = service;
      if (clients.hasOwnProperty(finalClient_id)) {
        clients[finalClient_id] += 1;
      } else {
        clients[finalClient_id] = 1;
      }
    });

    const clientsArray = Object.entries(clients);

    const [clientWithMostTickets, numberOfTickets] = clientsArray.reduce(
      (max, current) => (current[1] > max[1] ? current : max)
    );

    const excelData = dataServices
      .filter((service) => service.finalClient_id == clientWithMostTickets)
      .map(({ serviceClient_id, ...rest }) => rest);
    await excelUtils(excelData, "Cliente Tickets");
  };
  const clientAmountServiceReport = async () => {
    const clients = {};
    dataServices.forEach((service) => {
      const { finalClient_id, amount } = service;
      if (clients.hasOwnProperty(finalClient_id)) {
        clients[finalClient_id] += amount;
      } else {
        clients[finalClient_id] = amount;
      }
    });

    const clientsArray = Object.entries(clients);

    const [clientWithMostAmount, numberOfTickets] = clientsArray.reduce(
      (max, current) => (current[1] > max[1] ? current : max)
    );
    const excelData = dataServices
      .filter((service) => service.finalClient_id == clientWithMostAmount)
      .map(({ serviceClient_id, ...rest }) => rest);
    await excelUtils(newData, "Cliente Monto");
  };

  const ticketStatusReport = async () => {
    const excelData = [];
    dataServices.forEach((service) => {
      const { ticketStatus } = service;
      ticketStatusCount[ticketStatus] += 1;
    });
    excelData.push(ticketStatusCount);
    await excelUtils(excelData, "Estado de Tickets");
  };

  return (
    <div className="text-center">
      <div className="mb-20">
        <h4>Pagos pendientes</h4>
        <div>
          <p>Seleccione los datos del técnico</p>
          <div className={styled.checks} id="checks">
            <div className={styled.check}>
              <input
                type="checkbox"
                name="username"
                onChange={handleTechnician}
              />
              <label htmlFor="">Nombre</label>
            </div>
            <div className={styled.check}>
              <input type="checkbox" name="email" onChange={handleTechnician} />
              <label htmlFor="">Correo</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="documentType"
                onChange={handleTechnician}
              />
              <label htmlFor="">Tipo de Documento</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="document"
                onChange={handleTechnician}
              />
              <label htmlFor="">Documento</label>
            </div>
            <div className={styled.check}>
              <input type="checkbox" name="phone" onChange={handleTechnician} />
              <label htmlFor="">Télefono</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="serviceTypes"
                onChange={handleTechnician}
              />
              <label htmlFor="">Tipo de Servicio</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="paymentMethods"
                onChange={handleTechnician}
              />
              <label htmlFor="">Método de pago</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="address"
                onChange={handleTechnician}
              />
              <label htmlFor="">Dirección</label>
            </div>
          </div>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={pendingPaymentsReport}
          >
            Generate
          </button>
        </div>
      </div>

      <div className="mb-20">
        <h4>Servicios</h4>
        <div>
          <p>Seleccione la información del servicio</p>
          <div className={styled.checks}>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="serviceType"
                onChange={handleService}
              />
              <label htmlFor="">Tipo de Servicio</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="serviceDescription"
                id=""
                onChange={handleService}
              />
              <label htmlFor="">Descripción del servicio</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="registerDate"
                id=""
                onChange={handleService}
              />
              <label htmlFor="">Fecha de Registro</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="startDate"
                id=""
                onChange={handleService}
              />
              <label htmlFor="">Fecha de Inicio</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="endDate"
                id=""
                onChange={handleService}
              />
              <label htmlFor="">Fecha de Finalización</label>
            </div>

            <div className={styled.check}>
              <input
                type="checkbox"
                name="amount"
                id=""
                onChange={handleService}
              />
              <label htmlFor="">Monto</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="cost"
                id=""
                onChange={handleService}
              />
              <label htmlFor="">Costo</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="utility"
                id=""
                onChange={handleService}
              />
              <label htmlFor="">Utilidad</label>
            </div>
            <div className={styled.check}>
              <input type="checkbox" name="others" id="" />
              <label htmlFor="">Otros</label>
            </div>
            <div className={styled.check}>
              <input type="checkbox" name="IVA" id="" />
              <label htmlFor="">IVA</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="paymentMethod"
                id=""
                onChange={handleService}
              />
              <label htmlFor="">Método de pago</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="status"
                id=""
                onChange={handleService}
              />
              <label htmlFor="">Estado</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="ispaid"
                id=""
                onChange={handleService}
              />
              <label htmlFor="">Pagado</label>
            </div>
            <div className={styled.check}>
              <input
                type="checkbox"
                name="ticketStatus"
                id=""
                onChange={handleService}
              />
              <label htmlFor="">Estado del ticket</label>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={servicesReport}
        >
          Generate
        </button>
      </div>

      <div className="mb-20">
        <h4 className="mb-3">Cliente con mas tickets solicitados (Cantidad)</h4>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={clientCountServiceReport}
        >
          Generate
        </button>
      </div>
      <div className="mb-20">
        <h4 className="mb-3">Cliente con mas tickets solicitados (Ventas)</h4>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={clientAmountServiceReport}
        >
          Generate
        </button>
      </div>
      <div className="mb-20">
        <h4 className="mb-3">
          Agentes de servicios con mas tickets registrados
        </h4>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={servicesAgentReport}
        >
          Generate
        </button>
      </div>
      <div className="mb-20">
        <h4 className="mb-3">Estado de tickets</h4>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={ticketStatusReport}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default ReportesPage;
