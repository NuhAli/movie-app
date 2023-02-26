/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import {
  Button,
  FormArea,
  FormIcon,
  FormText,
  FormTitle,
  FormWrapper,
  Highlight,
  Input,
  ProviderButton,
} from "./form-style";

interface FormDetails {
  email: string;
  password: string;
  repeatPassword?: string;
}

const Form = () => {
  return (
    <FormWrapper>
      <FormIcon>
        <img
          src={"/assets/logo.svg"}
          alt={"logo-image"}
          width={32}
          height={25.6}
        />
      </FormIcon>
      <FormArea>
        <>
          <FormTitle>Login</FormTitle>
          <ProviderButton type={"button"} onClick={() => signIn("google")}>
            <img
              src={"/assets/google.png"}
              width={25}
              height={25}
              alt="google-logo"
            />
            Sign in with Google
          </ProviderButton>
          <ProviderButton type={"button"} onClick={() => signIn("github")}>
            <img
              src={"/assets/github.png"}
              width={25}
              height={25}
              alt="github-logo"
            />
            Sign in with GitHub
          </ProviderButton>
          <FormText>
            Dont have an account?{" "}
            <Highlight href={"/sign-up"}>Sign Up</Highlight>
          </FormText>
        </>
      </FormArea>
    </FormWrapper>
  );
};

export default Form;
