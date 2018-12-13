import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
			<div className="menustart">
				<ul>
					<li id="tel">(812) 123-45-67</li>
					<li id="onas"><a href="/"> Онас</a></li>
					<li id="cat"><a href="/Catalog">Каталог</a></li>
				</ul>
			</div>
					<div className="logotip">
						<div id="logo">AUTO PARTS</div>
						<div id="logo2">автомобильные детали</div>
					</div>	
					<div id="Bag"><a href="/"><img height="40px" width="40px" alt=""
						src="images/profile.png"/></a>
										<a href="/Bag"><img height="40px" width="40px" alt=""
						src="images/bag.png"/></a>
					</div>
		</header>
    );
  }
}

export default Header;