import { useState } from "react";
import useGet from "../Hooks/useGet";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const  {data, isLoading}  = useGet("/?page=1&results=50");
 
  return (
    <GlobalContext.Provider value={{data,isLoading,setIsModalOpen,isModalOpen}}>{props.children}</GlobalContext.Provider>
  );
};
export default GlobalState;
