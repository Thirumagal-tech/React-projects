// App.jsx
// App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import Footer from "./components/Footer";
import Context from "./components/Context"; // Capitalize file name consistently
import SignIn from "./components/Signin";

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <>
      {!signedIn}
      <Header />
      {!signedIn ? (
        <Context onSignIn={() => setSignedIn(true)} />
      ) : (
        <SignIn />
      )}
      <Footer />
    </>
  );
}

export default App;