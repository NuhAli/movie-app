/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { LogoArea, PageTitle } from "../styles/common";
import { motion } from "framer";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const LandingPage = () => {
  const session = useSession();
  const router = useRouter();

  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };

  useEffect(() => {
    if (session.status === "unauthenticated") {
      setTimeout(() => {
        router.push("/sign-in");
      }, 3000);
    } 
    else if(session.status === "authenticated") {
      router.push("/home");
    }
  }, [session]);

  return (
    <LogoArea>
      <motion.img
        src={"/assets/logo.svg"}
        alt={"logo-image"}
        width={32}
        height={25.6}
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%"],
        }}
      />
      <PageTitle>Sanity Media</PageTitle>
    </LogoArea>
  );
};

export default LandingPage;
