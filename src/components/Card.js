import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ cards, onCardClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="card" aria-label="Карточки">
      <ul className="card__items">
        {cards.map((card) => {
          const isOwn = card.owner._id === currentUser._id;
          const cardDeleteButtonClassName = `card__delete-button opacity ${
            isOwn ? "show" : "hide"
          }`;
          const isLiked = card.likes.some((i) => i._id === currentUser._id);
          const cardLikeButtonClassName = `card__like-button opacity ${
            isLiked ? "card__like-button_liked" : ""
          }`;

          return (
            <li key={card._id} className="card__item">
              <img
                onClick={() => onCardClick(card)}
                className="card__image"
                src={card.link}
                alt={card.name}
              />
              <div className="card__description">
                <p className="card__title">{card.name}</p>
                <div className="card__like-container">
                  <button
                    type="button"
                    className={cardLikeButtonClassName}
                    onClick={() => onCardLike(card)}
                    aria-label="Лайк"
                  ></button>
                  <span className="card__like-counter">
                    {card.likes.length}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className={cardDeleteButtonClassName}
              ></button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Card;
