import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const EventCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  small = false,
  ...props
}) => (
  <div
    data-testid="card-testid"
    className={`EventCard${small ? " EventCard--small" : ""}`}
    {...props}
  >
    <div className="EventCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
      <div className="EventCard__label">{label}</div>
    </div>
    <div className="EventCard__descriptionContainer">
      <div className="EventCard__title">{title}</div>
      <div className="EventCard__month">{getMonth(date)}</div>
    </div>
  </div>
);

// Prop types
EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Chemin vers l'image
  imageAlt: PropTypes.string, // Texte alternatif de l'image
  date: PropTypes.instanceOf(Date).isRequired, // Date de l'événement
  title: PropTypes.string.isRequired, // Titre de l'événement
  label: PropTypes.string.isRequired, // Label de l'événement
  small: PropTypes.bool, // Indique si la carte doit être petite
};

// Default props
EventCard.defaultProps = {
  imageAlt: "image",
  small: false,
};

export default EventCard;
