import './styles.css';

const SearchCard = () => {
  return (
    <div className="base-card search-card-container">
      <div className="search-card-text">
        <p>Digite sua busca</p>
      </div>

      <div className="search-card-button">
        <button className="btn search-card-btn-icon">
          <p>BUSCAR</p>
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
