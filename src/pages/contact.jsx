import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div className="page px-10 h-screen grid place-items-center">
      <div className="w-full flex flex-col justify-start pt-10">
        <h2>Contact</h2>
        <p>Konrad Salwiński</p>
      </div>
      <form
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/patryk.kobylarczyk@gmail.com"
        method="POST"
        className="max-w-2xl"
      >
        <input
          className="w-full bg-transparent border-b-[1px] border-b-white font-semibold placeholder-white/40 p-3  placeholder:font-light"
          type="text"
          placeholder="name"
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.name && (
          <p className="text-red mt-1">
            {errors.name.type === "required" && "This field is required."}
            {errors.name.type === "maxLength" && "<Max length is 100 chars."}
          </p>
        )}

        <input
          className="w-full bg-transparent border-b-[1px] border-b-white font-semibold placeholder-white/40 p-3  placeholder:font-light mt-5"
          type="text"
          placeholder="email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="text-red mt-1">
            {errors.email.type === "required" && "This field is required."}
            {errors.email.type === "pattern" && "Invalid email address."}
          </p>
        )}

        <textarea
          className="w-full bg-transparent border-b-[1px] border-b-white font-semibold placeholder-white/40 p-3  placeholder:font-light mt-5"
          name="message"
          placeholder="message"
          rows="4"
          cols="50"
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors.message && (
          <p className="text-red mt-1">
            {errors.message.type === "required" && "This field is required."}
            {errors.message.type === "maxLength" && "Max length is 2000 char."}
          </p>
        )}

        <button
          className="p-5 bg-transparent border-[1px]  font-semibold text-white mt-5 hover:bg-white hover:text-black transition duration-300"
          type="submit"
        >
          Napisz do mnie
        </button>
      </form>
    </div>
  );
};

export default Contact;
