function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card && 'popup_opened'}`}>
      <div className="full">
        <button
          className="popup__close popup__close_image link"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        />
        <figure className="figure">
          <img
            className="full__image"
            src={props.card ? props.card.link : ''}
            alt={props.card ? props.card.name : ''}
          />
          <figcaption className="full__caption">{props.card ? props.card.name : ''}</figcaption>
        </figure>
      </div>
    </div>
  )
}
export default ImagePopup;
