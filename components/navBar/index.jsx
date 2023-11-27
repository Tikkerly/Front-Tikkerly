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
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
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
            <Image
              src={logotipo}
              width={290}
              alt="Logotipo"
              priority={true}
            />
        </div>

        {authPer ? (
          <div className="flex flex-row justify-center gap-4">
            <h4 className=" avant-garde-bold text-base text-Az5 flex flex-row items-center justify-center mt-1 mb-1">
              {user.username}
            </h4>
            <div className="flex flex-row gap-1">
              <Link
                href={(user.rol === "Admin") ? ("/administrador") : ("/user")}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className=" text-Az2 transition duration-300 ease-in-out hover:text-Az4 hover:underline cursor-pointer mt-1 mb-1">
                  <FontAwesomeIcon
                    icon={faUser}
                    
                    size="lg"
                  />
                </div>
              </Link>
              <span className="mx-1 avant-garde-bold text-base text-Az2  mb-1 text-xl">/</span>
              <span
                onClick={handleClick}
                className="text-Az2 transition duration-300 ease-in-out hover:text-Az4 hover:underline cursor-pointer mt-1 mb-1"
              >
                <FontAwesomeIcon
                  icon={faSignOutAlt}
              
                  size="lg"
                />
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-1">
            <Link
              href="/ingresar"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className=" text-Az2 transition duration-300 ease-in-out hover:text-Az4 hover:underline cursor-pointer mt-1 mb-1">
              <FontAwesomeIcon
                icon={faRightToBracket}
                size="lg"
              />                
              </div>

            </Link>

            <span className="mx-1 avant-garde-bold text-base text-Az2  mb-1 text-xl">/</span>

            <Link
              href="/registrarse"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="text-Az2 transition duration-300 ease-in-out hover:text-Az4 hover:underline cursor-pointer mt-1 mb-1">
              <FontAwesomeIcon
                icon={faAddressCard}
                size="lg"
              />                
              </div>

            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
