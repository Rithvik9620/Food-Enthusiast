import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 2,
    };
  }

  render() {
    const { name, work } = this.props;
    return (
      <div className="user-card">
        <h2>Count - {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h2>Count1 - {this.state.count1}</h2>
        <h3>{name}</h3>
        <h4>Working on {work}</h4>
      </div>
    );
  }
}

export default UserClass;
