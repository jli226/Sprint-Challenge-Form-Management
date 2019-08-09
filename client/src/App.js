import React from "react";
import "./App.css";
import FormikRegistrationForm from "./RegistrationForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h2>Registration Form</h2>
        <FormikRegistrationForm />
      </div>
    );
  }
}

export default App;
