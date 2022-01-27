import React, { Component } from 'react';
import img from './../../assets/images/phone.jpg'
import './four.css'
export default class Four extends Component {
  render() {
    return(
        <div className='four'>
            <div className='f-left'>
                <h2 className='pb-5 mx-4'>More that 2 in 1</h2>
                <p>upload as many markers you want here<br/>
                and always use one app to augment</p>
               
                <p>Use same details to sign in on both app and web</p>
    
                <p>Anywhere, anytime, Create AR experience,<br />consume AR experience, share AR experience</p>
            </div>
            <div className='f-right'>
                <img src={img} alt="telephone" srcset="" />
            </div>
        </div>
    );
  }
}
