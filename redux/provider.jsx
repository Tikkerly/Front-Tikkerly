"use client";
import { Provider } from "react-redux";
import { store } from "./index";
import { useEffect } from "react";

export default function Providers({ children }) {
  const isMount = true
  useEffect(()=>{
    console.log('Iniciando App')
  },[isMount])
  return <Provider store={store}>{children}</Provider>;
}
