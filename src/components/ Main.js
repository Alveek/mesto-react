import { api } from "../utils/api";
import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // set later to true
  const [loadingError, setLoadingError] = useState("");

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

        <Card cards={cards} onCardClick={onCardClick} />
      </main>
    </>
  );
}

export default Main;
