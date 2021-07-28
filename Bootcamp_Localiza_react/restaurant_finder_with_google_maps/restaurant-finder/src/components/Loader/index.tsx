import Lottie from "react-lottie";

import animationData from "../../assets/restaurants-loading.json";

function Loader() {
  const defaultOptions = {
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} />;
}

export default Loader;
