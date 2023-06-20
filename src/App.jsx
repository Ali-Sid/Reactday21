import { useState, useEffect, useContext, createContext } from "react";
import CoolMessage from "./CoolMessage";

// create context object
const CoolMessageContext = createContext();

function App() {
  // Access the value from the CoolMessageContext
  const coolMessage = useContext(CoolMessageContext);

  // Define a state variable 'count' and its setter function 'setCount'
  const [count, setCount] = useState(0);

  // Determine the text to display based on the count value
  const textTime = count > 1 ? "times" : "time";

  // Update the document title whenever the count value changes
  useEffect(() => {
    const textTime = count > 1 ? "times" : "time";
    document.title = `You clicked ${count} ${textTime}`;
  }, [count]);

  // Function to increment the count value by 1
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  // Render the component
  return (
    // Provide the value of coolMessage using CoolMessageContext.Provider
    <CoolMessageContext.Provider value={coolMessage}>
      {/* Render the CoolMessage component */}
      <CoolMessage />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          You clicked {count} {textTime}
        </p>
        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px"}}>
          <button onClick={incrementCount}>+1</button>
          <button onClick={decrementCount}>-1</button>
        </div>
      </div>
    </CoolMessageContext.Provider>
  );
}

export default App;
