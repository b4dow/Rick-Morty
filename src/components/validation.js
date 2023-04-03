const usernameRegex = /^[a-zA-Z0-9]{4,}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const validate = (userData) => {
    errors = {}
    if(!usernameRegex.test(userData.user)) {
        errors.user = "Tu usuario debe ser mayor a 4 caracteres"
    }
    if(!userData.user) {
        errors.user = "El nombre de usuario no puede estar vacío"
    }
    if(userData.user > 35) {
        errors.user = "No puede tener más de 35 caracteres"
    }
    if(!passwordRegex.test(userData.password)) {
        errors.password = "La contraseña debe contener al menos 8 caracters"
    }
    if(userData.password > 6 && userData.password < 10) {
        errors.password = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres"
    }

    return errors
};

export default validate;
