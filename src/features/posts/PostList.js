import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { selectPosts, reverseOrder, fetchPosts } from "./postSlice";

const PostList = () => {
  const posts = useSelector(selectPosts);
  const reversed = useSelector((state) => state.posts.reversed);
  const status = useSelector((state) => state.posts.status);

  const dispatch = useDispatch();

  const reversedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const displayedPosts = reversed ? reversedPosts : posts;

  const handleReverse = () => dispatch(reverseOrder());

  // fetch the posts from the server only the first time the componend mount.
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          height: 50
        }}
      >
        <h1
          style={{
            flex: "1 1 auto",
            textAlign: "center"
          }}
        >
          Posts
        </h1>
        <div>
          <button onClick={handleReverse}>Reverse</button>
        </div>
      </div>
      {displayedPosts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default PostList;
