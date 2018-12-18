import React, { Component } from 'react';


class Products extends Component {
  render() {
    return (
      <div>
      <div className="backround">
		<div className="ST-all">
			<h2>Сопутствующие товары</h2>
			<div className="ST"> 
				<div className="STblock" >
					<div className="STcatalog text">
						<a href="/Catalog"><h6>Автохимия</h6></a><br/>
					<a>Масла</a> <br/>
					<a>Смазки</a> <br/>
					<a>Ароматизаторы</a>
					</div>
					<div className="STcatalog foto"><img height="60%" width="60%" alt=""
					src="images/foto5.png"/></div>
				</div>
				<div>
					<div className="STcatalog text">
						<a href="/Catalog"><h6>Шины</h6></a><br/>
					<a>Летние</a><br/>
					<a>Зимние</a> <br/>
					<a>Всесезонные</a>
					</div>
				<div className="STcatalog foto"><img height="60%" width="60%" alt=""
					src="images/foto6.png"/></div>
				</div>
				<div>
					<div className="text STcatalog">
						<a href="/Catalog"><h6>Диски</h6></a><br/>
					<a>Литые</a><br/>
					<a>Штампованые </a><br/>
					</div>
					<div className="foto STcatalog"><img height="70%" width="70%" alt=""
					src="images/foto7.png"/>
					</div>
				</div>
				<div>
				<img height="100%" width="100%" alt=""
					src="images/foto8.jpg"/>
				</div>
				<div>
					<div className="text STcatalog">
						<a href="/Catalog"><h6>Автоэлектрика</h6></a><br/>
					<a>Лампы</a><br/>
					<a>Аккумуляторы </a><br/>
					<a>Прикуриватели</a> <br/>
					</div>
					<div className="foto STcatalog"><img height="60%" width="60%" alt=""
					src="images/foto9.png"/>
					</div>
				</div>
				<div>
					<div className="text STcatalog">
						<a href="/Catalog"><h6>Щетки стеклоочистителя</h6></a><br/>
					<a>Бескаркасные</a><br/>
					<a>Каркасные</a> <br/>
					<a>Гибридные</a> <br/>
					</div>
					<div className="foto STcatalog"><img height="60%" width="60%" alt=""
					src="images/foto10.png"/>
					</div>
				</div>	
				<div>
					<div className="text STcatalog">
						<a href="/Catalog"><h6>Инструменты</h6></a><br/>
					<a>Гаечные ключи</a><br/>
					<a>Наборы</a> <br/>
					<a>Домкраты</a> <br/>
					</div>
					<div className="foto STcatalog"><img height="100%" width="100%" alt=""
					src="images/foto11.png"/>
					</div>
				</div>
				<div>
					<div className="text STcatalog">
					<a href="/Catalog"><h6>Масла </h6></a><br/>
					<a>Трансмиссионные</a><br/>
					<a>Моторные</a> <br/>
					</div>
					<div className="foto STcatalog"><img height="100%" width="100%" alt=""
					src="images/foto12.png"/>
					</div>
				</div>
				<div className="fotovbloke">
				<img height="100%" width="100%" alt="" src="images/foto13.jpg"/>
				</div>
			</div>
		</div>
      </div>
	  </div>
	);
  }
}

export default Products;