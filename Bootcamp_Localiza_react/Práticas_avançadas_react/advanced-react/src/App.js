import React, { Fragment } from "react";

const store = [{ type: "Roupa" }, { type: "Calçado" }, { type: "Camiseta" }];

function Column({ type }) {
  return (
    <tr>
      <td>{type.name.console}</td>
    </tr>
  );
}

function App({ children }) {
  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}}`}>
      <Column type={element.type} />
    </Fragment>
  );

  return store.map(renderColumns);
}

export default App;
