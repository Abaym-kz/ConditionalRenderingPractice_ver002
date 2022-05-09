import React from "react";
import Login from "./Login";
import Register from "./Register";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? <Login /> : <Register />}
    </div>
  );
}

export default App;
