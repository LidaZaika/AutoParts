import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
       <div className="footer-line">
      </div>
      <div className="footer">
          <div className="footer-menu right">		
            <h5>AUTO PARTS</h5>
            <a href="/">Оплата</a><br/>
            <a href="/">Возврат</a><br/>
            <a href="/">О Компании</a><br/>
          </div>
          <div className="footer-menu left">
            <a href="/Catalog">Каталог</a><br/>
            <a href="/">Сопутствующие товары</a><br/>
            <a href="/">Контакты</a><br/>
          </div>	
          <div className="join">
            Присоединяйтесь!
          </div>
          <div  className="socseti">
            <a href="/"><img src="images/vk.png" alt="vk" width="50" height="50"/></a>
            <a href="/"><img src="images/fb.png" alt="fb" width="50" height="50"/></a>
            <a href="/"><img src="images/tg.png" alt="tg" width="50" height="50"/></a>  
          </div>
        	<div className="frame">
      <iframe  src=
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.0163431079598!2d30.
      !3d59.93187098187372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631a4f393ff79%
      3A0x56bdbf13d5255400!2z0J3QtdCy0YHQutC40Lkg0L_RgC4sIDEwNCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LH
      Rg9GA0LMsIDE5MTAyNQ!5e0!3m2!1sru!2sru!4v1538047673551" 
      width="100%" height="400px" frameborder="0" allowfullscreen>
      </iframe>
      </div>	
      </div>		
      </div>
    );
  }
}

export default Footer;