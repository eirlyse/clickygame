import React, { Component } from 'react';
import './Wrapper.css';
import '../ImageCards/ImageCards';


const Wrapper = (props) => {
    return (
        <div>
            <div className="wrapper">{props.children}</div>
        </div>
    );

};

class ImageCards extends Component {

    // create click event for images to randomly change to new image
    handleImageClick = event => {
        event.preventDefault();
    };

};

export default Wrapper;





