import React from "react";

// LIBS
import { useForm } from "react-hook-form";

// DATA
import { lang_EN } from "../data/lang-pack";
import { lang_PL } from "../data/lang-pack";

const ContactForm = ({ language }) => {
  const lang = language === "PL" ? lang_EN : lang_PL;

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
    <form
      target="_blank"
      onSubmit={onSubmit}
      action="https://formsubmit.co/duomilonga@gmail.com"
      method="POST"
      className="max-w-2xl z-20 mt-10"
    >
      <input
        className="w-full bg-transparent border-b-[1px] border-b-white font-semibold placeholder-white/70 p-2  placeholder:font-light"
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
        className="w-full bg-transparent border-b-[1px] border-b-white font-semibold placeholder-white/70 p-2  placeholder:font-light mt-2"
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
        className="w-full bg-transparent border-b-[1px] border-b-white font-semibold placeholder-white/70 p-2  placeholder:font-light mt-2"
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
        className="button font-semibold text-xs text-white mt-5 hover:bg-white hover:text-black transition duration-300 text-end"
        type="submit"
      >
        {lang.contact_contact_form_button}
      </button>
    </form>
  );
};

export default ContactForm;
