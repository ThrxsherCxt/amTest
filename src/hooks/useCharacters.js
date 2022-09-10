/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchCharacters, addCharacter } from "../redux/slices/charactersSlice";

const useCharacters = () => {
  const dispatch = useDispatch();
  const [charactersListData, setCharactersListData] = useState([]);
  const [filter, setFilter] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [data, setData] = useState({
    name: "",
    birthday: "",
    eyeColour: "",
    hairColour: "",
    house: "",
    status: "",
    gender: "",
    position: "",
    image: "https://i.pinimg.com/736x/d9/9c/46/d99c46c56a34df5e29b2e84ae5da3830.jpg",
  });

  useEffect(() => {
    getCharactersListData();
  }, []);

  const handleInputChange = async (event) => {
    if (event.target.name === "image") {
      setData({
        ...data,
        [event.target.name]: await compressImage(event.target, 800),
      });
      document.querySelector(".selectPhoto").innerHTML = "Cambiar fotografía";
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
  };


  const sendData = (event) => {
    event.preventDefault();
    console.log(data);
  };

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

  const showFavoritosTab = () => {
    document.querySelector(".favoritosList").classList.toggle("showList");
  };

  const compressImage = async (e, t) => {
    if ("image" === e.files[0].type.split("/")[0]) {
      let a = new FileReader();
      a.readAsDataURL(e.files[0]);
      const i = await new Promise((e) => {
        a.onload = (a) => {
          let i = new Image();
          (i.src = a.target.result),
            (i.onload = () => {
              let a = i.width,
                h = i.height,
                n = document.createElement("canvas"),
                l = n.getContext("2d");
              h < a
                ? ((n.height = t), (n.width = n.height * (a / h)))
                : ((n.width = t), (n.height = n.width * (h / a))),
                l.drawImage(
                  i,
                  0,
                  0,
                  i.width,
                  i.height,
                  0,
                  0,
                  n.width,
                  n.height
                ),
                e(n.toDataURL("image/jpeg"));
            });
        };
      });
      return (e.value = ""), i;
    }
    return (e.value = ""), null;
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
    showFavoritosTab,
    data,
    sendData,
    handleInputChange,
  };
};

export default useCharacters;
