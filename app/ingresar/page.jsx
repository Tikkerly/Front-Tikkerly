"use client";
import { LoginForm } from "@/containers";
import styles from "./styles.module.css";
import logo from "../../public/LOGOTIPO-TYKKERA-PNG.png";
import Image from "next/image";
import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex">
      <div className="lg:mx-62 lg:w-4/6  lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-gray lg:gap-16 hidden">
        <Image
          src={logo}
          style={{ width: "100%", maxWidth: "75%" }}
          alt="tykkera login"
          className="transition-transform duration-300 transform hover:scale-103 filter hover:brightness-110"
        />
        <Link

          href="/"
          className="absolute left-5 top-5 flex items-center gap-4"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <HomeIcon fontSize="large" />
          <h2 className={` text-lg avant-garde-regular font-regular ${styles.back} `}>Volver a la página principal</h2>
        </Link>
      </div>
      <div className="lg:h-screen lg:w-2/6 lg:bg-gray-100 lg:grid lg:grid-cols-1 lg:gap-16 lg:items-center lg:justify-center w-screen h-screen bg-gray-100 grid grid-cols-1 gap-16 items-center justify-center">
        <div className="mx-40 flex flex-col flex-wrap gap-8">
          <div className="avant-garde-bold font-bold text-3xl  text-gray-600">
            <h1>¡Hola!</h1>
            <h2 className="text-xl">Bienvenido de vuelta</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
