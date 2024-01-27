import { Link } from 'react-router-dom';
import './styles.css';
import CarImage from 'assets/images/car-header.png';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-card-content">
            <h5>O carro perfeito para você</h5>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-card-image">
            <img src={CarImage} alt="Imagem do carro" />
          </div>
        </div>        
      </div>
    </>
  );
};

export default Home;
