import React, { Component } from 'react';
import Nav from '../components/nav/Nav';
import First from '../components/first/First';
import Second from '../components/second/Second';
import Third from '../components/Third/Third';
import Four from '../components/four/Four';
export default class Home extends Component {
  render() {
    return (
        <div>
            <Nav />
            <First />
            <Second />
            <Third />
            <Four />
        </div>
    );
  }
}
