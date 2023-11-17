"use client";
import React, { Fragment, useState } from "react";
import logotipo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices";
import Cookies from "js-cookie";


const Navbar = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  const dispatch = useDispatch();
  const route = usePathname();
  const isNotOnPageAuth = !(route === "/ingresar" || route === "/registrarse");

  const handleClick = (e) => {
    e.preventDefault();
    Cookies.remove("token");
    dispatch(logout());
    router.push("/ingresar");
  };
  if (!isNotOnPageAuth) {
    return <></>;
  }
  return (
    <Fragment>
      <div
        style={{ background: "#0576e6e3" }}
        className="p-4 text-white flex flex-row items-center justify-between shadow-lg"
      >
        <div>
          <Link href="/">
            <Image
              src={logotipo}
              width={250}
              alt="Logotipo"
              className=" cursor-pointer"
              priority={true}
            />
          </Link>
        </div>
        {auth ? (
          <div>
            <Link href="/user">
              <button className="mr-2 py-1 px-1  avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
                Perfil
              </button>
            </Link>

            <button
              onClick={handleClick}
              className="mr-2 py-1 px-1  avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link href="/ingresar">
              <button className="mr-2 py-1 px-1  avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
                Ingresar
              </button>
            </Link>

            <Link href="/registrarse">
              <button className="mr-2 py-1 px-1  avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
                Registrarse
              </button>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
