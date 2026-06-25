import { useState, useEffect } from "react";

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: Clears the timer if the user types another key before 300ms is up
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
