import logoDesktop from './images/banner.jpg';
import logoMobile from './images/mobile-banner.jpg';
import handshake from './images/handshake.png';
import rating from './images/rating.png';
import electricity from './images/electricity.png';
import './App.scss';
import React from 'react';
import instagram from './images/instagram.png.webp';
import phone from './images/phone.png';
import ContactForm from './components/ContactForm';
import ContentCards from './components/ContentCards';
import ImageGallery from './components/ImageGallery';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="app-logo-desktop">
          <div className="we-are">
            <h3 className="we-text">WE   ARE</h3>
          </div>
          <img src={logoDesktop} alt="logo" />
        </div>
        <div className="app-logo-mobile">
          <div className="we-are-mobile">
            <h3 className="we-text">WE ARE</h3>
          </div>
          <img src={logoMobile} alt="logo" />
        </div>
        <div className="contentDiv">
            <img class="arrow" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png" />
        </div>
      </header>
      <body>
        
        <div className="introduction">
        <FadeInSection>
          <hr className="divider" />
          <h3>Welcome to Drift House Digital, where innovation meets design excellence. We are a forward-thinking digital agency passionate about creating stunning, high-performance websites that set your brand apart. With a dedicated team of visionaries and technical experts, we turn your digital dreams into reality. </h3>
          <h3>Explore the limitless possibilities of online success with us.</h3> 
          <hr className="divider" />
        </FadeInSection>
        </div>      

      
        <FadeInSection>
        <div className="service-block">
        <h2 className="blue-text">Our Guarantees</h2>
          <div className="service-wrapper">
          <div className="service-icon-wrapper">
              <img className="service-icon" src={rating} alt="description of image" />
            </div>
            <div className="service-text">
              <h3>STANDARD OF EXCELLENCE</h3>
              <p>We promise to deliver only the best products and services</p>
              </div>
          </div> 

          <div className="service-wrapper">
            <div className="service-icon-wrapper">
              <img className="service-icon margin" src={electricity} alt="description of image"/>
            </div>
            <div className="service-text">
              <h3>LATEST TECHNOLIOGIES</h3>
              <p>We work ahead of industry standards with the newest technologies</p>
             </div>
          </div> 

          <div className="service-wrapper">
            <div className="service-icon-wrapper">
              <img className="service-icon margin" src={handshake} alt="description of image"/>
            </div>
            <div className="service-text desktop-padding-top">
              <h3>OPEN COMMUNICATION</h3>
              <p>Our customer service at the forefront of our agency</p>
            </div>
          </div> 
        </div> 
        <hr className="divider" />
        </FadeInSection>

          <div className="contact-modal">
            <h3>Fancy a chat?</h3>
             <ContactForm />
          </div>

        {/* <div className="contact-modal">
          <div id="cta-buttons" class="box">
            <a class="button" href="#popup1">Contact Us</a>
            <a class="button" href="#popup2">See Our Gallery</a>
          </div>

          <div id="popup1" class="overlay">
            <div class="popup">
              <h2>Contact Us</h2>
              <a class="close" href="#cta-buttons">&times;</a>
              <div class="content">
                <ContactForm />
              </div>
            </div>
          </div>

          <div id="popup2" class="overlay">
            <div class="popup-gallery">
              <h2>Our Gallery</h2>
              <a class="close" href="#cta-buttons">&times;</a>
              <div class="content image-gallery">
                <ImageGallery />
              </div>
            </div>
          </div>
        </div> */}

        <div className="contact-div">
          <div className="contact-footer">
            <div className="social-icons">
            <a target="_blank" href="https://instagram.com/drifthousedigital?igshid=NzZhOTFlYzFmZQ==">
              <img className="social-icon" src={instagram} />
            </a>
            {/* <a href="tel:07395810679">
              <img className="social-icon" src={phone} />
            </a> */}
            </div>
          </div>
        </div> 
      
      </body>
    </div>
  );
}

export default App;

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}



