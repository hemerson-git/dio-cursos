import React, { Component } from "react";

class Twitter extends Component {
  state = {
    tweet: "title",
  };

  componentDidMount() {
    const { posts, loading } = this.props;
    console.log(posts);
    console.log("componentDidMount", loading);
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props;
    if (this.props.loading !== prevProps.loading) {
      console.log("componentDidUpdate", loading);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: fui removido");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.tweet !== nextState.tweet;
  }

  render() {
    const { posts } = this.props;
    console.log(posts);

    return (
      <div>
        <h1>Title</h1>
      </div>
    );
  }
}

export default Twitter;
