// Imports
import { useState } from "react";

// Importing Components
import Navbar from "../components/navbar";
import AuthModal from "../components/authmodal";

// Homepage Component
const Homepage = () => {
  // State Variables
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const authToken = false;

  // Handle Click
  const handleClick = (e) => {
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <div className="overlay">
      <Navbar
        minimal={false}
        authToken={authToken}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1 className="primary-title">Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sign Out" : "Create Account"}
        </button>

        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
        )}
      </div>
    </div>
  );
};

export default Homepage;
