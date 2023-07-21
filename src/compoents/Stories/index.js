import { useGlobalContext } from "../../context/context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return <h1>Data is fetching.....</h1>;
  }

  return (
    <>
      <div className="stories-div">
        <div className="stories-div-items">
          {hits.map((currPost) => {
            const { title, author, objectID, url, num_comments } = currPost;
            return (
              <div key={objectID} className="card">
                <h2>{title}</h2>
                <p>
                  ✍️&nbsp; By <span>{author}</span> &nbsp;|&nbsp; 💬 &nbsp;
                  <span>{num_comments}</span> comments
                </p>
                <div className="card-button">
                  <a href={url}>Read more</a>
                  <a href="#" onClick={() => removePost(objectID)}>
                    Remove
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Stories;
