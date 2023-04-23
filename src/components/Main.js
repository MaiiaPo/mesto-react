import avatar from "../images/avatar.jpg";
function Main() {
  function handleEditAvatarClick() {
    const avatarEditButton = document.querySelector('.popup_type_edit-avatar')
    avatarEditButton.classList.add('popup_opened');

  }

  function handleEditProfileClick() {
    const profileEditButton = document.querySelector('.popup_type_edit')
    profileEditButton.classList.add('popup_opened');

  }

  function handleAddPlaceClick() {
    const addPlaceButton = document.querySelector('.popup_type_add')
    addPlaceButton.classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-block" onClick={handleEditAvatarClick}>
          <img className="profile__avatar" src={avatar} alt="Аватар"/>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit link"
              type="button"
              aria-label="Редактировать"
              onClick={handleEditProfileClick}
            />
          </div>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button link"
          type="button"
          aria-label="Добавить"
          onClick={handleAddPlaceClick}
        />
      </section>
      <section className="elements" aria-label="Места"></section>
    </main>
  )
}

export default Main;
