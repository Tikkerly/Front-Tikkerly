import React from "react";
import styles from "./style.module.css";

const PaymentView = () => {
    const plans = [
        {
            id: "basic",
            name: "Básico",
            price: "$9",
            features:["Función 1", "Función 2", "Función 3", "Función 4"],
        },  
        {
            id: "semi-pro",
            name: "Semi Pro",
            price: "$14",
            features: ["Función 1", "Función 2", "Función 3", "Función 4"],
        },
        {
            id: "pro",
            name: "Pro",
            price: "$19",
            features: ["Función 1", "Función 2", "Función 3", "Función 4"],
        },
    ];
    return (
        <div className={`${styles.container} `}>
          <h2 className={styles.heading}>Elige tu plan</h2>
          <div className={`${styles.cards} grid grid-cols-3 gap-x-8 auto-cols-max mx-auto h-screen w-auto mb-20 `}>
            {plans.map((plan) => (
              <div key={plan.id} className={`${styles.card} grid grid-cols-1 gap-y-2`}>
                <h3 className={styles.cardHeading}>{plan.name}</h3>
                <p className={styles.cardPrice}>{plan.price}</p>
                <ul className={styles.cardBullets}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                     <svg
                        className={styles.bullet}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                     </svg>
                     <span className={styles.cardText}>{feature}</span>
                    </li>
                  ))}
                  <button className="avant-garde-bold font-bold bg-Az5 text-gray px-6 py-3 w-auto rounded-full transition duration-300 hover:shadow-md ">Comprar</button>
                </ul>
              </div>
            ))}
          </div>
        </div>
     );
    };

export default PaymentView;