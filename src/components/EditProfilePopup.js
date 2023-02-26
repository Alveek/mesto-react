import { useContext, useEffect, useState } from 'react';
import PopupWithForm from './ PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, isLoading, onUpdateUser }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm title="Редактировать профиль" name="profile-info" isOpen={isOpen} onClose={onClose} isLoading={isLoading} buttonText="Сохранить" onSubmit={handleSubmit}>
      <input className="form__input form__input_user_name" id="user-name-input" name="name" value={name ? name : ''} onChange={(event) => setName(event.target.value)} type="text" placeholder="Ваше имя" autoComplete="off" minLength="2" maxLength="40" required />
      <span className="form__input-error user-name-input-error"></span>
      <input className="form__input form__input_user_job" id="user-job-input" name="about" value={description ? description : ''} onChange={(event) => setDescription(event.target.value)} type="text" placeholder="Род деятельности" autoComplete="off" minLength="2" maxLength="200" required />
      <span className="form__input-error user-job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
