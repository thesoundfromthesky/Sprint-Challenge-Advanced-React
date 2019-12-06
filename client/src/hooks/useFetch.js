import { useState, useEffect } from "react";

export function useFetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:5000/api/players`);
      const data = await response.json();
      setData(data);
    })();
  }, []);
  return { data, setData };
}
