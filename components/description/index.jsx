import React from "react";
import { SubmitButton } from "..";
import styles from "./style.module.css";
import Link from "next/link";



const Description = () => {
  return (
    <>


<div className={` mb-40 p-40 w-screen h-full rounded-lg shadow-md flex flex-col items-center justify-center ${styles["bg-image"]}`}>
      
      <div className="w-100% h-100% mt-20 p-20 bg-white flex items-center justify-center content-center bg-opacity-50 rounded-lg ml-50% "> 
      <div className=" ">

      <div className="content">
        <h1 className="title  text-7xl font-bold leading-none text-Az3 bg-gradient-to-r from-Az1 to-Az3 bg-clip-text text-transparent">Tykkera</h1>
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item bg-blue-500"></div>
          <div className="aurora__item bg-blue-400"></div>
          <div className="aurora__item bg-gray-800"></div>
        </div>
        <p className="subtitle text-2xl text-Az3">Simplificando lo complejo a un ticket</p>
      </div>
      <h2 className="leading-loose bg-az1 w-1/2 font-regular text-2xl text-gray flex avant-garde-regular   description">
        Facilitamos la gestión de tickets de mesa de ayuda para empresas de reparación y 
        mantenimiento de equipos tecnológicos.
      </h2>
      <Link  href="/registrarse">
      <SubmitButton text={"Empezar"} className="mr-2 py-1 px-1  avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg"/>
      </Link>
      </div>
      </div>
    </div>
   
      </>
  );
}

export default Description; 