import React from "react";
import { BrowserRouter,Route, Router, Switch } from "react-router-dom";
import DisplayAllPosts from './listpost'
import CreateNewPost from './newpost'
import history from './history'

const TabArtikel = ( ) => {
  return ( 
    <Router history={history}>
        <Switch>
          <Route path="/" exact component={DisplayAllPosts}/>
          <Route path="/new-post" component={CreateNewPost}/>
        </Switch>
    </Router>
  );
};
export default TabArtikel;
