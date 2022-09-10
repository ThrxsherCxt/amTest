import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import useCharacters from "../../hooks/useCharacters";

const Modal = () => {
  const { data, sendData, handleInputChange, selectImage, closeModal } = useCharacters();

  return (
    <div className="modal-background modalHidden" id="modal">
      <div className="modal">
        <div className="topBar">
          <div className="titleModal">Agrega un personaje</div>
          <div className="closeModal">
            <FontAwesomeIcon icon={faCircleXmark} className="icons" onClick={() => closeModal()}/>
          </div>
        </div>

        <form className="body" onSubmit={sendData}>
          <div className="inputGroup">
            <div className="inputLabel">NOMBRE</div>
            <input
              value={data.name}
              className="inputItem"
              type="text"
              name="name"
              onChange={handleInputChange}
            />
          </div>

          <div className="inputGroup">
            <div className="inputLabel">CUMPLEAÑOS</div>
            <input
              value={data.birthday}
              className="inputItem"
              type="date"
              name="birthday"
              onChange={handleInputChange}
            />
          </div>

          <div className="inputGroup">
            <div className="inputLabel">COLOR DE OJOS</div>
            <input
              value={data.eyeColour}
              className="inputItem"
              type="text"
              name="eyeColour"
              onChange={handleInputChange}
            />
          </div>

          <div className="inputGroup">
            <div className="inputLabel">COLOR DE PELO</div>
            <input
              value={data.hairColour}
              className="inputItem"
              type="text"
              name="hairColour"
              onChange={handleInputChange}
            />
          </div>

          <div className="inputGroup">
            <div className="inputLabel">CASA</div>
            <select
              className="selectItem"
              value={data.house}
              name="house"
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Elige una opción
              </option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ninguna">Ninguna de las anteriores</option>
            </select>
          </div>

          <div className="inputGroup">
            <div className="inputLabel">STATUS</div>
            <select
              className="selectItem"
              value={data.status}
              name="status"
              onChange={handleInputChange}
            >
              <option value={true}>Vivo</option>
              <option value={false}>Finado</option>
            </select>
          </div>

          <div className="inputGroup">
            <div className="inputLabel">GÉNERO</div>
            <div className="radioGroup">
              <label>
                <input
                  type="radio"
                  checked={data.gender === "Mujer"}
                  name="gender"
                  value="Mujer"
                  onChange={handleInputChange}
                />
                Mujer
              </label>
              <label>
                <input
                  type="radio"
                  checked={data.gender === "Hombre"}
                  name="gender"
                  value="Hombre"
                  onChange={handleInputChange}
                />
                Hombre
              </label>
            </div>
          </div>

          <div className="inputGroup">
            <div className="inputLabel">POSICIÓN</div>
            <div className="radioGroup">
              <label>
                <input
                  type="radio"
                  checked={data.position === "Estudiante"}
                  name="position"
                  value="Estudiante"
                  onChange={handleInputChange}
                />
                Estudiante
              </label>
              <label>
                <input
                  type="radio"
                  checked={data.position === "Staff"}
                  name="position"
                  value="Staff"
                  onChange={handleInputChange}
                />
                Staff
              </label>
            </div>
          </div>

          <div className="inputGroupPhoto">
            <div className="inputLabel">FOTOGRAFÍA</div>
            <div className="photo-container">
              <div className="photo">
                <img alt="userImage" id="img" src={data.image} />
              </div>
            </div>
            <button
              onClick={() => selectImage()}
              type="button"
              className="selectPhoto"
            >
              Añadir fotografía
            </button>
            <input
              className="hidden"
              type="file"
              name="image"
              id="imagen"
              accept="image/*"
              onChange={handleInputChange}
            />
          </div>

          <div className="buttonContainer">
            <button className="saveButton" type="submit">GUARDAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
