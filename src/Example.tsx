import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
  username: string;
}

const Example: React.FC = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<FormData>();
  
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        type="email"
        {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        {...register("username", {
          validate: (value) => value !== "admin" || "Nice try!"
        })}
      />
      {errors.username && <span>{errors.username.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Example;
