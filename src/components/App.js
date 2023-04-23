import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditAvatar from "./EditAvatar";
import EditProfile from "./EditProfile";
import AddNewCard from "./AddNewCard";
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
      </div>
    </div>
  );
}

export default App;
