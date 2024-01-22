import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { logIn, loginAcces, loginWithGoogle } = useContext(UserContext);
  const navigate = useNavigate();
  //*Vamos a controlar la entrada de los input para evaluar los caracteres

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    //traemos la info de los input
    console.log(data);
    try {
      //*llamamos la funcion de inicio de sesion echa en el estado
      await logIn(data.email, data.password);
      loginAcces(); //?este login indica el acceso a la pagina home es decir es el dispatch
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    reset();
  });

  const getUserGoogle = async () => {
    try {
      await loginWithGoogle();
      loginAcces();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
          {...register("email", {
            required: {
              value: true,
              message: "Please enter email",
            },
          })}
        />
        {errors?.email?.message}

        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          {...register("password", {
            required: {
              value: true,
              message: "Please enter email",
            },
          })}
        />
        {errors?.email?.message}

        <label htmlFor="floatingPassword">Password</label>
      </div>
      <input type="submit" className="btn btn-primary" value={"submite"} />
      <input
        type="submit"
        className="btn btn-primary"
        value={"google"}
        onClick={getUserGoogle}
      />
    </form>
  );
};

export default Login;
