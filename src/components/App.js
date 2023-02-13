import Header from './ Header';
import Main from './ Main';
import Footer from './Footer';
import PopupWithForm from './ PopupWithForm';
import {useState} from 'react';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);

  const handleCardClick = (data) => {
    setSelectedCard(data)
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard([]);
  };

  return (
    <div className="page">
      <Header/>
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer/>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      <PopupWithForm title="Редактировать профиль" name="profile-info"
                     isOpen={isEditProfilePopupOpen ? 'popup_opened' : 'popup_hidden'} onClose={closeAllPopups}>
        <input
          className="form__input form__input_user_name"
          id="user-name-input"
          name="name"
          type="text"
          placeholder="Ваше имя"
          autoComplete="off"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error user-name-input-error"></span>
        <input
          className="form__input form__input_user_job"
          id="user-job-input"
          name="about"
          type="text"
          placeholder="Род деятельности"
          autoComplete="off"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error user-job-input-error"></span>
        <button className="form__button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title="Новое место" name="add-card" isOpen={isAddPlacePopupOpen ? 'popup_opened' : 'popup_hidden'}
                     onClose={closeAllPopups}>
        <input
          className="form__input form__input_card_name"
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
          id="card-link-input"
          name="cardLink"
          type="url"
          placeholder="Ссылка на картинку"
          autoComplete="off"
          required
        />
        <span className="form__input-error card-link-input-error"></span>
        <button className="form__button" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" name="update-avatar"
                     isOpen={isEditAvatarPopupOpen ? 'popup_opened' : 'popup_hidden'} onClose={closeAllPopups}>
        <input
          className="form__input form__input_avatar_link"
          id="avatar-link-input"
          name="avatarLink"
          type="url"
          placeholder="Ссылка на картинку"
          autoComplete="off"
          required
        />
        <span className="form__input-error avatar-link-input-error"></span>
        <button className="form__button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="delete-card">
        <button className="form__button" type="submit">Да</button>
      </PopupWithForm>
    </div>
  );
}

export default App;
