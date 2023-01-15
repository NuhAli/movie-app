import Head from "next/head";
import Image from "next/image";
import { createClient } from "next-sanity";
import { FormEnum } from "../components/forms/form-enum";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Form from "../components/forms/form";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../components/forms/form-style";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NavBar from "../components/NavBar/nav-bar";

export default function BookMark() {
  const { data: session } = useSession();
  const { status } = useSession();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar />
      </main>
    </>
  );
}
