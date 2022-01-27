import React, { Component } from 'react';
import Cart from '../Cart';
import groupe from './../../assets/images/projectWork.jpg'
import './second.css'
import download from './../../assets/images/download.jpg'
import chatting from './../../assets/images/chatting.jpg'
export default class Second extends Component {
  render() {
    return(
        <div>
            <h2 className='mx-5 mb-5'>Yooar is straight forward</h2>
            <div className='Second'>
               <Cart 
                    src={groupe}
                    desc="Create a Project on Yooar.com"
                />
                 <Cart 
                    src={download}
                    desc="Download Yooar app from your store"
                />
                 <Cart 
                    src={chatting}
                    desc="Launch the app and scan the print of uploaded image"
                />
            </div>
        </div>
    );
  }
}
