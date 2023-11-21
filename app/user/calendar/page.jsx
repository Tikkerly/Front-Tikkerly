'use client';
import React, { useEffect, useRef } from 'react';
import CalendarUser from '@/components/calendarUser/index';
import { AlertBar } from "@/components"

const UserTicketss = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendar = new CalendarUser(calendarRef.current);
    calendar.render();
  }, []);

  return (
    <div className='h-screen ml-8 '>
<AlertBar />
      <div ref={calendarRef}></div>
    </div>
  );
};

export default UserTicketss;