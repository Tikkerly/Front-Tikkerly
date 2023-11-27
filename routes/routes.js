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
  ticket: `${config.URL_BACK}/tickets`,
  payment: `${config.URL_BACK}/payment`,
  getTicketsByTechnician: `${config.URL_BACK}/tickets/technician`,
  getTechniciansById: (_id) => `${config.URL_BACK}/technician/getbyid/${_id}`,
  getServiceAgentsById: (_id) => `${config.URL_BACK}/serviceagent/getbyid/${_id}`,
  getFinalClientsById: (_id) => `${config.URL_BACK}/finalclient/getbyid/${_id}`,
  getTicketsByCompany: (_id) => `${config.URL_BACK}/tickets/company/${_id}`,
};

export { USER_ROUTES };
