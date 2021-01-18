import React from 'react';
import './styles/App.css';
import Rog from './images/rog.png';
import Nvidia from './images/Nvidia_logo.svg.png';
import Amd from './images/amd-logo.png';
import apple from './images/apple-logo.png';
import windows from './images/windows-logo.png';
import samsung from './images/samsung-logo.png';
import user1 from './images/user-1.jpeg';
import user2 from './images/user-2.jpeg';

const App = () => {
  return (
    <div className="App">
      <div className="Hero">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 19l1.5-5h-4.5l7-9-1.5 5h4.5l-7 9z"/></svg>
        <h1>Your favourite electronics, all in one place!</h1>
      </div>

      <div className="sponsor">
        <h2>We sell only certified brand!</h2>
        <div className="sponsor-container">
          <div className="first-row">
            <div className="image-container">
              <img src={Rog} alt="rog-logo" />
            </div>
            <div className="image-container">
              <img src={Nvidia} alt="nvidia-logo" />
            </div>
            <div className="image-container">
              <img src={Amd} alt="amd-logo" />
            </div>
          </div>
          <div className="second-row">
            <div className="image-container">
              <img src={apple} alt="apple-logo" />
            </div>
            <div className="image-container">
              <img src={windows} alt="windows-logo" />
            </div>
            <div className="image-container">
              <img src={samsung} alt="samsung-logo" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="testimonials-section">
            <h2>What customers say about us</h2>
            <div className="testimonials-container">
              <div className="testimonial">
                <div className="user-propic">
                  <img src={user1} alt="user-propic" />
                </div>
                <div className="user-review">
                  <h2>Excellent!</h2>
                </div>
                <p className="author-name">Joe Doe</p>
              </div>
              <div className="testimonial">
                <div className="user-propic">
                  <img src={user2} alt="user-propic" />
                </div>
                <div className="user-review">
                  <h2>Great customers service!</h2>
                </div>
                <p className="author-name">John Doe</p>
              </div>
            </div>
      </div>
    </div>
  );
}

export default App;
