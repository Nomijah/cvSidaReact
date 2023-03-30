import React, { useState, useEffect } from "react";
import "./CSS/GitHubFetch.css";

function GitHubFetch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/nomijah/starred")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(() => setIsError(true)),
      [];
  });

  const errorMessage = (errMsg) => {
    {
      console.log(errMsg);
    }
    return <p>Something went wrong</p>;
  };
  return (
    <div className="mainGrid">
      <div className="gitbox">
        {isLoading ? (
          <p>loading content..</p>
        ) : (
          data.map(({ name, description, html_url, id }) => {
            return (
              <div className="gitContainer" key={id}>
                <h1>{name}</h1>
                <h3>
                  <em>{description}</em>
                </h3>
                <a className="gitLink" href={html_url} target="_blank">
                  Take me there!
                </a>
              </div>
            );
          })
        )}
        {isError && errorMessage}
      </div>
    </div>
  );
}

export default GitHubFetch;
