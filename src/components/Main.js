import avatar from "../images/avatar.jpg";
function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-block">
          <img className="profile__avatar" src={avatar} alt="Аватар"/>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit link" type="button" aria-label="Редактировать"></button>
          </div>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button className="profile__add-button link" type="button" aria-label="Добавить"></button>
      </section>
      <section className="elements" aria-label="Места"></section>
    </main>
  )
}

export default Main;
