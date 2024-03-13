import airbnb_logo from "./images/airbnb_logo.png";

function Navbar() {
  return (
    <nav>
      <img src={airbnb_logo} alt="Airbnb Logo" className="navbar--logo" />
    </nav>
  );
}

export default Navbar;
