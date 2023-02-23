function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  buttonText,
  onSubmit,
  children,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="form" name={name} onSubmit={onSubmit} noValidate>
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
