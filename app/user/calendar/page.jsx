'use client';
import React, { useEffect, useRef } from 'react';
import CalendarUser from '@/components/calendarUser/index';

const UserTicketss = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendar = new CalendarUser(calendarRef.current);
    calendar.render();
  }, []);

  return (
    <div>
      <div ref={calendarRef}></div>
    </div>
  );
};

export default UserTicketss;