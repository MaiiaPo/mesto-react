import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup (props) {
  const refUrl = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: refUrl.current.value,
    });
  }

  React.useEffect(() => {
    refUrl.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name='edit-avatar'
      title='Обновить аватар'
      buttonValue={props.isLoading? 'Сохранение...' : 'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input
          ref={refUrl}
          type="url"
          name="avatar-link"
          placeholder="Ссылка на аватар"
          className="popup__input popup__input_type_link"
          id="avatar-link-input"
          required
        />
        <span className="popup__error popup__error_visible avatar-link-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
