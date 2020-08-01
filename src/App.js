import React from 'react';
import {Provider} from 'react-redux';
import{HashRouter as Router, Route} from 'react-router-dom'
import Landing from './components/landing';
import SingleGif from './components/singleGif.jsx'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
        <Route exact path="/" component ={Landing} />
        <Route exact path="/gif/:id" component ={SingleGif} />
        </>
      </Router>
    </Provider>
  );
} 

export default App;
