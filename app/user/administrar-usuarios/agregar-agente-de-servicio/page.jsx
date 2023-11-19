"use client";
import { RegisterForm } from "@/containers";
import styles from "./styles.module.css";
import logo from "../../../../public/LOGOTIPO-TYKKERA-PNG.png";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

const ServiceAgentRegister = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center mt-40">
    <div className="mx-62 w-62 bg-gray-500 flex flex-col items-center justify-center text-gray gap-16">
        <Image
          src={logo}
          style={{ width: "100%", maxWidth: "75%" }}
          className="transition-transform duration-300 transform hover:scale-103 filter hover:brightness-110"
          alt="tykerra registro"
        />
        <Link
          href="/"
          className="absolute left-5 top-5 flex items-center gap-4"
        >
          <HomeIcon fontSize="large" />
          <h2 className={styles.back}>Volver a la página principal</h2>
        </Link>
      </div>
      <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="mx-40 w-80 flex flex-col flex-wrap gap-8">
          <div className="avant-garde-bold font-bold text-3xl  text-gray-600">
            <h2 className="text-xl">Agregar Agente de Servicio</h2>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default ServiceAgentRegister;
