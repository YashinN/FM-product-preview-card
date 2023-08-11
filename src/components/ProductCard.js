import "./ProductCard.css";
import CartIcon from "./icons/CartIcon";

const ProductCard = () => {
  return (
    <div className="bg-wrapper">
      <div className="product-card">
        <div className="img-container">
          <picture>
            <source
              media="(max-width:600px)"
              srcSet="/images/image-product-mobile.jpg"
            />
            <img
              src="/images/image-product-desktop.jpg"
              alt=""
              className="product-img"
            />
          </picture>
        </div>

        <div className="content-container">
          <span className="product-type">PERFUME</span>
          <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
          <p className="text">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="price-wrapper">
            <span className="sale">$149.99</span>
            <span className="price">$169.99</span>
          </div>

          <button className="cart-btn">
            <CartIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
