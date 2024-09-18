import { useCallback } from "react";
import { DeleteData } from "../utils/apiService";

const useDeleteData = () => {
  const handleDelete = useCallback(async (endpoint, id) => {
    try {
      const result = await DeleteData(endpoint, id);
      return result;
      // Handle success, e.g., update state or show a success message
    } catch (error) {
      console.error("Error deleting data:", error);
      // Handle error, e.g., show an error message to the user
    }
  }, []);

  return { handleDelete };
};

export default useDeleteData;
