"use client";
import React, { Fragment, useEffect, useState } from "react";
import logotipo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  console.log(user);
  const [authPer, setAuthPer] = useState(false);

  useEffect(() => {
    setAuthPer(auth);
  }, [auth]);

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
    <>
      <div
        className="p-4 text-gray flex flex-row items-center justify-between bg-gray-200 bg-opacity-80 fixed w-full top-0 h-20"
        style={{ zIndex: 1000 }}
      >
        <div>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Image
              src={logotipo}
              width={290}
              alt="Logotipo"
              className=" cursor-pointer"
              priority={true}
            />
          </Link>
        </div>

        {authPer ? (
         <div
         style={{
           display: "flex",
           alignItems: "center",
         }}
       >
         <h4 className="mr-1 py-1 avant-garde-bold text-base text-Az5">
           {user.username}
         </h4>
         <div
           style={{
             display: "flex",
             alignItems: "center",
           }}
         >
              <Link
                href="/user"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className=" text-Az2 transition duration-300 ease-in-out hover:text-Az4 hover:underline cursor-pointer">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ fontSize: "1.5rem" }}
                  />
                </div>
              </Link>
              <span className="mx-1 avant-garde-bold text-base text-Az2">/</span>
              <span
                onClick={handleClick}
                className="text-Az2 transition duration-300 ease-in-out hover:text-Az4 hover:underline cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  style={{ fontSize: "1.5rem" }}
                />
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <Link
              href="/ingresar"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-Az2 transition duration-300 ease-in-out hover:text-Az4 hover:underline cursor-pointer"
                size="lg"
              />
            </Link>

            <span className="mx-1 avant-garde-bold text-base text-Az2">/</span>

            <Link
              href="/registrarse"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FontAwesomeIcon
                icon={faAddressCard}
                className="ml-1 py-1  text-Az2 transition duration-300 ease-in-out hover:text-Az4 hover:underline cursor-pointer"
                size="lg"
              />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
