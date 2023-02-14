/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormEnum } from "./form-enum";
import { DevTool } from "@hookform/devtools";
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

interface FormProps {
  type: FormEnum;
}

interface FormDetails {
  email: string;
  password: string;
  repeatPassword?: string;
}

const Form = ({ type }: FormProps) => {
  const { data: session } = useSession();
  
  const renderForm = () => {
    if (type === FormEnum.SIGNIN) {
      return (
        <>
          <FormTitle>Login</FormTitle>
          <ProviderButton
            onClick={() => {
              signIn();
            }}
          >
            <img
              src={"/assets/google.png"}
              width={25}
              height={25}
              alt="google-logo"
            />
            Sign in with Google
          </ProviderButton>
          <ProviderButton onClick={() => signIn()}>
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
      );
    }
    return (
      <>
        <FormTitle>Sign Up</FormTitle>
        <ProviderButton>
          <img
            src={"/assets/google.png"}
            width={25}
            height={25}
            alt="google-logo"
          />
          Sign up with Google
        </ProviderButton>
        <ProviderButton>
          <img
            src={"/assets/github.png"}
            width={25}
            height={25}
            alt="github-logo"
          />
          Sign up with GitHub
        </ProviderButton>
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
        <img
          src={"/assets/logo.svg"}
          alt={"logo-image"}
          width={32}
          height={25.6}
        />
      </FormIcon>
      <FormArea>
        <>
          {renderForm()}
        </>
      </FormArea>
    </FormWrapper>
  );
};

export default Form;
