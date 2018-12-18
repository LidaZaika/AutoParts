import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
			<div>
					<div className="carousel-wrapper" style={{height: "500px"}} id="carousel">
				<span id="target-item-1" ></span>
				<span id="target-item-2" ></span>
			<div className="carousel-item item-1 light">
				<div>
					<a className="arrow arrow-prev" href="#target-item-2"></a>
					<a className="arrow arrow-next" href="#target-item-2"></a>
					<ul>
					<li><h3>Верните, если передумали!</h3></li>
					<li><p>В течение недели Вы можете вернуть товары, купленные<br/> в нашем магазине</p></li>
				</ul>
				</div>
				<div><img height="400px" width="400px" alt="" src="images/return.png"/></div>
			</div>
			<div className="carousel-item item-2">
				<a className="arrow arrow-prev" href="#target-item-1"></a>
				<a className="arrow arrow-next" href="#target-item-1"></a>
				<div>
					<ul>
						<li><h3>Шестая канистра в подарок!</h3></li>
						<li><p>При покупке пяти любых одинаковых<br/>наименований моторных масел</p></li>
					</ul>
				</div>	
				<div className="img-carousel"><img height="100%" alt="" width="100%" src="images/slide1.jpg"/></div>
			</div>	
			</div>
			</div>
    );
  }
}

export default Carousel;