import { useState } from "react";
import { useGlobalContext } from "../../context/context";

const Search = () => {
  const [value, setValue] = useState("");
  const searchHandler = (e) => {
    setValue(e.target.value);
    searchPost(e.target.value);
  };
  const { searchPost } = useGlobalContext();
  return (
    <>
      <h1> 🔍 Search Your Favourite Topic News Blog</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter your query....."
          value={value}
          onChange={(e) => searchHandler(e)}
          style={{ border: "1px solid #e6e6e6", borderRadius: "5px" }}
        />
      </form>
    </>
  );
};

export default Search;
