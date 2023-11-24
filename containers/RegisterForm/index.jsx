"use client";
import React, { useState } from "react";
import { validation } from "@/utils";
import { FormInputs, SubmitButton } from "@/components";
import { registerSubmit } from "@/services";
import { USER_ROUTES } from "@/routes/routes";
import { useRouter } from "next/navigation";
import Image from "next/image";
import load from "../../public/load.gif";

const RegisterForm = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    personType: "",
    phone: "",
    document: "",
    documentType: "",
    img: null,
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setFormData({ ...formData, [e.target.name]: file });
  };

  const handleChange = (e) => {
    setErrors(
      validation("register", { ...formData, [e.target.name]: e.target.value })
    );
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const props = Object.keys(
      validation("register", { ...formData, [e.target.name]: e.target.value })
    );
    if (!props.length) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const user = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
    personType: formData.personType,
    phone: formData.phone,
    document: formData.document,
    documentType: formData.documentType,
    img: formData.img,
    address: formData.address,
  };

  const handleSubmit = registerSubmit(
    USER_ROUTES.registerUser,
    user,
    router,
    setDisabled
  );
  console.log(formData);

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto flex flex-col justify-center w-100"
    >
      <div className="container mx-auto grid grid-cols-1 gap-4 w-100 lg:grid-cols-2 ">
        <div className="flex items-center gap-2 flex-col ">
          <FormInputs
            label={"Nombre de usuario:"}
            className="p-2"
            placeholder={"Nombre de usuario"}
            name={"username"}
            value={formData.username}
            onChange={handleChange}
            type={"text"}
          />
          <div className="h-2">
            {errors.username && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.username}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-col ">
          <FormInputs
            label={"Email:"}
            className="p-2"
            placeholder={"Correo electrónico"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
            type={"email"}
          />
          <div className="h-2">
            {errors.email && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-col ">
          <FormInputs
            label={"Contraseña:"}
            className="p-2"
            placeholder={"Contraseña"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
            type={"password"}
          />
          <div className="h-2">
            {errors.password && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.password}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-col ">
          <FormInputs
            className="p-2"
            label={"Confirmar contraseña:"}
            placeholder={"Confirmar contraseña"}
            name={"confirmPassword"}
            value={formData.confirmPassword}
            onChange={handleChange}
            type={"password"}
          />
          <div className="h-2">
            {errors.confirmPassword && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm ">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-col ">
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            className="bg-Be p-2 outline-none focus:ring-2 w-auto h-auto focus:ring-blue-600 text-gray-800 rounded-lg font-regular avant-garde-regular"
          >
            <option value="TipoDeDocumento">Tipo de documento</option>
            <option value="NIT">NIT</option>
            <option value="DNI">DNI</option>
            <option value="PASAPORTE">PASAPORTE</option>
          </select>
          <div className="h-2">
            {errors.documentType && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.documentType}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-col ">
          <FormInputs
            label={"Identificación:"}
            className="p-2"
            placeholder={"Numero de identificacion"}
            name={"document"}
            value={formData.document}
            onChange={handleChange}
            type={"text"}
          />
          <div className="h-2">
            {errors.document && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.document}
              </p>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 flex-col ">
            <FormInputs
              label={"Telefono:"}
              className="p-2"
              placeholder={"Numero de celular"}
              name={"phone"}
              value={formData.phone}
              onChange={handleChange}
              type={"number"}
            />
            <div className="h-2">
              {errors.phone && (
                <p className="text-red-500 font-regular avant-garde-regular text-sm">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-col ">
          <FormInputs
            label={"Dirección:"}
            className="p-2"
            placeholder={"Dirección"}
            name={"address"}
            value={formData.clientId}
            onChange={handleChange}
            type={"text"}
          />
          <div className="h-2">
            {errors.address && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.address}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-col w-auto h-auto ">
          <select
            label={"Tipo de persona:"}
            id="personType"
            name="personType"
            required
            className="bg-Be p-2 outline-none focus:ring-2 w-auto h-auto focus:ring-blue-600 text-gray-800 rounded-lg font-regular avant-garde-regular"
            value={formData.personType}
            onChange={handleChange}
          >
            <option value="Tipodepersona">Tipo de persona</option>
            <option value="Natural">Persona Natural</option>
            <option value="Juridica">Persona Juridica</option>
          </select>
          <div className="h-2">
            {errors.personType && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.personType}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-4 gap-3">
        <div className="flex items-center gap-2 flex-col">
          <FormInputs
            label={"Imagen:"}
            className="p-2"
            placeholder={"Imagen"}
            name="img"
            onChange={handleImageChange}
            type="file"
            InputLabelProps={{ shrink: true }}
          />
          <div className="h-2">
            {errors.img && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.img}
              </p>
            )}
          </div>
        </div>
        {disabled ? (
          <Image src={load} width={30} height={30} alt="Loading2" />
        ) : (
          <SubmitButton
            text={"Registrarse"}
            type={"submit"}
            disabled={isDisabled}
          />
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
