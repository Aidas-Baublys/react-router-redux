import { useState, useCallback, useEffect } from 'react';

export default function useFetch(url, fetchOptions) {
  const [payload, setPayload] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url, fetchOptions);
      if (response.ok) {
        setPayload(await response.json());
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url, fetchOptions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { payload, error, loading };
}