const Ads = [{
	"id": "classical",
	"title": "Classical Ad",
	"price": 269.99,
	"description": ["The basic level of advertisement"],
	"offers": [{
		"conditionOperator": "all",
		"conditions" : [{
			"operator": "equals",
			"name" : "customerName",
			"value": "uniliver"
		}],
		"benefit": {
			"type": "buyXpayY",
			"x": 3,
			"y": 2
		}
	}, {
		"conditionOperator": "all",
		"conditions" : [{
			"operator": "equals",
			"name" : "customerName",
			"value": "ford"
		}],
		"benefit": {
			"type": "buyXpayY",
			"x": 5,
			"y": 4
		}
	}]
}, {
	"id": "standout",
	"title": "Standout Ad",
	"price": 322.99,
	"description": [
		"Allows advertisers to use a company logo",
		"use a longer presentation text"
	],
	"offers": [{
		"conditionOperator": "all",
		"conditions" : [{
			"operator": "equals",
			"name" : "customerName",
			"value": "apple"
		}],
		"benefit": {
			"type": "discount",
			"price": 299.99
		}
	}, {
		"conditions" : [{
			"operator": "equals",
			"name" : "customerName",
			"value": "ford"
		}],
		"benefit": {
			"type": "discount",
			"price": 309.99
		}
	}]
}, {
	"id": "premium",
	"title": "Premium Ad",
	"price": 394.99,
	"description": [
		"Allows advertisers to use a company logo",
		"use a longer presentation text",
		"The advertisement will be at the top of the results, allowing higher visibility"
	],
	"offers": [{
		"conditions" : [{
			"operator": "equals",
			"name" : "customerName",
			"value": "ford"
		}, {
			"operator": "greaterEqual",
			"name" : "quantity",
			"value": 3
		}],
		"benefit": {
			"type": "discount",
			"price": 389.99
		}
	}, {
		"conditions" : [{
			"operator": "equals",
			"name" : "customerName",
			"value": "nike"
		}, {
			"operator": "greaterEqual",
			"name" : "quantity",
			"value": 4
		}],
		"benefit": {
			"type": "discount",
			"price": 379.99
		}
	}]
}];

export default {
	Ads: Ads
}