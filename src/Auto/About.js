import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <div className="about">
          <div><p>50 млн предложений<br/> оригинальных автозапчастей <br/>
            по актуальным ценам<br/> с курьерской доставкой по городу и области</p>
            <form>
                <div className="tabs">
                  <input id="tab1" type="radio" name="tabs" checked/>
                  <label for="tab1" title="Вкладка 1"><span className="transfortext">Номер детали</span></label>
                
                  <input id="tab2" type="radio" name="tabs"/>
                  <label for="tab2" title="Вкладка 2"><span className="transfortext">VIN номер</span></label>
                  <input id="tab3" type="radio" name="tabs"/>
                  <label for="tab3" title="Вкладка 3">Марка</label>
                  <section id="content-tab1" className="content-tab">
                      <input  type="search" name="q" placeholder="Например, с365"/> 
                  </section>  
                  <section id="content-tab2" className="content-tab">
                      <input  type="search" name="q" placeholder="Например, AA95432YY"/> 
                  </section> 
                  <section id="content-tab3" className="content-tab">
                      <input  type="search" name="q" placeholder="Например, Вольво S40"/> 
                  </section> 
                </div>
            </form>
          </div>
          <div><img height="410px" width="100%" alt="" src="images/foto4.jpg"/></div>
          </div>
            </div>
    );
  }
}

export default About;