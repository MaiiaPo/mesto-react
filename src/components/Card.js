import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <button className="element__delete link" type="button" aria-label="Удалить"/>
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
