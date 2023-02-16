import React, { useEffect, useState } from "react";
import { LoadingOverlay } from "./loading-spinner.styles";
import { ClipLoader } from "react-spinners";

interface LoadingBannerProps {
  loading: boolean;
}

const Loading = ({ loading }: LoadingBannerProps): JSX.Element => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(loading);
  }, [loading]);

  return (
    <LoadingOverlay animate={loading ? { opacity: 1 } : { opacity: 0, zIndex: 1 }}>
      <ClipLoader color="#fc4747" size={70} loading={loading} />
    </LoadingOverlay>
  );
};

export default Loading;
