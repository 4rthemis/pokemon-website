// hooks/useSessionStorage.js
import { useState, useEffect } from "react";

export const useSessionStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const stored = sessionStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    if (value !== undefined && value !== null) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};
