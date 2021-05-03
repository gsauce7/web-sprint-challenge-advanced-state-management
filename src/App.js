import React, { Component, useEffect } from 'react';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import SmurfProfile from './components/SmurfProfile';
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    fetchSmurfs();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/smurfs/:smurfId'>
            <SmurfProfile />
          </Route>
          <Route exact path={'/'}>
            <main>
              <SmurfList />
              <AddForm />
            </main>
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchSmurfs };

export default connect(null, mapDispatchToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
