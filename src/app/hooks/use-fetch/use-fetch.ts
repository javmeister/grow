import { useState, useEffect } from 'react';
import { FetchConfig } from '../../types';
import axios, { AxiosError, AxiosResponse } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseFetchResponse {
  data: any;
  loading: boolean;
  hasError: boolean;
  errorResponse: AxiosResponse | undefined | null;
}

export function useFetch(config: FetchConfig | null): UseFetchResponse {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorResponse, setErrorResponse] = useState<
    AxiosResponse | undefined | null
  >(null);

  useEffect(() => {
    const fetchData = async (config: FetchConfig) => {
      try {
        const { url, numResults, processData } = config;
        const result = await axios.get(url);
        const { data } = result;
        const processedData = processData(data, numResults);
        setData(processedData);
      } catch (error: Error | AxiosError | any) {
        console.error(error);
        setHasError(true);
        if (axios.isAxiosError(error)) {
          const axiosError: AxiosError = error as AxiosError;
          if (axiosError.response) {
            // The client was given an error response (5xx, 4xx)
            const response: AxiosResponse | undefined = error.response;
            setErrorResponse(response);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    if (config) {
      setHasError(false);
      setLoading(true);
      fetchData(config);
    }
  }, [config]);

  return {
    data,
    loading,
    hasError,
    errorResponse,
  };
}

export default useFetch;
