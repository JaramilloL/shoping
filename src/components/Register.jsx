import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async(data) => { //creamos una peticion asincrona 
    console.log(data);
    try {
      await registerUser(data.email, data.password)
    } catch (error) {
      console.log(error);
    }
    reset();
  });

  //usamos el contexto de el estado para usar la creacion del usuario 
  const { registerUser } = useContext(UserContext)


  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputText"
            placeholder="name"
            name="username"
            {...register("username", {
              required: {
                value: true,
                message: "Please enter username",
              },
            })}
          />
          {errors?.username?.message}
          <label htmlFor="floatingInputText">User </label>
        </div>
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
        <input type="submit" className="btn btn-primary" />
      </form>
    </>
  );
};

export default Register;
