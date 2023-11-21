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

const Suscripcion = () => {
  return (
    <div className={style.containerr}>
      <div className={style.columnn}>
        <div className={style.titlee}>
          <FontAwesomeIcon icon={faPaperPlane} className={style.icon} />
          <h2 className={style.h2x}>Mensual</h2>
        </div>
        <div className={style.pricee}>
          <h4 className={style.priceh4}>
            $<span className={style.priceSpan}>25</span>
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
        <a href="">Obtener</a>
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
            $<span className={style.priceSpan}>50</span>
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
        <a href="">Obtener</a>
      </div>
      <div className={style.columnn}>
        <div className={style.titlee}>
          <FontAwesomeIcon icon={faRocket} className={style.icon} />
          <h2 className={style.h2x}>Anual</h2>
        </div>
        <div className={style.pricee}>
          <h4 className={style.priceh4}>
            $<span className={style.priceSpan}>100</span>
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
        <a href="">Obtener</a>
      </div>

      <Link
        href="/ingresar"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <SubmitButton text={"Omitir Proceso de pago"} />
      </Link>
    </div>
  );
};

export default Suscripcion;
