import { createSlice } from "@reduxjs/toolkit";
import {
  listCharacters,
  newCharacter,
} from "../../services/tempFolders/tempFoldersServices";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    favourites: [],
  },
  reducers: {
    showCharacters: (state, action) => (state.characters = action.payload),
    pushCharacter: (state, action) => state.characters.push(action.payload),
    addToFavourites: (state, action) => state.favourites.push(action.payload),
    removeFromFavourites: (state, action) =>
      state.favourites.splice(state.favourites.indexOf(action.payload), 1),
  },
});

export const { showCharacters, pushCharacter, addToFavourites, removeFromFavourites } = charactersSlice.actions;

export const fetchCharacters = () => async (dispatch) => {
  try {
    const response = await listCharacters();
    dispatch(showCharacters(response.data));
    return response.status;
  } catch (error) {
    console.error(`No hay conexión con el API.\n${error}`);
    return [];
  }
};

export const addCharacter = (data) => async (dispatch) => {
  try {
    const response = await newCharacter(data);
    dispatch(pushCharacter(response.data));
    return response.status;
  } catch (error) {
    console.error(`Ocurrió un error.\n${error}`);
    return error;
  }
};

export const addFavourite = (data) => async (dispatch) => {
  try {
    dispatch(pushCharacter(data));
    return 'OK';
  } catch (error) {
    console.error(`Ocurrió un error.\n${error}`);
    return error;
  }
};

export const removeFavourite = (data) => async (dispatch) => {
  try {
    dispatch(removeFromFavourites(data));
    return 'OK';
  } catch (error) {
    console.error(`Ocurrió un error.\n${error}`);
    return error;
  }
};
