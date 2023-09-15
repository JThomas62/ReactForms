import './App.css';
import { useState } from 'react';
import Authenitcate from './components/Authenitcate';
import SignUpForm from './components/SignUpForm';

export default function App() {

  const [token, setToken] = useState(null);
  
  return (
    <>
      <Authenitcate token={token} setToken={setToken}/>
      <SignUpForm token={token} setToken={setToken}/>
    </>
  );
}
