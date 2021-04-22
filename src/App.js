import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./app/Navbar";
import PostList from "./features/posts/PostList";
import ViewPost from "./features/posts/ViewPost";
import AddPost from "./features/posts/AddPost";
import EditPost from "./features/posts/EditPost";
import UserList from "./features/users/UserList";
import UserPosts from "./features/users/UserPosts";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <>
              <AddPost />
              <PostList />
            </>
          </Route>
          <Route exact path="/post/:postID">
            <ViewPost />
          </Route>
          <Route exact path="/editpost/:postID">
            <EditPost />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/user/:userID">
            <UserPosts />
          </Route>

          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
