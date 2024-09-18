import { useState, useCallback } from "react";
import { PutData } from "../utils/apiService";

const usePutData = (endpoint) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const putWithoutImage = useCallback(
    async (data) => {
      setLoading(true);

      try {
        const result = await PutData(endpoint, data);
        setResponse(result);
        return result;
      } catch (error) {
        setError(error);
        return error;
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  return { response, error, loading, putWithoutImage };
};

export default usePutData;
