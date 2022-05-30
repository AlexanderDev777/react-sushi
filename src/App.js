import React from "react"
import { Component } from "react"
import Basket from "./Components/Basket";
import Header from "./Components/Header";
import Card from "./Components/Card";
import sushiBase from "./sushiBase";

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			sushi: {},
			basket: {},
			display: false,
		}
	}

	componentDidMount() {
		this.onGetLocalStorage();
	}

	// Получаем данные из local storage и передаем в state

	onGetLocalStorage() {
		this.setState({
			basket: JSON.parse(localStorage.getItem("basket")) || {}, // Условие если в local ничего нет, тогда добавим пустой объект
			sushi: JSON.parse(localStorage.getItem("sushi")) || sushiBase // Если в local нет sushi тогда подгружаем из base
		});
	}

	// Открытие корзины

	onToggleBasket = () => {
		const { display } = this.state;

		this.setState({
			display: !display
		});
	}

	//Добавление в корзину

	addToBasket = (key) => {
		const { basket, sushi } = this.state;

		basket[key] = basket[key] + 1 || 1; //Формирование пары ключ из sushi + кол-во.

		sushi[key].check = true; // Изменение свойства check при нажатии на кнопку

		localStorage.setItem('basket', JSON.stringify(basket)); //Передача корзины в local storage
		localStorage.setItem('sushi', JSON.stringify(sushi));

		this.setState({
			basket: basket,
			sushi: sushi
		});
	}

	//Удаление товара из корзины

	onDeleteBasketItem = (key) => {
		const { basket, sushi } = this.state;
		
		delete basket[key];

		sushi[key].check = false;

		localStorage.setItem('basket', JSON.stringify(basket)); // Обновление local storage
		localStorage.setItem('sushi', JSON.stringify(sushi));

		this.setState({
			basket: basket,
			sushi: sushi
		});
	}

	// Изменение кол-во одного товара в корзине

	postChangeToBasket = (obj) => {
		const { basket } = this.state;
		const newBasket = {...basket, ...obj,} // Соединяем текущую корзину + измененный объект
		
		this.setState({
			basket: newBasket, // Перезаписываем корзину
		});
	}

	render() {

		const { display, sushi, basket } = this.state;

		const basketKey = Object.keys(basket); //Массив ключей из state basket
    	
		const total = basketKey.reduce((prevTotal, key) => { // Общая сумма 
      		const sushiItem = sushi[key]; // prevTotal - 0, далее берется каждый элем. и подставляется в sushi, вытаскиваем sushu.price
      		const count = basket[key]; // количество итемов в ордере

      		return prevTotal + sushiItem.price * count; //0 + sushiItem.price * колличество, получаем общую сумму
    	}, 0)
		
		return (
			<div className="wrapper clear">
				<Basket display={display}
					onToggleBasket={this.onToggleBasket}
					onDeleteBasketItem={this.onDeleteBasketItem}
					basket={basket}
					sushi={sushi}
					total={total}
					postChangeToBasket={this.postChangeToBasket}/>
				<Header onToggleBasket={this.onToggleBasket} total={total} basket={basket}/>
				<Card addToBasket={this.addToBasket}
					sushi={sushi}
					basket={basket}/>
			</div>
		)
	}
}

export default App
