import React, { useState } from 'react';
import './App.scss';
import Cube from './components/cube/cube';
import Menu from './components/menu/menu';



function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  return (
    <div className="App">
      <Cube />
      <Menu onSectionClick={handleSectionClick} />
      <div className="content">
      <section
  id="Flexbox"
  className={`section-padding1 ${selectedSection === 'Flexbox' ? 'active' : ''}`}
  style={{height: '1000px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 wow fadeInLeft delay-05s">
                <div className="section-title">
                  <a href="#Flexbox" target="_blank">
                  </a>
                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9">
              </div>
            </div>
          </div>
        </section>
        <section
            id="Contact"
            className={`section-padding2 ${selectedSection === 'Contact' ? 'active' : ''}`}
            style={{ width: 'auto', height: '1000px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 wow fadeInLeft delay-05s">
                <div className="section-title">
                  <a href="#Contact" target="_blank">
                  </a>
                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9">
              </div>
            </div>
          </div>
        </section>
        <section
            id="Products"
            className={`section-padding3 ${selectedSection === 'Products' ? 'active' : ''}`}
            style={{ width: 'auto', height: '1000px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 wow fadeInLeft delay-05s">
                <div className="section-title">
                  <a href="#Contact" target="_blank">
                  </a>

                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9">
              </div>
            </div>
          </div>
        </section>


      </div>
      <div className="footer"></div>
    </div>
  );
}
export default App;
