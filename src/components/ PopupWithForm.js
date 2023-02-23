import { useEffect, useRef } from "react";
import FormValidator from "../utils/FormValidator";
import { validationConfig } from "../utils/utils";

function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  buttonText,
  onSubmit,
  children,
}) {
  const currentForm = useRef(null);

  useEffect(() => {
    const form = new FormValidator(currentForm.current, validationConfig);
    form.enableValidation();
  }, [currentForm]);

  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className="form"
          ref={currentForm}
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button className="form__button" type="submit">
            {buttonText}
          </button>
        </form>
        <button
          onClick={onClose}
          type="button"
          className="popup__close-button opacity"
          aria-label="Закрыть попап"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
