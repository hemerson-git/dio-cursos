import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.props·hasError) {
      return (
        <h1>
          Ops. Algo aconteceu errado. <br />
          Estamos trabalhando para consertar
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
