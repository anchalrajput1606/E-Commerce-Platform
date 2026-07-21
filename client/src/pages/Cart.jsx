import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Cart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {

    try {

      const response = await API.get("/cart");

      setCart(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const removeItem = async (id) => {

    try {

      await API.delete(`/cart/${id}`);

      fetchCart();

    } catch (error) {

      console.log(error);

    }

  };
  const checkout = async () => {
        try {
            await API.post("/orders");

            alert("🎉 Order & Payment Successful");

            fetchCart();

        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Checkout Failed");
        }
    };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>

        <h1>My Cart</h1>

        {cart.map((item) => (

          <div
            key={item._id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>{item.product.name}</h3>

            <p>Price : ₹{item.product.price}</p>

            <p>Quantity : {item.quantity}</p>

            <button onClick={() => removeItem(item._id)}>
              Remove
            </button>

          </div>

        ))}

        <button onClick={checkout}>
            Checkout
        </button>

      </div>
    </>
  );
}

export default Cart;