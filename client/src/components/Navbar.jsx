import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#2563eb",
        color: "white",
      }}
    >
      <h2>E-Commerce Platform</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/home" style={{ color: "white" }}>Home</Link>
        <Link to="/cart" style={{ color: "white" }}>Cart</Link>
        <Link to="/orders" style={{ color: "white" }}>Orders</Link>
        <Link to="/admin" style={{ color: "white" }}>Admin</Link>

        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;