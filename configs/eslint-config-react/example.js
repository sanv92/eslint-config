import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      list: prevState.list.concat(this.state.text),
      text: '',
    }));
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            onChange={(e) => this.handleChange(e)}
          />
          <button>Add</button>
          <ol>
            {this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={() => this.removeItem(index)}>Delete</button>
                </li>
              );
            })}
          </ol>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById('root'));
