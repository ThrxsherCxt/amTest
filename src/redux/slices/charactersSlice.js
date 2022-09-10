import { createSlice } from "@reduxjs/toolkit";
import {
    listCharacters,
    newCharacter,
  } from "../../services/charactersServices/charactersServices";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
  },
  reducers: {
    showCharacters: (state, action) => { state.characters = action.payload },
    pushCharacter: (state, action) => { state.characters = [...state.characters, action.payload] }
  },
});

export const { showCharacters, pushCharacter, getCharacters } = charactersSlice.actions;

export const fetchCharacters = () => async (dispatch) => {
  try {
    const response = await listCharacters();
    dispatch(showCharacters(response.data));
    return response.status === 200 ? response.data : response.status;
  } catch (error) {
    console.error(`No hay conexión con el API.\n${error}`);
    return [];
  }
};

export const addCharacter = (data) => async (dispatch) => {

  try {
    const response = await newCharacter(data);
    dispatch(pushCharacter(response.data));
    return response.status === 201 ? response.data : response.status;
  } catch (error) {
    console.error(`Ocurrió un error.\n${error}`);
    return error;
  }
};


export default charactersSlice.reducer