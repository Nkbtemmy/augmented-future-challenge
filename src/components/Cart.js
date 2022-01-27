import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    return (
        <div className='cards mx-4'>
            <div className="shadow p-3 mb-3 bg-body rounded img-container">
                <img src={this.props.src} alt="" srcset="" />
            </div>
            <p className='text-center'>{this.props.desc}</p>
        </div>
    );
  }
}
