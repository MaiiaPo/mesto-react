function EditProfile(props) {
  return (
    <>
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
          value={props.name}
          onChange={props.onChangeName}
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
          value={props.description}
          onChange={props.onChangeDescription}
        />
        <span className="popup__error popup__error_visible description-input-error"></span>
      </label>
    </>
  )
}

export default EditProfile;
