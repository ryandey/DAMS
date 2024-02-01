"use client"
import { SubmitHandler, useForm, Form } from "react-hook-form"

interface Inputs {
  email: string
  password: string
}

export default function RegisterForm() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  return (
    <Form
      action="/api/auth/register"
      method="post"
      control={control}
      onSubmit={({ data }) => console.log(data)}
      onSuccess={() => console.log("Successfully submitted registration form")}
      onError={() => console.log("Failed to submit registration form")}
      className="flex flex-col gap-2"
    >
      {/* Email Field */}
      <input
        className="border border-black"
        type="email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-md text-red-500">This field is required</span>
      )}

      {/* Password Field */}
      <input
        type="password"
        className="border border-black"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <span className="text-md text-red-500">This field is required</span>
      )}

      {/* Submit Form */}
      <input type="submit" />
    </Form>
  )
}
