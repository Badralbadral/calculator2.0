import { useState, useContext, createContext } from "react";

const NumberContext = createContext();
export const useNumberData = () => useContext(NumberContext);

export function NumberProvider({ children }) {
  const [currentDisplay, setCurrentdisplay] = useState("");
  const [prevDisplay, setPrevDisplay] = useState("0");
  const [todoOp, setTodoOp] = useState("");
  const [plusMinus, setPlusMinus] = useState("");
  const [perce, setPerce] = useState("");
  const [ofperce, setOfperce] = useState("");
  const [storage, setStorage] = useState("");
  const [befPerce, setBefPerce] = useState("");

  return (
    <NumberContext.Provider
      value={{
        currentDisplay,
        setCurrentdisplay,
        prevDisplay,
        setPrevDisplay,
        todoOp,
        setTodoOp,
        plusMinus,
        setPlusMinus,
        perce,
        setPerce,
        ofperce,
        setOfperce,
        storage,
        setStorage,
        befPerce,
        setBefPerce,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
}
