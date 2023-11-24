"use client";
import React from "react";
import style from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { SubmitButton } from "..";
import Link from "next/link";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import axios from "axios";
import { USER_ROUTES } from "@/routes/routes";

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO);

const Suscripcion = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleClickPlan = async (e) => {
    const plan = e.target.name;
    if (plan === "planA") {
      const { data } = await axios.post(`${USER_ROUTES.payment}`, {
        username: user.username || "usuario tykkera",
        price: 25000,
        quantity: 1,
      });
      setPreferenceId(data.id);
    }

    if (plan === "planB") {
      const { data } = await axios.post(`${USER_ROUTES.payment}`, {
        username: user.username || "usuario tykkera",
        price: 50000,
        quantity: 1,
      });
      setPreferenceId(data.id);
    }

    if (plan === "planC") {
      const { data } = await axios.post(`${USER_ROUTES.payment}`, {
        username: user.username || "usuario tykkera",
        price: 100000,
        quantity: 1,
      });
      setPreferenceId(data.id);
    }
  };

  const handleOnReady = () => {
    setIsReady(true);
  };

  const renderCheckoutButton = (preferenceId) => {
    if (!preferenceId) return null;

    return (
      <Wallet
        initialization={{ preferenceId: preferenceId }}
        onReady={handleOnReady}
      />
    );
  };

  return (
    <div className={style.containerr}>
      <div>
        <div className={style.columnn}>
          <div className={style.titlee}>
            <FontAwesomeIcon icon={faPaperPlane} className={style.icon} />
            <h2 className={style.h2x}>Mensual</h2>
          </div>
          <div className={style.pricee}>
            <h4 className={style.priceh4}>
              $<span className={style.priceSpan}>25.000</span>
            </h4>
          </div>
          <div className={style.optionn}>
            <ul className={style.ulx}>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Lorem ipsum dolor
              </li>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Ullam ducimus consequatur
              </li>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Reprehenderit deserunt magni repellat eos
              </li>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Dolore natus tempora illum
              </li>
            </ul>
          </div>
          <button name="planA" onClick={handleClickPlan}>
            Obtener
          </button>
        </div>
        <div className={style.columnn}>
          <div className={style.titlee}>
            <FontAwesomeIcon
              icon={faPlaneUp}
              className={style.icon}
              style={{ transform: "rotate(45deg)" }}
            />
            <h2 className={style.h2x}>Semestral</h2>
          </div>
          <div className={style.pricee}>
            <h4 className={style.priceh4}>
              $<span className={style.priceSpan}>50.000</span>
            </h4>
          </div>
          <div className={style.optionn}>
            <ul className={style.ulx}>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Lorem ipsum dolor
              </li>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Ullam ducimus consequatur
              </li>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Reprehenderit deserunt magni repellat eos
              </li>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Dolore natus tempora illum
              </li>
            </ul>
          </div>
          <button name="planB" onClick={handleClickPlan}>
            Obtener
          </button>
        </div>
        <div className={style.columnn}>
          <div className={style.titlee}>
            <FontAwesomeIcon icon={faRocket} className={style.icon} />
            <h2 className={style.h2x}>Anual</h2>
          </div>
          <div className={style.pricee}>
            <h4 className={style.priceh4}>
              $<span className={style.priceSpan}>100.000</span>
            </h4>
          </div>
          <div className={style.optionn}>
            <ul className={style.ulx}>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Lorem ipsum dolor
              </li>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Ullam ducimus consequatur
              </li>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Reprehenderit deserunt magni repellat eos
              </li>
              <li className={style.lix}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2d712e" }}
                />{" "}
                Dolore natus tempora illum
              </li>
            </ul>
          </div>
          <button name="planC" onClick={handleClickPlan}>
            Obtener
          </button>
        </div>
      </div>
      {renderCheckoutButton(preferenceId)}
      <Link href="/user" style={{ textDecoration: "none", color: "inherit" }}>
        <SubmitButton text={"Omitir Proceso de pago"} />
      </Link>
    </div>
  );
};

export default Suscripcion;
