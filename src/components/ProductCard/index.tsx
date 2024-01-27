import './styles.css';

import ProductImg from 'assets/images/car-card.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card-container">
      <div className="card-image">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className="card-text">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <div className="product-card-button">
        <button className="btn product-card-btn-icon">
          <p>COMPRAR</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
