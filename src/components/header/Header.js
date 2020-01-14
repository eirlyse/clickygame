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
      <p className="" title="Store">Score: {props.score}</p>
      <p className="" title="Contact">Top Score: {props.topScore}</p>
  </div>
)

export default header;

