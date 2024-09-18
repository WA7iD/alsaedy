import { useState, useEffect } from "react";
import { FetchData } from "../utils/apiService";

const useGetData = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setLoading(true);
        const result = await FetchData(endpoint);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [endpoint]);

  return { data, error, loading };
};

export default useGetData;
