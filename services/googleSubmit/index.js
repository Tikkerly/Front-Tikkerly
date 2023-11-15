import axios from "axios";
import Cookies from "js-cookie";

const closureHandleGoogleSubmit = async (
  route,
  payload,
  dispatch,
  action,
  setMessage,
  setLoading,
  router
) => {
  const credential = { credential: payload };

  try {
    setLoading(true);
    const { data } = await axios.post(route, credential);

    dispatch(action(data.user));
    if (data.token) {
      Cookies.set("token", data.token);
      Cookies.set("uid", data.user._id);
    }
    router.push("/");
  } catch (error) {
    setLoading(false);
    setMessage(
      "No se ha podido iniciar sesión. Revise si ha ingresado bien los campos o intente más tarde."
    );
  }
};

export default closureHandleGoogleSubmit;
