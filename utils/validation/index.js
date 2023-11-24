const validation = (type, values) => {
  const errors = {};
  switch (type) {
    case "register":
      if (!values.username) {
        errors.username = "El campo es obligatorio";
      }
      if (!values.email) {
        errors.email = "El campo es obligatorio";
      }
      /*  if (!values.img) {
                errors.img = 'El campo es obligatorio';
             } */
      if (!values.phone) {
        errors.phone = "El campo es obligatorio";
      }
      if (!values.address) {
        errors.address = "El campo es obligatorio";
      }
      if (!values.document) {
        errors.document = "El campo es obligatorio";
      }
      if (!values.documentType) {
        errors.documentType = "El campo es obligatorio";
      }
      if (!values.personType) {
        errors.personType = "El campo es obligatorio";
      }
      if (!values.password) {
        errors.password = "El campo es obligatorio";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "El campo es obligatorio";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Las contraseñas no coinciden";
      }
      return errors;

    case "finalClient":
      if (!values.username) {
        errors.username = "El campo es obligatorio";
      }
      if (!values.email) {
        errors.email = "El campo es obligatorio";
      }
      if (!values.phone) {
        errors.phone = "El campo es obligatorio";
      }
      if (!values.address) {
        errors.address = "El campo es obligatorio";
      }
      if (!values.document) {
        errors.document = "El campo es obligatorio";
      }
      if (!values.documentType) {
        errors.documentType = "El campo es obligatorio";
      }
      if (!values.serviceClient_id) {
        errors.serviceClient_id = "El campo es obligatorio";
      }
      return errors;

    case "serviceAgent":
      if (!values.username) {
        errors.username = "El campo es obligatorio";
      }
      if (!values.email) {
        errors.email = "El campo es obligatorio";
      }
      if (!values.phone) {
        errors.phone = "El campo es obligatorio";
      }
      if (!values.document) {
        errors.document = "El campo es obligatorio";
      }
      if (!values.documentType) {
        errors.documentType = "El campo es obligatorio";
      }
      if (!values.password) {
        errors.password = "El campo es obligatorio";
      }
      return errors;
    case "technician":
      if (!values.username) {
        errors.username = "El campo es obligatorio";
      }
      if (!values.email) {
        errors.email = "El campo es obligatorio";
      }
      if (!values.phone) {
        errors.phone = "El campo es obligatorio";
      }
      if (!values.document) {
        errors.document = "El campo es obligatorio";
      }
      if (!values.address) {
        errors.address = "El campo es obligatorio";
      }
      if (!values.documentType) {
        errors.documentType = "El campo es obligatorio";
      }
      if (!values.password) {
        errors.password = "El campo es obligatorio";
      }
      if (!values.paymentMethods) {
        errors.paymentMethods = "El campo es obligatorio";
      }
      if (!values.accountNumber) {
        errors.accountNumber = "El campo es obligatorio";
      }
      if (!values.serviceClient_id) {
        errors.serviceClient_id = "El campo es obligatorio";
      }
      if (!values.serviceTypes) {
        errors.serviceTypes = "El campo es obligatorio";
      }
      return errors;
    case "ticket":
      if (!values.serviceType) {
        errors.serviceType = "El campo es obligatorio";
      } else if (values.serviceType.length < 5) {
        errors.serviceType = "Debe tener al menos 5 caracteres";
      }

      if (!values.serviceDescription) {
        errors.serviceDescription = "El campo es obligatorio";
      } else if (values.serviceDescription.length < 10) {
        errors.serviceDescription = "Debe tener al menos 10 caracteres";
      }

      if (!values.startDate) {
        errors.startDate = "El campo es obligatorio";
      } else if (new Date(values.startDate) < new Date(new Date().setHours(0, 0, 0, 0))) {
        console.log(new Date(new Date().setHours(0, 0, 0, 0)))
        console.log(new Date(values.startDate))
        errors.startDate = "La fecha de inicio no puede ser menor o igual a la fecha actual";
      }

      if (values.ammount === "" || values.ammount < 1) {
        errors.ammount = "El valor no puede ser menor a 1";
      }

      if (values.cost === "" || values.cost < 1) {
        errors.cost = "El costo no puede ser menor a 1";
      }

      if (values.others === "" || values.others < 0) {
        errors.others = "Los otros costos no pueden ser menores a 0";
      }

      if (!values.finalClient_id) {
        errors.finalClient_id = "El campo es obligatorio";
      }

      if (!values.technician_id) {
        errors.technician_id = "El campo es obligatorio";
      }

      if (!values.serviceClient_id) {
        errors.serviceClient_id = "El campo es obligatorio";
      }

      return errors;
  }
};

export default validation;
