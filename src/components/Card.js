import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // Являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  // Есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`card__like-button ${isLiked && 'card__like-button_active'}`);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleDeleteClick() {
    console.log('удалить карточку');
  }

  return (
    <article className="element">
      { isOwn && <button className="element__delete link" type="button" aria-label="Удалить" />}
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <div className="element__info">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-block">
          <button className="element__like" type="button" aria-label="Нравится"></button>
          <p className="element__count">0</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
