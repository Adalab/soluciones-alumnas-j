import React from "react";
import "../stylesheet/App.css";
import AddItem from "./AddItem";
import RemoveFruit from "./RemoveFruit";
import ResetButton from "./ResetButton";

class PopularFruits extends React.Component {
  constructor(props) {
    super(props);
    this.actualiceFruit = this.actualiceFruit.bind(this);
    this.addFruit = this.addFruit.bind(this);
    this.quitFruit = this.quitFruit.bind(this);
    this.resetFruits = this.resetFruits.bind(this);
    this.defaultFruits = ["kiwi", "pinneaple", "strawberry"];
    this.state = {
      popularFruits: this.defaultFruits,
      newFruit: "",
    };
  }

  actualiceFruit(event) {
    const newValue = event.currentTarget.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        newFruit: newValue,
      };
    });
  }

  addFruit(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        popularFruits: prevState.popularFruits.concat(prevState.newFruit),
        newFruit: "",
      };
    });
  }

  quitFruit(event) {
    const value = event.currentTarget.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        popularFruits: prevState.popularFruits.filter((fruit) => {
          return fruit !== value;
        }),
      };
    });
  }

  resetFruits() {
    this.setState((prevState) => {
      return {
        ...prevState,
        popularFruits: this.defaultFruits,
      };
    });
  }

  render() {
    const arrayToJXS = this.state.popularFruits.map((fruit) => {
      return (
        <li>
          {fruit}
          <RemoveFruit value={fruit} remove={this.quitFruit} />
        </li>
      );
    });
    return (
      <>
        <ul>{arrayToJXS}</ul>
        <AddItem
          value={this.state.newFruit}
          changeValue={this.actualiceFruit}
          addValue={this.addFruit}
        />
        <ResetButton eventReset={this.resetFruits} />
      </>
    );
  }
}

export default PopularFruits;
