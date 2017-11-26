const operators = {
	'equals': (operand1, operand2) => operand1 === operand2,
	'greaterEqual': (operand1, operand2) => operand1 >= operand2,
}

const offerTypes = {
	'buyXpayY': (item, offer) => {
		let x = offer.benefit.x, y = offer.benefit.y;

		return item.price * (parseInt((item.quantity / x), 10) * y) +
			item.price * (item.quantity % x)
	},
	'discount': (item, offer) => {
		let newPrice = offer.benefit.price;
		return item.quantity * newPrice;
	}
}

function _applyOffer(item, offer) {
	return offerTypes[offer.benefit.type](item, offer);
}

export default function calculatePrice(cart) {
	return Object.keys(cart.products)
		.map(id => Object.assign({'customerName': cart.customerName}, cart.products[id]))
		.map(item => {
			// Using find not filter here for finding offer.
			//if more than one offer matches, take first matched offer. 
			let matchingOffers = item.offers.find((offer) => {
				let funcName = offer.conditionOperator === "any" ? 'some' : 'every';
				return offer.conditions[funcName](condition => {
					let conditionFunc = condition.operator;
					return operators[conditionFunc](item[condition.name], condition.value)
				})
			});
			return matchingOffers ? _applyOffer(item, matchingOffers) : item.quantity * item.price;
		})
		.reduce((total, itemPrice) => total + itemPrice, 0);
}
