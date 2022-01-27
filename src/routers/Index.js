import React, { Component } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../pages/Home';

export default class Index extends Component {
  render() {
    return(
        <div className='mx-3'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />  
                </Routes>
            </BrowserRouter>
        </div>
    );
  }
}
