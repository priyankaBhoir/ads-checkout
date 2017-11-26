'use strict'

import dispatcher from '../dispatcher/Dispatcher';
import {EventEmitter} from 'events';
import { createStore } from './Store';
import Constants from '../constants/Constants';
import calculatePrice from '../utils/RuleEngine';

const {
	ACTION_CONSTANT,
	EVENT_CONSTANT
} = Constants;


//======================= functions to update store ================
let _cart = {
	products: {},
	customerName: "default"
};

function updateAds (data) {
	_cart = data;
}

function add(ad, quantity) {
	_cart.products[ad.id] = _cart.products[ad.id] ? 
		Object.assign({}, _cart.products[ad.id], {quantity: _cart.products[ad.id].quantity + quantity}) :
		Object.assign({}, ad, {quantity: quantity});

}
function updateCustomer (name) {
	_cart.customerName = name;
}

function resetCart() {
	_cart = {
		products: {},
		customerName: "default"
	};
}

//======================= Store ===============================
const CartStore = createStore ({
	currentState () {
		return _cart;
	},

	getTotalNumberOfItems() {
		return Object.keys(_cart.products).reduce((total, id) => total + _cart.products[id].quantity, 0);
	},

	getTotalPrice() {
		return {
			actualPrice: calculatePrice(Object.assign({}, _cart, {customerName: "default"})),	//calculate witthout discount
			discountPrice: calculatePrice(_cart) //calculate with discount
		}
	}
});

//======================= Store's Listerner ===========================
CartStore.dispatchToken = dispatcher.register (action => {

	switch (action.type) {
		case ACTION_CONSTANT.ADD_TO_CART:
			add(action.ad, action.quantity);
			CartStore.emitChange(EVENT_CONSTANT.ITEM_ADDED_TO_CART);
			break;
		case ACTION_CONSTANT.UPDATE_CUSTOMER_NAME:
			updateCustomer(action.name);
			CartStore.emitChange(EVENT_CONSTANT.RECACULATE_CART);
			break;
		case ACTION_CONSTANT.INIT_CART: 
			resetCart();
			break;

	}
});

export default CartStore;