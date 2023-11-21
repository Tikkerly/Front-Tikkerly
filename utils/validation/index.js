const validation = (type, values) => {
    const errors =  {};
    switch (type) {
        case "register":

            if (!values.username) {
                errors.username = 'El campo es obligatorio';
            }
            if (!values.email) {
                errors.email = 'El campo es obligatorio';
            }
          /*  if (!values.img) {
                errors.img = 'El campo es obligatorio';
             } */
            if (!values.phone) {
                errors.phone = 'El campo es obligatorio';
            }
            if (!values.address) {
                errors.address = 'El campo es obligatorio';
            }
            if (!values.nit) {
                errors.nit = 'El campo es obligatorio';
            }
            if (!values.personType) {
                errors.personType = 'El campo es obligatorio';
            }
            if (!values.password) {
                errors.password = 'El campo es obligatorio';
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = 'El campo es obligatorio';
            }
            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Las contraseñas no coinciden';
            } 
            return errors
    
    }
}

export default validation