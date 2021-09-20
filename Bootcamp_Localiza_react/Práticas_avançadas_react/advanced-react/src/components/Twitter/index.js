import React, { memo, useEffect, useState } from "react";

const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
};

function Twitter({ posts, loading }) {
  const [tweet, setTweet] = useState("title");

  useEffect(() => {
    const message = loading ? "Loading" : "Updated";
    console.log(posts);

    console.log(message, loading);

    return () => {
      console.log("I was removed");
    };
  }, [loading, posts]);

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.tweet !== nextState.tweet;
  // }

  return (
    <div>
      <h1>Title</h1>
    </div>
  );
}

export default memo(Twitter, areEqual);
