"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type FlippedContextType = {
  flipped: boolean;
  setFlipped: (value: boolean) => void;
};

const FlippedContext = createContext<FlippedContextType | undefined>(undefined);

export const useFlipped = () => {
  const context = useContext(FlippedContext);
  if (!context) {
    throw new Error("useFlipped must be used within a FlippedProvider");
  }
  return context;
};

export const FlippedProvider = ({ children }: { children: ReactNode }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <FlippedContext.Provider value={{ flipped, setFlipped }}>
      {children}
    </FlippedContext.Provider>
  );
};
