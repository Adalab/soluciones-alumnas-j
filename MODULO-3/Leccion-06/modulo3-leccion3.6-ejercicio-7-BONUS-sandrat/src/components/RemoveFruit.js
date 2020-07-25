import React from "react";

class RemoveFruit extends React.Component {
  render() {
    return (
      <button onClick={this.props.remove} value={this.props.value}>
        X
      </button>
    );
  }
}

export default RemoveFruit;
