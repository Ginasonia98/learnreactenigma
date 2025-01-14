/* eslint-disable react/prop-types */
import { useState } from "react";
import React from "react";

export const SignUpContext = React.createContext({
  title: "",
  setTitle: () => {},
});

export const SignUpContextProvider = ({ children }) => {
  const [statetitle, setStateTitle] = useState("Hello World");

  return (
    <SignUpContext.Provider
    //kita passing statetitle dan setStateTitle
      value={{ title: statetitle, setTitle: setStateTitle }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

//memberikan akses terhadap konteks yang kita miliki
export const SignUpContextConsumer = SignUpContext.Consumer;
//mengekstrak data yang berasal dari SignUpContextProvider
