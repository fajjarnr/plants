import products from 'data/products.json';

export default function Products() {
  return (
    <section className="product section container" id="products">
      <h2 className="section__title-center">
        Check out our <br />
        products
      </h2>

      <p className="product__description">
        Here are some selected plants from our showroom, all are in excellent
        shape and has a long life span. Buy and enjoy best quality.
      </p>

      <div className="product__container grid">
        {products.map(({ id, image, title, price }) => (
          <article key={id} className="product__card">
            <div className="product__circle"></div>

            <img src={image} alt={title} className="product__img" />

            <h3 className="product__title">{title}</h3>
            <span className="product__price">{price}</span>

            <button className="button--flex product__button">
              <i className="ri-shopping-bag-line"></i>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
