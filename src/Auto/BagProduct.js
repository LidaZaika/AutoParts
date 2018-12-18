import React, { Component } from 'react';

class BagProduct extends Component {
  render() {
    return (
      <div>
            <div className="articles">
                <input id="article0" type="checkbox" onclick="checked()"/> &nbsp;&nbsp;&nbsp;<label className="labelarticle0" for="article0">Выбрать все</label>
            </div>
            <div className="article"> 
                    <div className="article1"><input type="checkbox" id="article1"/></div>
                    <div className="imgarticle"><img  width="180px" alt="" src="static/images/headlight.jpg"/></div>
                    <div id="name-article"><label for="article1"><b>Фара противотуманная, &nbsp;левая,&nbsp; ASAM, &nbsp;30483</b></label><br/>Артикул: 123456</div>
                    <div className="number">  <button className="btn btn-danger"  onclick="S2()">-</button>
                        <input className="input" id="vetind" name="vetind"size="10" type="text" value="0"/>
                        <button className="btn btn-success"  onclick="S1()">+</button><br/>
                      <div className="depot">19 на складе</div>  
                    </div>
                    <div><b className="sale">423 р.</b> </div>
            </div>
            <div className="article">
                <div className="article1"><input type="checkbox" id="article2"/></div>
                    <div className="imgarticle"><img width="150px" alt="" src="static/images/accumulator.jpg"/></div>
                    <div id="name-article"><label for="article2"><b>Аккумуляторная батарея Bosch Funstart AGM,<br/>
                12B, 8А/ч, 150А, 0092М60110</b></label><br/>Артикул: 123456</div>
                <div className="number">  <button className="btn btn-danger" onclick="S4()" onclick="summin()">-</button>
                <input className="input" id="vetind2" name="vetind2" size="10" type="text" value="0"/>
                <button className="btn btn-success" onclick="S3()" onclick="sumplus()">+</button><br/>
                <div className="depot">21 на складе</div>
                </div>
                <div><b className="sale" id="sales1">423 р.</b> </div>
            </div>
            <div className="article">
                    <div className="article1"><input type="checkbox" id="article2"/></div>
                    <div className="imgarticle"><img width="150px" alt="" src="static/images/accumulator.jpg"/></div>
                    <div id="name-article"><label for="article3"><b>Аккумуляторная батарея Bosch Funstart AGMC,<br/>
                12B, 8А/ч, 150А, 0092М60111</b></label><br/>Артикул: 123457</div>
                <div className="number">  <button className="btn btn-danger" onclick="S5()">-</button>
                <input className="input" id="vetind3" name="vetind3" size="10" type="text" value="0"/>
                <button className="btn btn-success" onclick="S6()">+</button><br/>
                <div className="depot">10 на складе</div>
                </div>
                <div><b className="sale">423 р.</b> </div>
                </div>
                <div class="products">
				<div>Выбранные товары</div>
				<div type="number" id="amount">0</div>
				<div id="sum">0</div>
        </div>
    </div>
    )
  }
}

export default BagProduct;