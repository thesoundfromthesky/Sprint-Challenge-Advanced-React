import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      setData(response.data);
    })();
  }, []);
  return { data, setData };
}
