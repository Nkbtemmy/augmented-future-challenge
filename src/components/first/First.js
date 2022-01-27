import React, { Component } from 'react';
import playStore from './../../assets/images/googleStore.png'
import AppStore from './../../assets/images/AppStore.PNG'
import './style.css'
export default class First extends Component {
  render() {
    return( 
        <div className='d-flex first'>
            <div className='left'>
                <h2>
                    <span className='text-primary'>Yooar</span>
                    <br />
                    A nocode platform
                </h2>
                <p>to enable you create augmented reality experience</p>
                <div className='d-flex'>
                    <a href='/' download={playStore}> <img src={playStore} alt="playstore" width="200px"  srcset="" /></a>
                    <a href='/' download={AppStore}><img src={AppStore} alt="playstore" width="200px"  srcset="" /></a>
                </div>
            </div>
            <div className='right'>
                {/* <img src={vr} alt="" srcset="" style={{width:"100vmin",bottom:"0px,"}}/> */}
            </div>
        </div>
    );
  }
}
