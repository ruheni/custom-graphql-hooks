const clientFetch = async (url: string, query: any, variables: any) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, variables })
  };

  let request = await fetch(url, options).then((response) => response.json());

  return request;
};

export default clientFetch;
