import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "./app/Navbar";
import Post from "./features/posts/Post";
import PostPage from "./features/posts/PostPage";
import CreatePost from "./features/posts/CreatePost";
import EditPost from "./features/posts/EditPost";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <>
              <CreatePost />
              <Post />
            </>
          </Route>
          <Route exact path="/posts/:postID">
            <PostPage />
          </Route>
          <Route exact path="/editpost/:postID">
            <EditPost />
          </Route>

          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
