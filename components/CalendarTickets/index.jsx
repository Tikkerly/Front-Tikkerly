'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CalendarTickets/styles.css"


export default function CalendarTickets({ events, handleEventClick }) {
    const plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
    const initialView = 'dayGridMonth';
    const headerToolBar = {
        start: '',
        center: 'title',
        end: 'today prev,next',
        
    };
    const height = '500px';
    const titleFormat = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };

    const eventMouseEnter = (info) => {
        info.el.style.cursor = 'pointer'; // Cambia el cursor al pasar el ratón por encima
        info.el.style.filter = 'brightness(1.2)'; // Cambia el fondo del evento al pasar el ratón por encima
    };

    const eventMouseLeave = (info) => {
        info.el.style.cursor = ''; // Restaura el cursor al salir del evento
        info.el.style.filter = ''; // Restaura el fondo del evento al salir del evento
    };


    return (
        <FullCalendar
            plugins={plugins}
            initialView={initialView}
            headerToolbar={headerToolBar}
            height={height}
            locale={esLocale}
            selectable={true}
            titleFormat={titleFormat}
            themeSystem='bootstrap5'
            events={events}
            eventClick={handleEventClick}
            eventMouseEnter={eventMouseEnter}
            eventMouseLeave={eventMouseLeave}
            eventBackgroundColor='#15b5eb'
            eventColor='#15b5eb'
          
        />
    )
}