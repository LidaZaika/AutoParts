import React, { Component } from 'react';

class Order extends Component {
  render() {
    return (
        <div className="order">
        <div className="ordertxt">
            <p>Вы можете оплатить заказ с баланса личного кабинета</p>
            <p>Если на балансе есть деньги - заказ оформляется сразу<br/>
            Если нет - нужно доплатить недостающее<br/>
            Баланс пополняется:<br/>
            - наличными в офисе обслуживания;<br/>
            - через банковский перевод. Деньги идут 3-5 дней;<br/>
            - при возврате товара;<br/>
            - в случае отказа от заказа.<br/>
            </p>
        </div>
        <div className="orderbtn">
            <button><b>Оформить заказ</b></button>
        </div>
     </div>
    )
  }
}

export default Order;