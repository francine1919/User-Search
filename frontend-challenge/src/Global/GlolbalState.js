import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../Constants/constants";
import useGet from "../Hooks/useGet";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
  //   const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const  {data, isLoading}  = useGet("/?page=1&results=50");
  // console.log(data);
  
  //   const [pokeDetails, setPokeDetails] = useState([]);
  //   const [pokedex, setPokedex] = useState([]);

  //   const data = useGet("?limit=20");
  //   const details = [];
  //   const getDetails = async () => {
  //     for (const poke of data) {
  //       try {
  //         const res = await axios.get(
  //           `https://pokeapi.co/api/v2/pokemon/${poke.name}`
  //         );
  //         details.push(res.data);
  //         setPokeDetails([...details]);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   };
  //   const addToPokedex = (newItem) => {
  //     const newPokedex = [...pokedex];

  //     if (newPokedex.includes(newItem)) {
  //       alert("O pokemon já foi adicionado");
  //     } else {
  //       newPokedex.push(newItem);
  //     }

  //     setPokedex(newPokedex);
  //   };

  //   const excluirPokemon = (newItem) => {
  //     const newPokedex = [...pokedex];
  //     const indexPokemon = pokedex.findIndex((item) => item === newItem);
  //     newPokedex.splice(indexPokemon, 1);
  //     setPokedex(newPokedex);
  //     console.log(newPokedex);
  //   };

  //   useEffect(() => {
  //     getDetails();
  //   }, [data]);
  return (
    <GlobalContext.Provider value={{data,isLoading,setIsModalOpen,isModalOpen}}>{props.children}</GlobalContext.Provider>
  );
};
export default GlobalState;
