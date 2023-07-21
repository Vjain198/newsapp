import "./App.css";
import Pagination from "./compoents/Pagination";
import Search from "./compoents/Search";
import Stories from "./compoents/Stories";

function App() {
  return (
    <>
      <h1>Tech News - Latest Tech Related News At One Place 📰</h1>
      <Search />
      <Stories />
      <Pagination />
    </>
  );
}

export default App;
