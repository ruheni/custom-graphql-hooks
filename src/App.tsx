import * as React from "react";
import "./styles.css";
import useQuery from "./hooks/useQuery";

const GET_BOOKS = `
	query {
    books {
      id
      title
      author
      published
    }
}`;

export default function App() {
  const { data, errors, isLoading } = useQuery(GET_BOOKS, null);

  React.useEffect(() => {
    console.log("data ", data);
    console.log("errors ", errors);
    console.log("isLoading ", isLoading);
    console.log("______________________");
  }, [data, errors, isLoading]);

  if (isLoading) {
    return <p>Trying to load here....</p>;
  }

  return (
    <div>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        {data ? (
          data?.books?.map((book: any) => <li key={book.id}>{book.title}</li>)
        ) : (
          <p>no books available</p>
        )}
      </ul>
    </div>
  );
}
