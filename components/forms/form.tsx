import React, { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormEnum } from "./form-enum";
import {
  Button,
  FormArea,
  FormIcon,
  FormText,
  FormTitle,
  FormWrapper,
  Highlight,
  Input,
} from "./form-style";

interface FormProps {
  type: FormEnum;
}

interface FormDetails{
  email: string;
  password: string;
  repeatPassword?: string;
}

const Form = ({ type }: FormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { register, handleSubmit } = useForm<FormDetails>();

  const onSubmit: SubmitHandler<FormDetails> = (data) => {
    console.log(data);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>, state: string) => {
    if (state === "email") {
      setEmail(e.currentTarget.value);
    }
    if (state === "password") {
      setPassword(e.currentTarget.value);
    } else {
      setRepeatPassword(e.currentTarget.value);
    }
  };

  const renderForm = () => {
    if (type === FormEnum.SIGNIN) {
      return (
        <>
          <FormTitle>Login</FormTitle>
          <Input
            type={"email"}
            placeholder={"Email address"}
            {...register("email", { required: true })}
          />
          <Input
            type={"password"}
            placeholder={"Password"}
            {...register("password", { required: true })}
          />
          <Button type="submit">Login to your account</Button>
          <FormText>
            Dont have an account?{" "}
            <Highlight href={"/sign-up"}>Sign Up</Highlight>
          </FormText>
        </>
      );
    }
    return (
      <>
        <FormTitle>Sign Up</FormTitle>
        <Input
          type={"email"}
          placeholder={"Email address"}
          {...register("email", { required: true })}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          {...register("password", { required: true })}
        />
        <Input
          type={"password"}
          placeholder={"Repeat password"}
          {...register("repeatPassword", { required: true })}
        />
        <Button type="submit">Create an account</Button>
        <FormText>
          Already have an account?{" "}
          <Highlight href={"/sign-in"}>Login</Highlight>
        </FormText>
      </>
    );
  };

  return (
    <FormWrapper>
      <FormIcon>
        <Image
          src={"/assets/logo.svg"}
          alt={"logo-image"}
          width={32}
          height={25.6}
        />
      </FormIcon>
      <FormArea onSubmit={handleSubmit(onSubmit)}>{renderForm()}</FormArea>
    </FormWrapper>
  );
};

export default Form;
