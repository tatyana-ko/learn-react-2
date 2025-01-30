// import { SearchField } from './components/SearchField/SearchField';

import { FilterPanel } from "./components/FilterPanel";
import { UserSearch } from "./components/UserSearch";

function App() {
  const onFilterChange = () => {

  };

  return (
    <div className="container">
      <h1>Hooks Optimization</h1>
      {/* <SearchField
        isLoading={false} onSearch={function (query: string): Promise<void> {
          console.log(query);
          throw new Error('Function not implemented.');
        }} /> */}

      <FilterPanel filters={undefined} onFilterChange={onFilterChange} />
      <UserSearch />
    </div>
  )
}

export default App
