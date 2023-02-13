function ImagePopup({card, onClose}) {
  return (
    <>
      <div className={`popup popup_type_image-preview ${card.length != 0 ? 'popup_opened' : 'popup_hidden'}`}>
        <div className="popup__image-container">
          <img className="popup__image" src={card.link} alt=""/>
          <p className="popup__image-description">{card.name}</p>
          <button onClick={onClose} type="button" className="popup__close-button opacity" aria-label="Закрыть попап"></button>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
