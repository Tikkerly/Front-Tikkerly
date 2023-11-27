export default function TicketDetailCalendar({ infoTicket }) {
  const lineas =
    "border-b border-solid border-b-2 border-t-0 text-lg font-bold text-Az1";
  return (
    <div
      className="grid gap-4 space-y-6"
      style={{ width: 1000, height: 400, overflowY: "auto" }}
    >
      <h1 className="flex justify-center font-black avant-garde-regular text-Az1 border-b border-dotted border-b-8 border-t-0 ">
        {infoTicket.company.name}
      </h1>
      <h2 className="flex item-center justify-center font-black avant-garde-regular text-Az1">
        Información del ticket seleccionado:
      </h2>
      <div className="grid grid-cols-2 gap-8 font-regular avant-garde-regular  ">
        <h3 className={lineas}>
          Nombre del cliente:{" "}
          <span className="font-normal text-gray-900">
            {infoTicket.client.name}
          </span>
        </h3>
        <h3 className={lineas}>
          Nombre del técnico:{" "}
          <span className="font-normal text-gray-900">
            {infoTicket.technician.name}
          </span>
        </h3>
        <h3 className={lineas}>
          Fecha de inicio del servicio:{" "}
          <span className="font-normal text-gray-900">
            {infoTicket.startDate}
          </span>
        </h3>
        <h3 className={lineas}>
          Fecha de fin del servicio:{" "}
          <span className="font-normal text-gray-900">
            {infoTicket.endDate}
          </span>
        </h3>
        <h3 className={lineas}>
          Estado del servicio:{" "}
          <span className="font-normal text-gray-900">{infoTicket.status}</span>
        </h3>
        <h3 className={lineas}>
          Método de pago:{" "}
          <span className="font-normal text-gray-900">
            {infoTicket.paymentMethod}
          </span>
        </h3>
        <h3 className={lineas}>
          Tipo de servicio:{" "}
          <span className="font-normal text-gray-900">{infoTicket.type}</span>
        </h3>
        <h3 className={lineas}>
          Descripción del servicio:{" "}
          <span className="font-normal text-gray-900">
            {infoTicket.description}
          </span>
        </h3>
        <h3 className={lineas}>
          Costo:{" "}
          <span className="font-normal text-gray-900">${infoTicket.cost}</span>
        </h3>
        <h3 className={lineas}>
          Cobrado:{" "}
          <span className="font-normal text-gray-900">
            ${infoTicket.ammount}
          </span>
        </h3>
        <h3 className={lineas}>
          IVA:{" "}
          <span className="font-normal text-gray-900">${infoTicket.IVA}</span>
        </h3>
        <h3 className={lineas}>
          Otros:{" "}
          <span className="font-normal text-gray-900">
            ${infoTicket.others}
          </span>
        </h3>
        <h3 className={lineas}>
          Utilidad:{" "}
          <span className="font-normal text-gray-900">
            ${infoTicket.utility}
          </span>
        </h3>
      </div>
    </div>
  );
}
