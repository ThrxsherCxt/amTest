import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useForm } from 'react-hook-form';
import { fetchCharacters, addCharacter } from "../redux/slices/charactersSlice";

const useCharacters = () => {
  const dispatch = useDispatch();
  const [charactersListData, setCharactersListData] = useState([]);
  const [filter, setFilter] = useState("");
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getCharactersListData();
  }, []);

  // const {
  //     register,
  //     handleSubmit,
  //     reset,
  //     formState: { errors }
  //   } = useForm();

  //   useEffect(() => {
  //     reset(null);
  //   }, [null]);

  const getCharactersListData = async () => {
    try {
      const response = await dispatch(fetchCharacters());
      setCharactersListData(response);
    } catch (error) {
      console.error(`Ocurrió un error.\n${error}`);
      setCharactersListData([]);
    }
  };

  const filterCharacters = (value) => {
    if (filter !== value) {
      setFilter(value);
      if (value) {
        document.querySelector("#buttonStudent").classList.add("activeFilter");
        document.querySelector("#buttonStaff").classList.remove("activeFilter");
      } else {
        document.querySelector("#buttonStaff").classList.add("activeFilter");
        document
          .querySelector("#buttonStudent")
          .classList.remove("activeFilter");
      }
    } else {
      setFilter("");
      document.querySelector("#buttonStaff").classList.remove("activeFilter");
      document.querySelector("#buttonStudent").classList.remove("activeFilter");
    }
  };

  const addToFavourites = async (character) => {
    if (favourites.length < 5) {
      setFavourites([...favourites, character]);
    }
  };

  const removeFromFavourites = async (character) => {
    setFavourites(favourites.filter((favourite) => favourite !== character));
  };

  return {
    charactersListData,
    getCharactersListData,
    filter,
    setFilter,
    filterCharacters,
    favourites,
    addToFavourites,
    removeFromFavourites,
  };
};

export default useCharacters;
