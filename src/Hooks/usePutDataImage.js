import { useState, useCallback } from "react";
import { PutImageData } from "../utils/apiService";

const usePutDataImage = (endpoint) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const putWithImage = useCallback(
    async (data) => {
      setLoading(true);

      try {
        const result = await PutImageData(endpoint, data);
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

  return { response, error, loading, putWithImage };
};

export default usePutDataImage;
