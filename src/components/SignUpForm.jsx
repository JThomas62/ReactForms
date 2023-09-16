import { useState } from "react";

// Defining the SignUpForm component
export default function SignUpForm({ setToken }) {
  // Using the useState hook to manage the 'username', 'password', and 'error' states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Handling form submission
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // Sending a POST request to the signup API endpoint
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // Parsing the JSON response
      const result = await response.json();
      console.log(result);

      // Setting the token in the parent component's state (provided through props)
      setToken(result.token);
    } catch (error) {
      // Handling and displaying any errors that occur during form submission
      setError(error.message);
    }
  }

  // Rendering the sign-up form
  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className="username">
          Username: <input className="username-input" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label className="password">
          Password: <input className="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="submit-button">Submit</button>
      </form>
    </>
  );
}
