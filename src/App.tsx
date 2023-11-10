import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUnsent, setIsUnsent] = useState<boolean>(false);

  let ajax = new XMLHttpRequest();

  useEffect(() => {
    ajax.onreadystatechange = function () {
      if (ajax.readyState === ajax.LOADING) {
        setIsLoading(true);
      }

      if (ajax.readyState === ajax.DONE) {
        setIsLoading(false);
        setData(ajax.response);
      }

      if (ajax.readyState === ajax.UNSENT) {
        setIsUnsent(true);
      }
    };
  }, [ajax, setIsLoading, setData, setIsUnsent]);

  console.log(data);

  return (
    <div>
      <div>
        <p>{isLoading ? "Loading" : null}</p>
        <p>{isUnsent ? "Error! Coba lagi!" : null}</p>
        {data}
      </div>
    </div>
  );
}
