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
  className={`section-padding ${selectedSection === 'Flexbox' ? 'active' : ''}`}
  style={{height: '500px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 wow fadeInLeft delay-05s">
                <div className="section-title">
                  <a href="#Flexbox" target="_blank">
                  </a>
                  <hr className="botm-line" />
                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9">
              <img src= 'https://cdn.pixabay.com/photo/2016/12/16/03/56/purple-background-1910537_640.jpg' width= " 1000px "height="510px"></img>
              </div>
            </div>
          </div>
        </section>
        <section
            id="Contact"
            className={`section-padding ${selectedSection === 'Flexbox' ? 'active' : ''}`}
            style={{ width: '501px', height: '1000px' }}>
          
          <div className="container">
            <div className="row">
              <div className="col-md-3 wow fadeInLeft delay-05s">
                <div className="section-title">
                  <a href="#Contact" target="_blank">
                  </a>
                  <hr className="botm-line" />
                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9">
              <img src= 'https://images.unsplash.com/photo-1617957796155-72d8717ac882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG9zJTIwdmVyZGVzfGVufDB8fDB8fHww&w=1000&q=80' width="1001" height="1500" ></img>
              </div>
            </div>
          </div>
        </section>
        <section
            id="Products"
            className={`section-padding ${selectedSection === 'Flexbox' ? 'active' : ''}`}
            style={{ width: '1001', height: '1500px' }}>
          
          <div className="container">
            <div className="row">
              <div className="col-md-3 wow fadeInLeft delay-05s">
                <div className="section-title">
                  <a href="#Contact" target="_blank">
                  </a>
                  <hr className="botm-line" />
                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9">
              <img src= 'https://img.freepik.com/fotos-premium/fondo-rojo-abstracto_8466-4.jpg' width="1001" height="1500"></img>
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
