import React from 'react';


class CatalogPrice extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={
            brands: ""
        }
       

      }; 


// filterBy1=(event, value)=>{
// // this.props.click=this.filter.push() 
// console.log(event.target.value);
// // if(event.target.checked){
// //     this.setState({brands:event.target.value})
// // }else {
// //     this.setState({brands:""})
// // }
// };


   render() {
    
const {data, click, filterBy, filterByford, sortBy} = this.props;

      return (
      <div>
		  <div className="price-all">
   <div className="hamburger-menu-catalog">
       &nbsp;Фильтры&nbsp;
    </div>       
<div className="menu-horizontal">
    <div className="hamburger-menu">
        <img height="20px" width="20px" src="images/hamburger-menu.png"/>&nbsp;&nbsp;
        <p>Каталог ТО и товары</p>
    </div>
    <div className="menu-sort">
        <div className="sort-all">
            <ul className="sort">
            <li>Сортировать по:&nbsp;&nbsp;</li>
            <li><a onClick={sortBy}>наименованию  &darr;&nbsp;&nbsp;</a></li>
            <li><a>цене &darr;&nbsp;&nbsp;</a></li> 
            <li><a>популярности &uarr;&nbsp;&nbsp;</a>	</li>
            </ul>
        </div>
        <div className="sort-layout">
            <div>Компоновка </div>
            <div>&nbsp;&nbsp;<img id="sortinline"  src="images/layout1.png"/>&nbsp;&nbsp; <img id="sortflex" onclick="sortflex()" src="images/layout2.png"/> </div>
        </div>
        <div>
        Показывать по&nbsp;&nbsp; 8&nbsp;&nbsp; 12&nbsp;&nbsp; 16&nbsp;&nbsp; 24&nbsp;&nbsp;
        </div>
    </div>    
</div>
<div className="price">
<div className="vertical">
    <div className="selection">
        <p> <font color="#ce9840" ><b>Производитель</b></font></p>
        <div>
            <p>
            <input type="checkbox" name="Castrol" value="Castrol" id="box-1" onClick={filterBy}/><label for="box-1" className="name-maker">Castrol</label><br/>
            <input type="checkbox" name="option2" value="Ford" id="box-2" onClick={filterByford}/><label for="box-2"className="name-maker">Ford</label><br/>
            <input type="checkbox" name="option3" value="General Motors" id="box-3" onClick={filterBy}/><label for="box-3"className="name-maker">General Motors</label><br/> 
            <input type="checkbox" name="option4" value="Liqui Moly" id="box-4" onClick={filterBy}/><label for="box-4"className="name-maker">Liqui Moly</label><br/> 
            <input type="checkbox" name="option5" value="Mobil" id="box-5" onClick={filterBy}/><label for="box-5"className="name-maker">Mobil</label><br/>
            <input type="checkbox" name="option6" value="Nissan" id="box-6" onClick={filterBy}/><label for="box-6"className="name-maker">Nissan</label><br/> 
            <input type="checkbox" name="option7" value="Total" id="box-7" onClick={filterBy}/><label for="box-7"className="name-maker">Total</label><br/>
            <input type="checkbox" name="option8" value="a8" id="box-8" onClick={filterBy}/><label for="box-8"className="name-maker" id="one">Еще один</label>
            </p>
            <p className="dot" onClick={click}>Все производители </p>
        </div>
        <div className="price-range">
            <p> <font color="#ce9840" ><b> Ценовой диапазон, руб.</b></font></p>
            <p><input id="slider" type="range" min="0" max="100" step="1" value="50"/></p> 
        </div>
        <div className="characteristic-OIL">
            <p><b onClick={this.btn}>Вязкость SAE</b> &nbsp;<img id="sae1" onClick={this.btn} src="images/down arrow.png"/>	</p>
                {/* <div className={`sae2 ${this.state.display}`}>
                <input type="checkbox"  id="yes"/><label for="yes" id="SAEyes">5W</label>
                <input type="checkbox" id="no"/><label for="no" id="SAEno">10W</label>
                </div> */}
        </div>
        <div className="characteristic-OIL">
            <p><b onClick={this.btnACEA}>Классификация ACEA</b> &nbsp;<img onClick={this.btnACEA} src="images/down arrow.png"/></p>	
            {/* <div className={`acea2 ${this.state.displayacea}`}>
                <input type="checkbox"  id="yes"/><label for="yes" id="SAEyes">A</label>
                <input type="checkbox" id="no"/><label for="no" id="SAEno">C</label>
            </div> */}
        </div>
        <div className="characteristic-OIL">
            <p><b>Классификация API</b> <img src="images/down arrow.png"/></p>	
        </div>
        <div className="characteristic-OIL">
            <p> <font color="#ce9840" ><b> Объем, л</b></font></p>
            <p><input type="checkbox" name="option1" value="0.1" id="box-1" onClick={this.filterBy2}/><label for="box-1" className="name-maker">0.1</label><br/>
            <input type="checkbox" name="option2" value="0.25" id="box-2"/><label for="box-2"className="name-maker">0.25</label><br/>
            <input type="checkbox" name="option3" value="0.5" id="box-3"/><label for="box-3"className="name-maker">0.5</label><br/> 
            <input type="checkbox" name="option4" value="0.6" id="box-4"/><label for="box-4"className="name-maker">0.6</label><br/> 
            <input type="checkbox" name="option5" value="1" id="box-5"/><label for="box-5"className="name-maker">1</label><br/>
            </p>
            <p><a href="#" className="dot">Смотреть весь список</a></p>
        </div>
        <div className="filters-reset" onclick="alert('Сейчас снимутся все галочки'); return false;">
            <p> <font color="#ce9840"><b> Сбросить все фильтры</b></font></p>
        </div>
    </div>	
</div>
    <div className="oil" id="oil">
            {data.map((el)=>  
            <div className="oilcatalog">
              <ul className="oildiv">
                    <li className="oilfoto">
                    <img src={el.image}/>
                    </li>
                    <li className="oiltxt">
                        <font color="black" ><b>{el.name}</b></font>
                    </li>
                    <li className="oiltxt2"	>
						{el.liter}&nbsp;л,&nbsp; Минеральное,&nbsp; 10W-40
					</li>             
                    <li className="oiltxt3"	>
                            завтра после 00:30
                    </li>
                    <li className="oiltxt4"	>
                            <b>{el.price}</b>
                    </li>
            </ul>
            </div>
              )}  
    </div>					
    </div>
<div className="pages">
    <p>страницы 
    </p>
</div>
</div>	
</div>

	)    
}
}

export default CatalogPrice;
