import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import Header from './components/Header';
import Post from './components/Posts';
import Comments from './components/Comments';

class App extends Component {
  render(){
    return (
      <BrowserRouter>   
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/posts/:user_id" component={Post} />
          <Route path="/comments/:post_id" component={Comments} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
