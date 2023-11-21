"use client"
import React from "react";
import style from "./styles.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";  
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Suscripcion = () => {
  
    return (
  <div className={style.containerr}>
    
    <div className={style.columnn}>
      <div className={style.titlee}>
      <FontAwesomeIcon icon={faPaperPlane}   className={style.icon}/>
        <h2>Mensual</h2>
      </div>
      <div className={style.pricee}>
        <h4>$<span>25</span></h4>
      </div>
      <div className={style.optionn}>
        <ul>
       
          <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#2d712e",}} /> Lorem ipsum dolor</li>
          <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#2d712e",}} /> Ullam ducimus consequatur</li>
          <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#2d712e",}} /> Reprehenderit deserunt magni repellat eos</li>
          <li><FontAwesomeIcon icon={faCircleXmark} style={{color: "#c92c2c",}} /> Dolore natus tempora illum</li>
        </ul>
      </div>
      <a href="">Obtener</a>
    </div>
    <div className={style.columnn}>
      <div className={style.titlee}>
      <FontAwesomeIcon icon={faPlaneUp}   className={style.icon} style={{ transform: 'rotate(45deg)' }} />
        <h2>Semestral</h2>
      </div>
      <div className={style.pricee}>
        <h4>$<span>50</span></h4>
      </div>
      <div className={style.optionn}>
        <ul>
          <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#2d712e",}} /> Lorem ipsum dolor</li>
          <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#2d712e",}}/> Ullam ducimus consequatur</li>
          <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#2d712e",}}/> Reprehenderit deserunt magni repellat eos</li>
          <li><FontAwesomeIcon icon={faCircleXmark} style={{color: "#c92c2c",}} /> Dolore natus tempora illum</li>
        </ul>
      </div>
      <a href="">Obtener</a>
    </div>
    <div className={style.columnn}>
      <div className={style.titlee}>
      <FontAwesomeIcon icon={faRocket}  className={style.icon}/>
        <h2>Anual</h2>
      </div>
      <div className={style.pricee}>
        <h4>$<span>100</span></h4>
      </div>
      <div className={style.optionn}>
        <ul>
          <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#2d712e",}}/> Lorem ipsum dolor</li>
          <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#2d712e",}} /> Ullam ducimus consequatur</li>
          <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#2d712e",}}/> Reprehenderit deserunt magni repellat eos</li>
          <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#2d712e",}}/> Dolore natus tempora illum</li>
        </ul>
      </div>
      <a href="">Obtener</a>
    </div>
  </div>
    )
  };
  
  export default Suscripcion;