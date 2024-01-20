import { useForm } from 'react-hook-form'

const Login = () => {
  //*Vamos a controlar la entrada de los input para evaluar los caracteres

  const { handleSubmit, register, reset, formState: { errors } } = useForm();

  const onSubmit = handleSubmit((data) => {//traemos la info de los input
    console.log(data)
    reset();
  })

  return (
    <form onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name='email'
          {
            ...register("email", {
              required: {
                value: true,
                message: 'Please enter email'
              }
            })
          }
        />
        { errors?.email?.message }

        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name='password'
          {
            ...register("password", {
              required: {
                value: true,
                message: 'Please enter email'
              }
            })
          }
        />
        { errors?.email?.message }

        <label htmlFor="floatingPassword">Password</label>
      </div>
      <input type="submit" className="btn btn-primary"/>

    </form>
  );
};

export default Login;
