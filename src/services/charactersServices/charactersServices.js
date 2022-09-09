import axiosInstance from '../api';

export const listCharacters = async () =>
  axiosInstance.get("/characters").then(
    (response) => response.data,
    (error) => error
  );

export const newCharacter = async (data) =>
  axiosInstance.post("/characters", data).then(
    (response) => response.data,
    (error) => error
  );
