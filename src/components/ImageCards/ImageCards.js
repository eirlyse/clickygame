import React from 'react';
import './ImageCards.css';

const ImageCard = (props) => {
  return (
      <button className="card" 
        onClick={props.handleImageClick}>
          <div className="img-container">
              <img alt={props.name} src={props.image} />
              
          </div>
          
      </button>
  );
}



export default ImageCard