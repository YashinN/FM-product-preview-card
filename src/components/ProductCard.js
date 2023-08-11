const ProductCard = () => {
  return (
    <div className="bg-wrapper">
      <div className="product-card">
        <div className="img-container"></div>

        <div className="content-container">
          <span>PERFUME</span>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <span>$149.99</span>
          <span>$169.99</span>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
