import EditAvatar from "./EditAvatar";
import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup (props) {
  let refUrl = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar(
      {
        avatar: refUrl.value,
      },
    );
  }

  function setRef(ref) {
    refUrl = ref;
  }

  return (
    <PopupWithForm
      name='edit-avatar'
      title='Обновить аватар'
      children={<EditAvatar setRef={setRef}/>}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  )
}

export default EditAvatarPopup;
