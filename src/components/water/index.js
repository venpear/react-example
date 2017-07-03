import React, { Component } from 'react';
import './styles.scss';
class Water extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    <div className="water-container">
      <canvas></canvas>
      <span>Click anywhere to place a new magnet... </span>
    </div>
  }
}
export default Water;