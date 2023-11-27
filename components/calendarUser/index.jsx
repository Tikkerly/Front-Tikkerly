'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'

export default class CalendarUser {
    constructor(container) {
        this.calendar = new Calendar(container, {
            
            plugins: [
                resourceTimelinePlugin,
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin
            ],
            themeSystem: 'bootstrap',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
            },
            initialView: 'dayGridMonth',
            nowIndicator: true,
            editable: true,
            selectable: true,
            selectMirror: true,
            resources: [
                {
                    id: 'a',
                    title: 'Paula',
                    eventColor: '#3498db', 
                    background: '#3498db',
                    businessHours: {
                        daysOfWeek: [1, 2, 3, 4, 5],
                        startTime: '15:00',
                        endTime: '17:00',
                    },
                },
                {
                    id: 'b',
                    title: 'Anthony Perez',
                    eventColor: '#2ecc71', 
                    businessHours: {
                        daysOfWeek: [2, 3, 4, 5],
                        startTime: '10:00',
                        endTime: '12:00',
                    },
                },
                {
                    id: 'c',
                    title: 'Maria Candela',
                    eventColor: '#e67e22', 
                    businessHours: {
                        daysOfWeek: [1, 3, 5],
                        startTime: '08:00',
                        endTime: '10:00',
                    },
                },
            ],
            initialEvents: [
                { title: 'Mantenimiento', start: new Date(), resourceId: 'a' },
                { title: 'Reparacion', start: new Date(), resourceId: 'b' },
                { title: 'Mantenimiento', start: new Date(), resourceId: 'c' }
            ],
            contentHeight: 600,
    
            container: container,
            eventClick: (eventInfo) => {
                console.log('Click en un evento');
            },
            select: (dateRange) => {
                console.log("Rango de fechas seleccionado en el calendario");
            }
        });
        container.style.background = '#f5f5f5'; 
            container.style.width = '80%';
            container.style.height = '80%';
            container.style.margin = '0 auto';
            container.style.padding = '20px';
            container.style.borderRadius = '10px';
            container.style.overflow = 'auto';
            container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

    }

    render() {
        this.calendar.render();
    }
}