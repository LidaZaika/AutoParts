import React, { Component } from 'react';

class Car extends Component {
  render() {
    return (
        <div id="car" className="carblock" style={{display: "block"}}><h2>Каталог запчастей по маркам авто</h2>
			<div className="top">
				<div className="listcar">
					<ul>
						<li className="brand">
							<span className="letter">A</span>
							<a href="/">Acura</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Alfa Romeo</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Audi</a>
						</li><br/>
						<li className="brand">
							<span className="letter">B</span>
							<a href="/">BMW</a>
						</li><br/>
						<li className="brand">
							<span className="letter">C</span>
							<a href="/">Cadillac</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Chery</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Chevrolet</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Chrysler</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Citroen</a>
						</li><br/>
						<li className="brand">
							<span className="letter">D</span>
							<a href="/">Daewoo</a>
						</li>					
					</ul>
					<ul>
						<li className="brand">
							<span className="letter">F</span>
							<a href="/">Fiat</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Ford</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Ford USA</a>
						</li><br/>
						<li className="brand">
							<span className="letter">G</span>
							<a href="/">Geely</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Great Wall</a>
						</li>
						<br/>
						<li className="brand">
							<span className="letter">H</span>
							<a href="/">Honda</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Hyundai</a>
						</li><br/>
						<li className="brand">
							<span className="letter">I</span>
							<a href="/">Infiniti</a>
						</li>
						<li className="brand"><br/>
							<span className="letter">J</span>
							<a href="/">Jaguar</a>
						</li>			
					</ul>
					<ul>
						<li className="brand">
							<span className="letter">K</span>
							<a href="/">Kia</a>
						</li><br/>
						<li className="brand">
							<span className="letter">L</span>
							<a href="/">Land Rover</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Lexus</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Lifan</a>
						</li><br/>
						<li className="brand">
							<span className="letter">M</span>
							<a href="/">Mazda</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Mercedes</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">MINI</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Mitsubishi</a>
						</li><br/>
						<li className="brand">
							<span className="letter">N</span>
							<a href="/">Nissan</a>
						</li>
					</ul>
					<ul>
						<li className="brand">
							<span className="letter">O</span>
							<a href="/">Opel</a>
						</li><br/>
						<li className="brand">
							<span className="letter">P</span>
							<a href="/">Peugeot</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Pontilac</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Porsche</a>
						</li><br/>
						<li className="brand">
							<span className="letter">R</span>
							<a href="/">Renault</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Rover</a>
						</li><br/>
						<li className="brand">
							<span className="letter">S</span>
							<a href="/">Saab</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Seat</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Skoda</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Smart</a>
						</li>
					</ul>
					<ul>
						<li className="brand">
							<span className="letter">S</span>
							<a href="/">Ssangyong</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Subarut</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Suzuki</a>
						</li><br/>
						<li className="brand">
							<span className="letter">T</span>
							<a href="/">Toyota</a>
						</li><br/>
						<li className="brand">
							<span className="letter">V</span>
							<a href="/">Volkswagen</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">Volvo</a>
						</li><br/>
						<li className="brand">
							<span className="letter">рус</span>
							<a href="/">ВАЗ</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">ЗАЗ</a>
						</li>
						<li className="brand">
							<span className="letter"></span>
							<a href="/">УАЗ</a>
						</li>
					</ul>						
				</div>
			</div>
		</div>
    );
  }
}

export default Car;