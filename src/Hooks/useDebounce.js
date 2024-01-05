import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debounceValue, setDebaunceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebaunceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
