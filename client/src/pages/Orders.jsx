import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await API.get("/orders");
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <p>No Orders Found</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "15px",
                padding: "15px",
              }}
            >
              <h3>Order ID: {order._id}</h3>
              <p>Total Amount: ₹{order.totalAmount}</p>
              <p>Status: {order.status}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Orders;