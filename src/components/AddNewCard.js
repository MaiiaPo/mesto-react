function AddNewCard() {
  return (
    <>
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
    </>
  )
}

export default AddNewCard;
