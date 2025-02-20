import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link className="navbar-logo" to="/">💸 Ledgerify - Expense Tracker</Link></div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-expense">Add Expense</Link>
        </li>
        <li>
          <Link to="/expense-list">Expense List</Link>
        </li>
        <li>
          <Link to="/add-category">Add Category</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
