import { useState, useEffect } from "react";
import api from "../utils/api"; // Adjust the path based on your project structure

/**
 * Custom hook to fetch accommodation data.
 * @param {number} areaCode - The area code for the desired location (default: 1).
 * @param {number|null} sigunguCode - The sub-area code for the location (optional).
 * @returns {object} { accommodations, loading, error }
 */
const useAccommodation = (areaCode = 1, sigunguCode = null) => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccommodations = async () => {
      setLoading(true);
      setError(null);

      try {
        // Prepare request parameters
        const params = {
          areaCode,
          contentTypeId: 32, // Content type ID for accommodations
        };

        if (sigunguCode) {
          params.sigunguCode = sigunguCode;
        }

        // Fetch data from API
        const data = await api.get("/KorService/areaBasedList", { params });

        // Update state with the fetched data
        setAccommodations(data);
      } catch (err) {
        console.error("Error fetching accommodations:", err);
        setError(err.response?.data?.message || err.message || "Failed to fetch accommodations.");
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodations();
  }, [areaCode, sigunguCode]); // Re-fetch data when areaCode or sigunguCode changes

  return { accommodations, loading, error };
};

export default useAccommodation;
