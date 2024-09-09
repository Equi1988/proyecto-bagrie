import './ItemListContainer.css';
import PropTypes from 'prop-types';

function ItemListContainer({ texto }) {
return (
    <>
    <h2 className="titulo">{texto}</h2>
    </>
);
}

ItemListContainer.propTypes = {
texto: PropTypes.string.isRequired,
};

export default ItemListContainer;

