// Imports
import whiteLogo from "../assets/images/tinder_logo_white.png";
import colorLogo from "../assets/images/color-logo-tinder.png";

// Navbar Component
const Navbar = ({ minimal, showModal, setShowModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const authToken = true;

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src={minimal ? colorLogo : whiteLogo}
        />
      </div>

      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log In
        </button>
      )}
    </nav>
  );
};

export default Navbar;
