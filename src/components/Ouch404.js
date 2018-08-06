import React, { Component } from 'react';

const Ouch404 = ({ location }) =>
  <div classsName="ouch-404">
    <h1>Resource not found at '{location.pathname}'</h1>
    <h1 className="fourOfour">404</h1>
  </div>

export default Ouch404;
