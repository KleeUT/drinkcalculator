import React, { Component } from "react";
import { Main, Headings } from "../components";
import { DrinksForm } from "../drinksForm";
import { DrinksDisplay } from "../drinksDisplay";

class App extends Component {
  render() {
    return (
      <Main>
        <Headings.H1>How many drinks is that?</Headings.H1>
        <DrinksForm />
        <DrinksDisplay />
        <a href="http://www.alcohol.gov.au/internet/alcohol/publishing.nsf/Content/standard">
          Government standard drinks page
        </a>
      </Main>
    );
  }
}

export default App;
