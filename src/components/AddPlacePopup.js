import AddNewCard from "./AddNewCard";
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
      children={<AddNewCard
        name={name}
        link={link}
        onChangeName={handleNameChange}
        onChangeLink={handleLinkChange}
      />}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  )
}

export default AddPlacePopup;
