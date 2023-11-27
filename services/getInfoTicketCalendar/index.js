import { USER_ROUTES } from "@/routes/routes";
import axios from "axios";
import { format, parseISO } from 'date-fns'
import esLocal from 'date-fns/locale/es';

const getInfoTicketCalendar = (setInfoTicket, setShowEventModal ) => {
    return async (info) => {
        const _id = info.event._def.publicId
        const { data } = await axios.get(`${USER_ROUTES.ticket}/${_id}`);
        const modelInfoTicket = {
            IVA: data.IVA,
            ammount: data.ammount,
            cost: data.cost,
            others: data.others,
            startDate: data.startDate.length ? format(parseISO(data.startDate), "dd 'de' MMMM 'de' yyyy", { locale: esLocal }) : '---',
            endDate: data.endDate.length ? format(parseISO(data.endDate), "dd 'de' MMMM 'de' yyyy", { locale: esLocal }) : '---',
            utility: data.utility,
            status: data.ticketStatus,
            paymentMethod: data.paymentMethod,
            type: data.serviceType,
            description: data.serviceDescription,
            company: {
                name: data.company_id.username,
            },
            client: {
                name: data.finalClient_id.username,
            },
            technician: {
                name: data.technician_id.username,
            }
        }
        setInfoTicket(modelInfoTicket)
        setShowEventModal(true)
    }

}

export default getInfoTicketCalendar