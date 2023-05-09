function EditAvatar(props) {
  return (
    <label className="form__field">
      <input
        ref={props.setRef}
        type="url"
        name="avatar-link"
        placeholder="Ссылка на аватар"
        className="popup__input popup__input_type_link"
        id="avatar-link-input"
        required
      />
      <span className="popup__error popup__error_visible avatar-link-input-error"></span>
    </label>
  )
}

export default EditAvatar;
