import API from "../services/api";

function ProductCard({ product }) {

  const addToCart = async () => {

    try {

      await API.post("/cart", {
        productId: product._id,
        quantity: 1,
      });

      alert("Product Added To Cart");

    } catch (error) {

      console.log(error);
      alert("Failed To Add Product");

    }
  };

  return (
    <div className="product-card">

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <h3>₹ {product.price}</h3>

      <p>Stock : {product.stock}</p>

      <button onClick={addToCart}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;