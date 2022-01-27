import React, { Component } from 'react';
import './third.css'
export default class Third extends Component {
  render() {
    return (
        <div className='Third d-flex m-5'>
            <div className='t-left'>
            </div>
            <div className='t-right mx-auto'>
                <p>You don't need to be an augmented reality</p>
                <p>developer to get into the metaverse</p>
                <p>Yooar is here!</p>
                <span className='button'>
                    <button className='rounded-pill btn text-black'>
                        Get Started
                    </button>
                </span>
            </div>

        </div>
    );
  }
}
