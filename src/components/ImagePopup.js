function ImagePopup() {
  return (
    <div className="popup popup_opacity popup_image">
      <div className="full">
        <button className="popup__close popup__close_image link" type="button" aria-label="Закрыть"></button>
        <figure className="figure">
          <img className="full__image"/>
          <figcaption className="full__caption"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;
