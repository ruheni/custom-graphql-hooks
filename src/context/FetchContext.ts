import React, { Consumer, createContext, useState } from "react";

const FetchContext = createContext<typeof Provider | Consumer<any>>({});

// const { Provider } = FetchContext;

const FetchProvider = ({ children }: any) => {
  // set apiUrl - to your graphql server
  const [apiUrl, setApiUrl] = useState();

  return <Provider>{children}</Provider>;
};

export { FetchContext, FetchProvider };
