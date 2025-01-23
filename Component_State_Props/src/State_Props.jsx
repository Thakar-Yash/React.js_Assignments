// Props and States

import React,{useState} from "react";

// UserCard that accepts name, age, and location as props
const UserCard = ({ name, age, location }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>{name}</h2>
      <p style={styles.text}>{age}</p>
      <p style={styles.text}>{location}</p>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div style={styles.container}>
      <h3>Counter: {count}</h3>
      <button style={styles.button} onClick={add}>
        Increment
      </button>
    </div>
  );
};

const State_Props = () => {
  return (
    <>
        <h2>Props and State Examples</h2>
      <div style={styles.container}>
        <UserCard name="Yash Thakar" age={21} location="Ahmdabad" />
        <UserCard name="Dev Dave" age={20} location="Surendranagar" />
      </div>
      <div style={styles.wrapper}>
        <h3>Counter Button</h3>
        <Counter />
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(254, 254, 254, 0.1)",
  },
  heading: {
    margin: "0",
    fontSize: "1.5rem",
    color: "#fff",
  },
  text: {
    margin: "4px 0",
    fontSize: "1rem",
    color: "#fff",
  },
  wrapper: {
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #333",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
    marginTop: "3px",
  }
};

export default State_Props;
