import { TicketDetailCalendar } from "..";

const ModalEventCalendar = ({ isVisible, onClose,infoTicket }) => {
    if (!isVisible) return null;
  
    const handleClose = (e) => {
      if (e.target.id === "wrapper") onClose();
    };
    return (
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
        id="wrapper"
        onClick={handleClose}
      >
        <div className=" flex flex-col bg-gray-300 p-4 rounded ">
          <button
           onClick={() => onClose()}
            className=" font-bold avant-garde-bold text-lg text-gray-100 px-2 rounded bg-gray-600 self-start transition duration-300 hover:text-red-800 hover:shadow-md"
          >
            X
          </button>
          <div className="bg-243244 p-2 rounded  ">
              <TicketDetailCalendar infoTicket={infoTicket}/>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalEventCalendar;