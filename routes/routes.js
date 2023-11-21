import config from "@/config/config";

const USER_ROUTES = {
  init: `${config.URL_BACK}`,
  loginUser: `${config.URL_BACK}/auth/login`,
  loginGoogleUser: `${config.URL_BACK}/auth/google`,
  getUser: `${config.URL_BACK}/user`,
  registerUser: `${config.URL_BACK}/user/registeruser`,
  editUser: `${config.URL_BACK}/user/edituser`,
  deleteUser: `${config.URL_BACK}/user/deleteuser`,
  renew: `${config.URL_BACK}/auth/renew`,
  img: `${config.URL_BACK}/upload`,
  forgetPassword: `${config.URL_BACK}/user/forgotpassword`,
  recoveryPassword: `${config.URL_BACK}/user/passwordrecovery`,
  ticket: `${config.URL_BACK}/tickets/`,
  payment: `${config.URL_BACK}/payment`,
};

export { USER_ROUTES };
