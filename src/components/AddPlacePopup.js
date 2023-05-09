import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup (props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      name='add'
      title='Новое место'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input
          type="text"
          name="name-place"
          placeholder="Название"
          className="popup__input popup__input_type_name-place"
          id="name-place-input"
          minLength="2"
          maxLength="30"
          value={props.name}
          onChange={handleNameChange}
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
          value={props.link}
          onChange={handleLinkChange}
          required
        />
        <span className="popup__error popup__error_visible link-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
