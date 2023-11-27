"use client";
import { TechnicianDetail } from "@/components";
import React from 'react'

const TechnicianRegister = ({ params }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <TechnicianDetail token={params}/>
    </div>
  );
};

export default TechnicianRegister;
