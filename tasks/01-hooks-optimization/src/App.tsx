import { useState } from "react";
import { SearchField } from "./components/SearchField/SearchField";

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSearch = async (query: string) => {
    if(query === "") {
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://...${query}`);

      if (!response.ok) {
        throw new Error("Fetch error");
      }

      const data = await response.json();

      data.length === 0 ? setError("Nothing found for your request") : setResults(data);
    } catch (error) {
      setError("Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Hooks Optimization</h1>
      <SearchField
        onSearch={onSearch}
      />
      {isLoading && <p>Search...</p>}
      {error && <p>{error}</p>}
      {results.length > 0 && !isLoading && <p>Results</p>}
      {results.length === 0 && !isLoading && !error && <p>Not results</p>}
    </div>
  )
}

export default App