const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const validate = (input) => {
  let errors = {};
  if (!regexEmail.test(input.email)) {
    errors.email = "El nombre de usuario tiene que ser un email";
  }
  if (!input.email) {
    errors.email = "El nombre de usuario no puede estar vacío";
  }
  if (input.email.length > 35) {
    errors.email = "No puede tener más de 35 caracteres";
  }
  if (regexPassword.test(input.password)) {
    errors.password = "La contraseña debe contener al menos 8 caracteres";
  }
  if (input.password.length >= 6 && input.password.length <= 10) {
    errors.password =
      "la contraseña tiene que tener una longitud entre 6 y 10 caracteres";
  }

  return errors;
};

export default validate;
