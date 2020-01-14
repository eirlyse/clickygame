import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/wrapper/Wrapper';
import ImageCards from './components/ImageCards/ImageCards';
import Header from './components/header/Header';
import images from './images.json';

function randomizeImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    images,
    score: 0,
    topScore: 0,
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
    });
    if (newScore >= this.state.topScore) {
      this.setState({ highScore: newScore });
    } 
    this.handleRandom();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.highScore,
      clicked: []
    });
    this.handleRandom();
  };

  handleRandom = () => {
    let randomizeImages = randomizeImages(images);
    this.setState({ characters: randomizeImages });
  };

  render() {
    return (
      <Wrapper>
      {/* <Header />

      {
        images.map( (image) => (
          
          <ImageCards 
          key={image.id}
          image={image.image}/>
        ))
      } */}

<Header
          title="Clicky Game"
          score={this.state.score}
          highScore={this.state.topScore}
        />

        <p>
        Click on an image to earn points
        </p>
            {this.state.images.map(images => (
                <ImageCards
                  key={images.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleShuffle={this.handleRandom}
                  id={images.id}
                  image={images.image}
                />
            ))}

    </Wrapper>
    )}

};



export default App;
