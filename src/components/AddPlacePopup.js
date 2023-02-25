import PopupWithForm from "./ PopupWithForm";
import { useEffect, useRef, useState } from "react";

function AddPlacePopup({ isOpen, onClose, isLoading, onAddPlace }) {
  const [cardName, setCardName] = useState("");
  const [cardLink, setCardLink] = useState("");
  const cardNameInput = useRef(null);
  const [nameErrorMessage, setNameErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace({
      name: cardName,
      link: cardLink,
    });
  };

  useEffect(() => {
    setCardName("");
    setCardLink("");
  }, [onClose]);

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <input
        className="form__input form__input_card_name"
        value={cardName}
        ref={cardNameInput}
        onChange={(event) => {
          setCardName(event.target.value);
          setNameErrorMessage(cardNameInput.current.validationMessage);
        }}
        id="card-name-input"
        name="cardName"
        type="text"
        placeholder="Название"
        autoComplete="off"
        minLength="2"
        maxLength="40"
        required
      />
      <span
        className={`form__input-error card-name-input-error ${
          nameErrorMessage ? "form__input-error_active" : ""
        }`}
      >
        {nameErrorMessage}
      </span>
      <input
        className="form__input form__input_card_link"
        value={cardLink}
        onChange={(event) => setCardLink(event.target.value)}
        id="card-link-input"
        name="cardLink"
        type="url"
        placeholder="Ссылка на картинку"
        autoComplete="off"
        required
      />
      <span className="form__input-error card-link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
