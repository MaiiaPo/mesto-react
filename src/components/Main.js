import React from "react";
import api from "../utils/api";
import Card from "./Card";
function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData().then((userData) => {
      const {name, about, avatar} = userData;
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    })
    .catch((err) => {
      console.error(err);
    });

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
          <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit link"
              type="button"
              aria-label="Редактировать"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__description">{userDescription}</p>
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
