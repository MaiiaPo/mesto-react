import avatar from "../images/avatar.jpg";
function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-block" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={avatar} alt="Аватар"/>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit link"
              type="button"
              aria-label="Редактировать"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button link"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Места"></section>
    </main>
  )
}

export default Main;
