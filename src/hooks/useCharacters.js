/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
    status: true,
    gender: "Mujer",
    position: "Estudiante",
    image:
      "https://i.pinimg.com/736x/d9/9c/46/d99c46c56a34df5e29b2e84ae5da3830.jpg",
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

  const selectImage = () => {
    document.querySelector("#imagen").click();
  };

  const sendData =  async (event) => {
    event.preventDefault();

    document.querySelector(".saveButton").disabled = "disabled";
    document.querySelector(".saveButton").innerHTML = "GUARDANDO...";

    const payload = {
      name: data.name !== "" ? data.name : "No especificado",
      dateOfBirth: data.birthday,
      eyeColour: data.eyeColour !== "" ? data.eyeColour : "No especificado",
      hairColour: data.hairColour !== "" ? data.hairColour : "No especificado",
      house: data.house !== "Ninguna" ? data.house : "",
      alive: data.status === "false" ? false : true,
      gender: data.gender,
      hogwartsStudent: data.position === "Estudiante",
      hogwartsStaff: data.position === "Staff",
      image:
        data.image !== ""
          ? data.image
          : "https://i.pinimg.com/736x/d9/9c/46/d99c46c56a34df5e29b2e84ae5da3830.jpg",
    };

    try {
      const response = await dispatch(addCharacter(payload));
      const data = [...charactersListData, response]
      setCharactersListData(data);
      console.log(charactersListData);
    } catch (error) {
      console.error(`Ocurrió un error.\n${error}`);
    }
    closeModal();
  };

  const getCharactersListData = async () => {
    try {
      const response = await dispatch(fetchCharacters());
      const data = response;
      setCharactersListData(data);
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

  const openModal = () => {
    document.querySelector("#modal").classList.remove("modalHidden");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    document.querySelector("#modal").classList.add("modalHidden");
    document.body.style.overflow = "auto";

    setData({
      name: "",
      birthday: "",
      eyeColour: "",
      hairColour: "",
      house: "",
      status: true,
      gender: "Mujer",
      position: "Estudiante",
      image:
        "https://i.pinimg.com/736x/d9/9c/46/d99c46c56a34df5e29b2e84ae5da3830.jpg",
    });

    document.querySelector(".saveButton").disabled = false;
    document.querySelector(".saveButton").innerHTML = "GUARDAR";
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
    selectImage,
    openModal,
    closeModal,
  };
};

export default useCharacters;
