import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditAvatar from "./EditAvatar";
import EditProfile from "./EditProfile";
import AddNewCard from "./AddNewCard";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  // Видимость попапов
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  // Выбранная карточка
  const [selectedCard, setSelectedCard] = React.useState(null);

  // Информация о пользователе
  const [currentUser, setCurrentUser] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);

    setSelectedCard(null);
  }

  React.useEffect(() => {
    api.getUserData().then((userData) => {
      setCurrentUser(userData);
    })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            name='edit-avatar'
            title='Обновить аватар'
            children={<EditAvatar />}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          />
          <PopupWithForm
            name='edit'
            title='Редактировать профиль'
            children={<EditProfile />}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          />
          <PopupWithForm
            name='add'
            title='Новое место'
            children={<AddNewCard />}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          />
          <PopupWithForm
            name='confirm'
            title='Вы уверены?'
            buttonValue='Да'
            children={<></>}
            onClose={closeAllPopups}
          />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
