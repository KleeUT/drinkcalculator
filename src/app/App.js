import React, { Component } from "react";
import { Main } from "../components";
import { DrinksForm } from "../drinksForm";
import { DrinksDisplay } from "../drinksDisplay";
import { Heading } from "../heading";
import { About } from "../about";

class App extends Component {
  render() {
    return (
      <div>
        <Heading />

        <Main>
          <DrinksForm />
          <DrinksDisplay />
          <About />
        </Main>
      </div>
    );
  }
}

export default App;
