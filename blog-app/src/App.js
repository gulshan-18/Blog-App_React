import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common.css";
import BlogList from "./pages/BlogList";
import NewBlog from "./pages/NewBlog";
import BlogDetail from "./pages/BlogDetail";
import EditBlog from "./pages/EditBlog";
import { useDispatch } from "react-redux";
import { blogActions } from "./store/blog-reducer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    var savedStore = JSON.parse(localStorage.getItem("store"));
    dispatch(blogActions.updateStore({ store: savedStore }));
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <BlogList />
        </Route>
        <Route path="/new" exact>
          <NewBlog />
        </Route>
        <Route path="/:blogId" exact>
          <BlogDetail />
        </Route>
        <Route path="/:blogId/edit" exact>
          <EditBlog />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
