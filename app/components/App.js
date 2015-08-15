import React from 'react';
import {RouteHandler} from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
class App extends React.Component {
  constructor(props) {
    super(props);
    //this.state = AppStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    // Object `this` will be undefined without binding it explicitly.
    this.setState(state);
  }
  render() {
    return (
      <div>
      	<Navbar />
        <RouteHandler />
        <Footer/>
      </div>
    );
  }
}

export default App;