import React, { useEffect, useState } from "react";
import axios from "axios";
function DataFetchingOne() {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  const [post, setpost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setloading(false);
        seterror("");
        setpost(response.data);
      })
      .catch((error) => {
        setloading(false);
        seterror("Something went wrong");
        setpost({});
      });
  }, []);
  return (
    <div>
      {loading ? "post" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
