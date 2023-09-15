import { useState } from "react";

// Define the 'Authenticate' component
export default function Authenticate({ token }) {
  // Define state variables for success message and error message
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  // Define an asynchronous function to handle the authentication
  async function handleClick() {
    try {
      // Check if a token is provided
      if (!token) {
        setError("Authentication Failed"); // Set error message
        return;
      }

      // Make a GET request to the authentication endpoint with the token
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the request header
          },
        }
      );

      const result = await response.json();

      // Check if authentication was successful or failed
      if (result.success) {
        setSuccessMessage("Authentication successful"); // Set success message
        setError(null); // Clear any previous error message
      } else {
        setError("Authentication failed"); // Set error message
        setSuccessMessage(null); // Clear any previous success message
      }
    } catch (error) {
      setError(error.message); // Set error message in case of an exception
      setSuccessMessage(null); // Clear any previous success message
    }
  }

  // Render the component's UI and Displays Success and Error Messages
  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}
