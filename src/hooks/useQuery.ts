import React from "react";
import clientFetch from "../util/clientFetch";
// import { FetchContext } from "context/FetchContext";

/**
 * get api url from context
 * set loading states when fetching
 * set errors in the errors state
 * set data in the data state
 */

const useQuery = (query: any, queryVariables: any) => {
  // const { apiUrl } = useContext(FetchContext);
  const apiUrl = "https://3l097.sse.codesandbox.io/";

  const [data, setData] = React.useState<any>(null);
  const [errors, setErrors] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    clientFetch(apiUrl, query, queryVariables).then(({ data, errors }: any) => {
      if (data) {
        setData(data);
      }
      if (errors) {
        setErrors(errors);
      }
      setIsLoading(false);
    });
  }, [apiUrl, query, queryVariables]);

  return { data, errors, isLoading };
};

export default useQuery;
