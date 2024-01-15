import { useNavigate } from "react-router-dom";

export const useHomeViewModel = () => {
  const navigate = useNavigate();
  function handleStart() {
    navigate("/map");
  }

  return {
    handleStart,
  };
};
