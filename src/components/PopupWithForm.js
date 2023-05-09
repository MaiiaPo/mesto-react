function PopupWithForm(props) {
  const buttonText = props.buttonValue
    ? props.buttonValue
    : 'Сохранить';

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <button
          className="popup__close popup__close_add link"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <form name={`${props.name}_form`} className="popup__form form" onSubmit={props.onSubmit}>
          <fieldset className="form__set">
            {props.children}
            <input type="submit" value={buttonText} className="popup__button"/>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
