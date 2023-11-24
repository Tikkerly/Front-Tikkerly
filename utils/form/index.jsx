"use client";

const { useState } = require("react");
const { default: validation } = require("../validation");
const { USER_ROUTES } = require("@/routes/routes");
const { default: Swal } = require("sweetalert2");
const axios = require("axios");
const Cookie = require("js-cookie");
const FormUtils = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    personType: "",
    phone: "",
    clientId: "",
    img: "",
    rol: "CLIENTE",
  });
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      img: file,
    });
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      personType: formData.personType,
      phone: formData.phone,
      clientId: formData.clientId,
      img: formData.img.name,
      rol: formData.rol,
    };

    setFormData({
      username: "",
      email: "",
      password: "",
      personType: "",
      phone: "",
      clientId: "",
      img: null,
    });

    try {
      const { data } = await axios.post(USER_ROUTES.registerUser, user, {
        headers: {
          "x-token": Cookie.get("token"),
        },
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error durante el registro",
        confirmButtonColor: '#00356f',
        confirmButtonText: 'Cerrar',
        text: error.response.data.errors[0].msg,
      });
    }
  };

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    isDisabled,
    setIsDisabled,
    handleImageChange,
    handleChange,
    handleSubmit,
  };
};

export default FormUtils;
