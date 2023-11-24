import axios from "axios";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";

const closureHandleSubmit = (
  route,
  payload,
  dispatch,
  action,
  setMessage,
  setLoading,
  router
) => {
  return async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(route, payload);
      dispatch(action(data.user));
      localStorage.setItem("reduxState", JSON.stringify(data));
      if (data.token) {
        Cookies.set("token", data.token);
        Cookies.set("uid", data.user._id);
      }
      if (data.user.rol === "Admin") {
        router.push("/administrador")
      } else {
        router.push("/user");
      }
    } catch (error) {
      setLoading(false);
      setMessage(
        "No se ha podido iniciar sesión, revise si ha ingresado bien los campos o intente más tarde."
      );
    }
  };
};

export default closureHandleSubmit;
