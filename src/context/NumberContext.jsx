import { useState, useContext, createContext } from "react";

const NumberContext = createContext();
export const useNumberData = () => useContext(NumberContext);

export function NumberProvider({ children }) {
  const [currentDisplay, setCurrentdisplay] = useState("");
  const [prevDisplay, setPrevDisplay] = useState("");
  const [todoOp, setTodoOp] = useState("");

  return (
    <NumberContext.Provider
      value={{
        currentDisplay,
        setCurrentdisplay,
        prevDisplay,
        setPrevDisplay,
        todoOp,
        setTodoOp,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
}
