import React from "react";
import api from "../utils/api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-block" onClick={props.onEditAvatar}>
          {currentUser && <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"/>}
        </div>
        <div className="profile__info">
          <div className="profile__title">
            {currentUser && <h1 className="profile__name">{currentUser.name}</h1>}
            <button
              className="profile__edit link"
              type="button"
              aria-label="Редактировать"
              onClick={props.onEditProfile}
            />
          </div>
          {currentUser && <p className="profile__description">{currentUser.about}</p>}
        </div>
        <button
          className="profile__add-button link"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Места">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
            />
          );
        })}
      </section>
    </main>
  )
}

export default Main;
