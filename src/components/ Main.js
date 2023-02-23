import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState("");

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    });
  }

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
        setIsLoading(false);
      })
      .catch((err) => {
        setLoadingError(`Что-то пошло не так... (${err})`);
        console.log(err);
      });
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} error={loadingError} />

      <main className={`content ${isLoading ? "hide" : "show"}`}>
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              src={currentUser.avatar}
              alt="Аватарка"
              className="profile__avatar"
            />
            <img
              onClick={onEditAvatar}
              className="profile__updavatar-button"
              src="/images/icon-pencil.svg"
              alt="edit-pencil"
            />
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__edit-button opacity"
            ></button>
            <p className="profile__job">{currentUser.about}</p>
          </div>
          <button
            onClick={onAddPlace}
            type="button"
            className="profile__add-button opacity"
          ></button>
        </section>

        <Card
          cards={cards}
          onCardClick={onCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
      </main>
    </>
  );
}

export default Main;
