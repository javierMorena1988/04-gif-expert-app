import PropTypes from "prop-types";

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

// COnfigurar las proptypes: title y url obligatorios
// hay que instalar lo de proptypes como dependencia normal
// Evaluar el snapshot

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
