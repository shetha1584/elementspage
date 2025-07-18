import React from 'react';
import './App.css'; 

const Partners = () => {
  return (
    <section id="partners" className="partners-section">
      <div className="containerpartner">
        <div className="cardpartner  p-4 bg-white">
          <div className="partner-divider">
            <span className="divider-text">PARTNERED WITH</span>
          </div>

          <div className="partner-carousel overflow-hidden">
            <div className="scroll-track d-flex">
              {/* Logos repeated inline */}
              {Array.from({ length: 3 }).map((_, i) => (
                <React.Fragment key={i}>
                  <img src="/partner1.png" alt="Partner 1" style={{ maxHeight: '60px', margin: '0 40px' }} />
                  <img src="/partner2.png" alt="Partner 2" style={{ maxHeight: '60px', margin: '0 40px' }} />
                  <img src="/partner3.png" alt="Partner 3" style={{ maxHeight: '60px', margin: '0 40px' }} />
                  <img src="/partner4.png" alt="Partner 4" style={{ maxHeight: '60px', margin: '0 40px' }} />
                  <img src="/partner5.png" alt="Partner 5" style={{ maxHeight: '60px', margin: '0 40px' }} />
                  <img src="/DPIIT-logo.png" alt="Partner 6" style={{ maxHeight: '60px', margin: '0 40px' }} />
                  <img src="/Metal-logo.png" alt="Partner 7" style={{ maxHeight: '60px', margin: '0 40px' }} />
                  <img src="/Startup_India.png" alt="Partner 8" style={{ maxHeight: '60px', margin: '0 70px' }} />
                  <img src="/StartupTN Logo.png" alt="Partner 9" style={{ maxHeight: '40px', margin: '0 70px' , marginTop:'20px' }} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for scrolling animation */}
      <style>
        {`
          .partner-carousel {
            overflow: hidden;
            width: 100%;
          }

          .scroll-track {
            display: flex;
            animation: scroll-left 20s linear infinite;
            width: max-content;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Partners;
