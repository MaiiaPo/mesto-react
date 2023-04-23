import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />

        {/*POPUP*/}
        {/*POPUP EDIT AVATAR IMAGE*/}
        <div className="popup popup_type_edit-avatar">
          <div className="popup__container">
            <button className="popup__close popup__close_add link" type="button" aria-label="Закрыть"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form name="edit-avatar" className="popup__form popup__form_edit-avatar form" noValidate>
              <fieldset className="form__set">
                <label className="form__field">
                  <input
                    type="url"
                    name="avatar-link"
                    placeholder="Ссылка на аватар"
                    className="popup__input popup__input_type_link"
                    id="avatar-link-input"
                    required
                  />
                    <span className="popup__error popup__error_visible avatar-link-input-error"></span>
                </label>
                <input type="submit" value="Сохранить" className="popup__button"/>
              </fieldset>
            </form>
          </div>
        </div>
        {/*POPUP EDIT PROFILE INFO*/}
        <div className="popup popup_type_edit">
          <div className="popup__container">
            <button className="popup__close popup__close_edit link" type="button" aria-label="Закрыть"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form name="profile" className="popup__form popup__form_edit form" noValidate>
              <fieldset className="form__set">
                <label className="form__field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    className="popup__input popup__input_type_name"
                    id="name-input"
                    minLength="2"
                    maxLength="40"
                    required
                  />
                    <span className="popup__error popup__error_visible name-input-error"></span>
                </label>
                <label className="form__field">
                  <input
                    type="text"
                    name="description"
                    placeholder="О себе"
                    className="popup__input popup__input_type_description"
                    id="description-input"
                    minLength="2"
                    maxLength="200"
                    required
                  />
                    <span className="popup__error popup__error_visible description-input-error"></span>
                </label>
                <input type="submit" value="Сохранить" className="popup__button"/>
              </fieldset>
            </form>
          </div>
        </div>
        {/*POPUP ADD MESTO*/}
        <div className="popup popup_type_add">
          <div className="popup__container">
            <button className="popup__close popup__close_add link" type="button" aria-label="Закрыть"></button>
            <h2 className="popup__title">Новое место</h2>
            <form name="place" className="popup__form popup__form_add form" noValidate>
              <fieldset className="form__set">
                <label className="form__field">
                  <input
                    type="text"
                    name="name-place"
                    placeholder="Название"
                    className="popup__input popup__input_type_name-place"
                    id="name-place-input"
                    minLength="2"
                    maxLength="30"
                    required
                  />
                    <span className="popup__error popup__error_visible name-place-input-error"></span>
                </label>
                <label className="form__field">
                  <input
                    type="url"
                    name="link"
                    placeholder="Ссылка на картинку"
                    className="popup__input popup__input_type_link"
                    id="link-input"
                    required
                  />
                    <span className="popup__error popup__error_visible link-input-error"></span>
                </label>
                <input type="submit" value="Сохранить" className="popup__button"/>
              </fieldset>
            </form>
          </div>
        </div>
        {/*POPUP IMAGE FULL SCREEN*/}
        <div className="popup popup_opacity popup_image">
          <div className="full">
            <button className="popup__close popup__close_image link" type="button" aria-label="Закрыть"></button>
            <figure className="figure">
              <img className="full__image"/>
              <figcaption className="full__caption"></figcaption>
            </figure>
          </div>
        </div>
        {/*POPUP CONFIRM DELETE CARD*/}
        <div className="popup popup_type_confirm">
          <div className="popup__container">
            <button className="popup__close popup__close_confirm link" type="button" aria-label="Закрыть"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form name="confirm" className="popup__form popup__form_confirm form" noValidate>
              <input type="submit" value="Да" className="popup__button"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
