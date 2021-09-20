import { useEffect, useState } from "react";
import Card from "./components/Card";
import Twitter from "./components/Twitter";
import { ThemeProvider } from "./themes/default";

function App() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(true);

  useEffect(() => {
    getLoading();
  }, []);

  const posts = [
    {
      title: "xpto",
      description: "foo",
    },

    {
      title: "xpta",
      description: "bar",
    },
  ];

  function getLoading() {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  function handleRemoveComponent() {
    setActive(false);
  }

  return (
    <ThemeProvider>
      {active && <Twitter posts={posts} loading={loading} />}
      <Card />

      <button onClick={handleRemoveComponent}>Remove Component</button>
    </ThemeProvider>
  );
}

export default App;
