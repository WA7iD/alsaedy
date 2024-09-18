import { useState, useCallback } from "react";
import { PostData } from "../utils/apiService";

const usePostData = (endpoint) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postWithoutImage = useCallback(
    async (data) => {
      setLoading(true);

      try {
        const result = await PostData(endpoint, data);
        setResponse(result);
        setLoading(false);
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

  return { response, error, loading, postWithoutImage };
};

export default usePostData;
