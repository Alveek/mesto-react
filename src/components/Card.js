function Card({cards, onCardClick}) {
  return (
    <>
      <section className="card" aria-label="Карточки">
        <ul className="card__items">
          {cards.map((card) => (
            <li key={card._id} className="card__item">
              <img onClick={()=>onCardClick(card)} className="card__image" src={card.link} alt={card.name}/>
              <div className="card__description">
                <p className="card__title">{card.name}</p>
                <div className="card__like-container">
                  <button type="button" className="card__like-button opacity" aria-label="Лайк"></button>
                  <span className="card__like-counter">{card.likes.length}</span>
                </div>
              </div>
              <button type="button" className="card__delete-button opacity"></button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Card;
