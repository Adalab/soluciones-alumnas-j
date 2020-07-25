import React from "react";

class AddItem extends React.Component {
  render() {
    return (
      <form action="">
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.changeValue}
        />
        <input type="submit" onClick={this.props.addValue} value="Añadir" />
      </form>
    );
  }
}

export default AddItem;
