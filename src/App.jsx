import './App.css';
import { useState } from 'react';
import Authenitcate from './components/Authenitcate';
import SignUpForm from './components/SignUpForm';

// Defining the main App component
export default function App() {
  // Using the useState hook to manage the 'token' state
  const [token, setToken] = useState(null);

  // Rendering the Authenticate and SignUpForm components with 'token' and 'setToken' props
  return (
    <>
      {/* Rendering the Authenticate component and passing 'token' and 'setToken' props */}
      <Authenitcate token={token} setToken={setToken} />
      
      {/* Rendering the SignUpForm component and passing 'token' and 'setToken' props */}
      <SignUpForm token={token} setToken={setToken} />
    </>
  );
}
