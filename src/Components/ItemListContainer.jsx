import './ItemListContainer.css';
import PropTypes from 'prop-types';

function ItemListContainer({ texto }) {
return (
    <>
    <main>
    <h2 className="titulo">{texto}</h2>
    </main>
    </>
);
}

ItemListContainer.propTypes = {
texto: PropTypes.string.isRequired,
};

export default ItemListContainer;

