import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import image1 from '../images/gallery/image1.jpg';
import image2 from '../images/gallery/image2.jpg';
import image3 from '../images/gallery/image3.jpg';
import image4 from '../images/gallery/image4.jpg';
import image5 from '../images/gallery/image5.jpg';
import image6 from '../images/gallery/image6.jpg';
import image7 from '../images/gallery/image7.jpg';
import image8 from '../images/gallery/image8.jpg';
import image9 from '../images/gallery/image9.jpg';


// import {CSSTransitionGroup} from 'react-transition-group';
const ImageURL = [
  image9,
  image8,
  image7,
  image6,
  image5,
  image4,
  image3,
  image2,
  image1
];

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0, slideshow: false, fullscreen: false };
    //this.prevHandler=this.prevHandler.bind(this);
    //this.nextHandler=this.nextHandler.bind(this);
    //this.dotHandler=this.dotHandler.bind(this);
    //this.slideshowHandler=this.slideshowHandler.bind(this);
    this.exitfullScreen = this.exitfullScreen.bind(this);
    //this.enterfullScreen=this.enterfullScreen.bind(this);
    this.slideTransition = this.slideTransition.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.left = 0;
    //this.myImage = React.createRef();
  }
  slideTransition = slider => {
    if (this.state.currentIndex == 9) {
      this.left = 0;
      slider.style.left = this.left + 'px';
    } else {
      this.left = this.left - 60;
      console.log(this.left);
      slider.style.left = this.left + 'px';
    }
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.slideshow === true) {
        var slider = document.getElementById('slider-img-container');
        var index =
          this.state.currentIndex === 9 ? 0 : this.state.currentIndex + 1;

        this.slideTransition(slider);

        this.setState(prevState => ({
          currentIndex:
            prevState.currentIndex === 9 ? 0 : prevState.currentIndex + 1
        }));
      }
    }, 2000);
  }

  slideshowHandler = event => {
    this.setState(prevState => ({
      slideshow: prevState.slideshow === false ? true : false
    }));
  };

  exitfullScreen = event => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    var i = document.getElementsByClassName('gallery-img-container ')[0];
    i.getElementsByClassName('gallery-img')[0].style.height = '300px';
    i.getElementsByClassName('gallery-img')[0].style.width = '100%';
    this.setState(prevState => ({
      fullscreen: prevState.fullscreen === false ? true : false
    }));
  };

  enterfullScreen = event => {
    var i = document.getElementsByClassName('gallery-img-container ')[0];
    console.log('fullscreen' + this.state.fullscreen + i);

    if (i.requestFullscreen) {
      i.requestFullscreen();
    } else if (i.mozRequestFullScreen) {
      i.mozRequestFullScreen();
    } else if (i.webkitRequestFullscreen) {
      i.webkitRequestFullscreen();
    }

    i.getElementsByClassName('gallery-img')[0].style.height = '100%';
    i.getElementsByClassName('gallery-img')[0].style.width = '100%';

    this.setState(prevState => ({
      fullscreen: prevState.fullscreen === false ? true : false
    }));
  };

  dotHandler = event => {
    var imgIndex = event.target.id;

    var slider = document.getElementById('slider-img-container');
    this.left = parseInt(imgIndex) * -60;
    slider.style.left = this.left + 'px';

    this.setState({ currentIndex: parseInt(imgIndex) });
  };

  updateImage = event => {
    var imgIndex = event.target.id;

    var slider = document.getElementById('slider-img-container');
    this.left = parseInt(imgIndex) * -60;
    slider.style.left = this.left + 'px';

    this.setState({ currentIndex: parseInt(imgIndex) });
  };

  prevHandler = event => {
    var slider = document.getElementById('slider-img-container');
    var index = this.state.currentIndex === 0 ? 9 : this.state.currentIndex - 1;

    this.slideTransition(slider);

    this.setState(prevState => ({
      currentIndex:
        prevState.currentIndex === 0 ? 9 : prevState.currentIndex - 1
    }));
  };

  nextHandler = event => {
    var slider = document.getElementById('slider-img-container');
    var index = this.state.currentIndex === 9 ? 0 : this.state.currentIndex + 1;

    this.slideTransition(slider);

    this.setState(prevState => ({
      currentIndex:
        prevState.currentIndex === 9 ? 0 : prevState.currentIndex + 1
    }));
  };

  render() {
    //class="material-icons"
    var i = this.state.currentIndex;
    console.log(i);
    var dotNumbers = Array.from(Array(ImageURL.length).keys());
    const carouselDots = dotNumbers.map((n, index) => (
      <div
        className={[
          'carousel-dot',
          index === this.state.currentIndex ? 'active' : ''
        ].join(' ')}
        key={n}
        id={n}
        onClick={this.dotHandler}
      >
        &#9679;
      </div>
    ));
    const ImgItem = (
      <div className="gallery-img-container">
        <img className="gallery-img" src={ImageURL[i]} />
        <button className="prev-carousel-button" onClick={this.prevHandler}>
          &#9664;
        </button>
        <div id="carousel-dot-container">{carouselDots}</div>
        <div className="next-carousel-button" onClick={this.nextHandler}>
          &#9654;
        </div>
        {this.state.fullscreen === false ? (
          <button className="fullscreen-button" onClick={this.enterfullScreen}>
            &#9635;
          </button>
        ) : (
          <button className="fullscreen-button" onClick={this.exitfullScreen}>
            &#9635;
          </button>
        )}
      </div>
    );
    var imgId = 0;

    const sliderImages = ImageURL.slice(0, 10).map((n, index) => (
      <img
        className={[
          'slider-img',
          index === this.state.currentIndex ? 'active' : ''
        ].join(' ')}
        src={n}
        key={n}
        id={imgId++}
        onClick={this.updateImage}
      />
    ));

    return (
      <div id="gallery-container" ref={this.myImage}>
        {ImgItem}
        <div id="slider-img-container" ref={this.mySlider}>
          {sliderImages}
        </div>
      </div>
    );
  }
}
const element = <ImageGallery />;
ReactDOM.render(element, document.getElementById('root'));

export default ImageGallery;