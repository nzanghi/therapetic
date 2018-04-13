import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import Billboard from '../components/billboard';
import Content from '../components/content';
import Footer from '../components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="site-container">
        <Header />
        <Billboard />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
