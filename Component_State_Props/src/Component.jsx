import React from "react";

const Component = () => {
  const desc =
    "JSX allows us to write HTML-like syntax within JavaScript, making it easier to build React components.";

  const name = "Yash";
  const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
  };

  class WelcomeMessage extends React.Component {
    render() {
      return <h1>Welcome to React!</h1>;
    }
  }
  return (
    <>
      <h1>Hello React</h1>
      <h1>Welcome To JSX</h1>
      <h3>{desc}</h3>
      <div>
        <Greeting name={name} />
      </div>
      <div>
        <WelcomeMessage />
      </div>
    </>
  );
};

export default Component;
