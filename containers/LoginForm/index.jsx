"use client";
import { FormInputs, SubmitButton } from "@/components";
import { useState } from "react";
import { USER_ROUTES } from "@/routes/routes";
import { useDispatch } from "react-redux";
import { closureHandleGoogleSubmit, closureHandleSubmit } from "@/services";
import { login } from "@/redux/slices";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

import ModalPassword from "@/components/ModalPassword";
import Image from "next/image";
import load from "../../public/load.gif";

export default function LoginForm() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = closureHandleSubmit(
    USER_ROUTES.loginUser,
    formData,
    dispatch,
    login,
    setMessage,
    setLoading,
    router
  );
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENTID}>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center w-80"
        >
          <FormInputs
            className=" p-2"
            placeholder={"Ingrese su email."}
            label={"Email:"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
            type={"email"}
          />

          <FormInputs
            className=" p-2"
            placeholder={"Ingrese su contraseña."}
            label={"Contraseña:"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
            type={"password"}
          />
          <div className="flex flex-col items-center gap-4 text-center w-full">
            {loading ? (
              <Image src={load} width={30} height={30} alt="Loading2" />
            ) : (
              <SubmitButton text={"Ingresar"} type={"submit"} />
            )}

            {message && (
              <h2 className="avant-garde-regular font-regular text-red-500 text-sm">
                {message}
              </h2>
            )}
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="avant-garde-bold font-bold text-gray px-6 py-3 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
          onClick={() => setShowPasswordModal(true)}
        >
          Olvidé mi contraseña
        </button>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="h-0.5 w-full bg-gray-300"></div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            closureHandleGoogleSubmit(
              USER_ROUTES.loginGoogleUser,
              credentialResponse.credential,
              dispatch,
              login,
              setMessage,
              setLoading,
              router
            );
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
      <ModalPassword
        isVisible={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      />
    </GoogleOAuthProvider>
  );
}
