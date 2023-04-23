import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditAvatar from "./EditAvatar";
import EditProfile from "./EditProfile";
import AddNewCard from "./AddNewCard";
import ImagePopup from "./ImagePopup";
function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm
          name='edit-avatar'
          title='Обновить аватар'
          children={<EditAvatar />}
        />
        <PopupWithForm
          name='edit'
          title='Редактировать профиль'
          children={<EditProfile />}
        />
        <PopupWithForm
          name='add'
          title='Новое место'
          children={<AddNewCard />}
        />
        <PopupWithForm
          name='confirm'
          title='Вы уверены?'
          buttonValue='Да'
          children={<></>}
        />
        <ImagePopup />
      </div>
    </div>
  );
}

export default App;
