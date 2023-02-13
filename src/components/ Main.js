import {api} from '../utils/api';
import {useEffect, useState} from 'react';
import Card from './Card'
import Loader from './Loader';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState('')


  useEffect(()=> {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);

      })
      .catch((err) => {
        setLoadingError(`Что-то пошло не так... (${err})`)
        console.log(err);
      }).finally(() => {
        userName ? setIsLoaded(true) : setIsLoaded(true)
    })
  }, [])

  return (
    <>
      <Loader isLoaded={isLoaded} error={loadingError}/>

      <main className={`content ${isLoaded ? 'show' : 'hide'}`}>
        <section className="profile">
          <div className="profile__avatar-container">
            <img src={userAvatar} alt="Аватарка" className="profile__avatar" />
            <img onClick={onEditAvatar} className="profile__updavatar-button" src="/images/icon-pencil.svg"
                 alt="edit-pencil"/>
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} type="button" className="profile__edit-button opacity"></button>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button onClick={onAddPlace} type="button" className="profile__add-button opacity"></button>
        </section>

        <Card cards={cards} onCardClick={onCardClick}/>
      </main>
    </>
  );
}

export default Main;
