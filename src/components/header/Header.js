import React, { Component } from 'react';

class score extends Component {

state = {
  score: 0,
  topScore: 0
};

};

const header = (props) => (
  <div>
      <h1 className="" >Clicky Game</h1>
      <p>Click on an image to earn points</p>
      <p className="">Score: {props.score}</p>
      <p className="">Top Score: {props.topScore}</p>
  </div>
)

export default header;

