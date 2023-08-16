// Imports

import { useState } from "react";

const AuthModal = ({ setShowModal, isSignUp }) => {
  // State Variables
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  // Handleclick
  const handleClick = () => {
    setShowModal(false);
  };

  //   handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords need to match!");
      }
      console.log("Make a post request to DB");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>
      <h2>{isSignUp ? "Create Account" : "Log In"}</h2>
      <p>
        By logging in, you agree to our terms. Learn how we process your data in
        our Privacy Policy
      </p>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password */}
        {isSignUp && (
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Confirm Password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        {/* Submit */}
        <input type="submit" className="secondary-button" value="Submit" />
        <p>{error}</p>
      </form>

      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};

export default AuthModal;
