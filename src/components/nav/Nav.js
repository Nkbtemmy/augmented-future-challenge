import React, { Component } from 'react';
import './nav.css'
export default class Nav extends Component {
  render() {
    return (
        <div className='position-fixed w-100' >
          <ul >
              <li><a class="active" href="/">Yooar</a></li>
              <li><a href="/"><span>Get Started</span></a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/features">Features</a></li>
          </ul>
        </div>
    );
  }
}
