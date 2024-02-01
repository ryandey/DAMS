"use client"
import { SubmitHandler, useForm } from "react-hook-form"

interface Inputs {
  example: string
  exampleRequired: string
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  // What to do when the form is submitted
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  // Printed as things are being typed in the example field
  console.log(watch("example"))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Example Input with a Default Value */}
      <input defaultValue={"test"} {...register("example")} />

      {/* Required Field */}
      <input {...register("exampleRequired", { required: true })} />

      {/* Shown if the form is submitted without the required field */}
      {errors.exampleRequired && <span>This field is required</span>}

      {/* Submit Form */}
      <input type="submit" />
    </form>
  )
}
