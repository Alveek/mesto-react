import PopupWithForm from "./ PopupWithForm";
import { useState } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardName, setCardName] = useState("");
  const [cardLink, setCardLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace({
      name: cardName,
      link: cardLink,
    });
  };

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <input
        className="form__input form__input_card_name"
        value={cardName}
        onChange={(event) => setCardName(event.target.value)}
        id="card-name-input"
        name="cardName"
        type="text"
        placeholder="Название"
        autoComplete="off"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="form__input-error card-name-input-error"></span>
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
