import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/wrapper/Wrapper';
import ImageCards from './components/ImageCards/ImageCards';
import Header from './components/header/Header';
import images from './images.json';



class App extends Component {

  state = {
    images,
    score: 0,
    topScore: 0,
    clicked: [],
  };

  randomizeImages = images => {
    for (let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  };

  handleImageClick = id => {
      this.handleIncrement();
      this.randomizeImages(images);

  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
    });
    if (newScore >= this.state.topScore) {
      this.setState({ highScore: newScore });
    } 
    this.randomizeImages();
  };


  // handleRandom = () => {
  //   let randomizeImages = randomizeImages(images);
  //   this.setState({ characters: randomizeImages });
  // };

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
          topScore={this.state.topScore}
        />
        <div>
        </div>

        <div>
            {this.state.images.map(images => (
                <ImageCards
                  key={images.id}
                  handleImageClick={this.handleImageClick}
                  handleIncrement={this.handleIncrement}
                  randomizeImages={this.randomizeImages}
                  id={images.id}
                  image={images.image}
                />
            ))}
            </div>

    </Wrapper>
    )}

};



export default App;
