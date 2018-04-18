import React from 'react';

import Header from '../components/Header';
import Billboard from '../components/billboard';
import Content from '../components/content';
import Footer from '../components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };
  }
  componentDidUpdate() {
    // console.log(this.state.scrollY);
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      this.setState({ scrollY });
    });
  }
  render() {
    return (
      <div className="site-container" ref="SiteContainer">
        <Header scrollY={this.state.scrollY} />
        <Billboard />
        <Content />
        <Footer scrollY={this.state.scrollY} />
      </div>
    );
  }
}

export default App;
