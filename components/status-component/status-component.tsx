import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";

const Status = (): React.ReactElement=> {
  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    
  }, [status]);
  return <></>
};

export default Status;
