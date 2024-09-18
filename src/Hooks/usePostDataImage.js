import { useState, useCallback } from "react";
import { PostImageData } from "../utils/apiService";

const usePostDataImage = (endpoint) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postWithImage = useCallback(
    async (data) => {
      setLoading(true);

      try {
        const result = await PostImageData(endpoint, data);
        setResponse(result);
        setLoading(false);
        return result;
      } catch (error) {
        return error;
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  return { response, error, loading, postWithImage };
};

export default usePostDataImage;
