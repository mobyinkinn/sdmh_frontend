import React, { createContext, useContext, useState } from "react";

// Create the context
const DoctorsContext = createContext();

// Create the provider component
export const DoctorsProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <DoctorsContext.Provider value={{ filter, setFilter }}>
      {children}
    </DoctorsContext.Provider>
  );
};

// Custom hook for consuming the context
export const useDoctorsContext = () => useContext(DoctorsContext);