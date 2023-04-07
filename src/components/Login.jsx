import { useState } from "react";
import validate from "./validation";

const Login = ({ login }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      setInputs({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
      login(inputs);
      return alert("Bienvenido");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email: </label>
        <input
          type="text"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <p className="danger">{errors.email}</p>
        <label htmlFor="">Password: </label>
        <input
          type="text"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <p className="danger">{errors.password}</p>
        {Object.keys(errors).length === 0 ? (
          <button type="submit">Ingresar</button>
        ) : null}
      </form>
    </div>
  );
};

export default Login;
