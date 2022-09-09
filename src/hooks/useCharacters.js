import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useForm } from 'react-hook-form';
import {
    fetchCharacters,
    addCharacter,
    addFavourite,
    removeFavourite
  } from '../redux/slices/charactersSlice';

  const useCharacters = () => {
    const dispatch = useDispatch();
    const [charactersListData, setCharactersListData] = useState([]);

    useEffect(()=> {
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

      return {
        charactersListData,
        getCharactersListData
      }

  }

export default useCharacters;