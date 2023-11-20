'use client';
import Link from 'next/link';

import { useState } from 'react';

export default function Dashboard() {
 const [tickets, setTickets] = useState([
    { id: 1234, status: 'open', dueDate: '2022-12-22' },
    { id: 9101, status: 'open', dueDate: '2022-12-23' },
 ]);

 const totalActiveTickets = tickets.filter((ticket) => ticket.status === 'open').length;

 return (
    <div className="fixed top-40 w-full">

    <div className="min-h-full min-w-fit bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">My Tickets</h2>
        <div className="rounded-md shadow-sm -space-y-px">
          <h3 className="text-center text-xl font-semibold text-gray-800">
            {totalActiveTickets} active ticket{totalActiveTickets === 1 ? '' : 's'}
          </h3>
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`${
                  ticket.status === 'open' ? 'bg-blue-100' : 'bg-green-100'
              } rounded-tl-md rounded-tr-md relative px-4 py-5 sm:px-6 sm:py-5 text-center text-sm font-medium border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-md" />
              <p className="text-gray-800">Ticket #{ticket.id}</p>
              <p className="text-gray-600">Due Date: {ticket.dueDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
                  </div>
 );
}