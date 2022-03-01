import React, { useState} from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function DocTitleOne() {
  const [count, setcount] = useState(0);

    useDocumentTitle(count)

  return (
    <div>
      {count}
      <button onClick={() => setcount(count + 1)}>Click</button>
    </div>
  );
}

export default DocTitleOne;
