import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartStore from '../stores/CartStore';
import {addToCart, setCustomerName} from '../actions/CartActions';
import Constant from '../constants/Constants'
import {
  Link
} from 'react-router-dom';

export default class CartContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: CartStore.currentState().products,
			totalPrices: CartStore.getTotalPrice()
		}
	}

	componentDidMount() {
		CartStore.addChangeListner(Constant.EVENT_CONSTANT.RECACULATE_CART, this.recalculate)
	}

	componentWillUnmount() {
		CartStore.removeChangeListner(Constant.EVENT_CONSTANT.RECACULATE_CART, this.recalculate)
	}

	recalculate = () => {
		this.setState({
			totalPrices: CartStore.getTotalPrice()
		})
	}

	setCustomerName = () => {		
		setCustomerName(this.refs.customerName.value)
	}

	render() {
		return (
			<div>
				<div className="section"> 
					{Object.keys(this.state.items).map(id => {
						return (<div className="row"> 
								<span className="col m4"> {this.state.items[id].title }</span> 
								<span className="col m4"> $ {this.state.items[id].price }</span> 
								<span className="col m4"> {this.state.items[id].quantity }</span> 
							</div>)
					})} 
				</div>
				<div class="divider"/> 
				<div className="section">
					<div>Your total: <b> $ {this.state.totalPrices.actualPrice} </b></div>
					{this.state.totalPrices.discountPrice !== this.state.totalPrices.actualPrice && 
						<div> Your total After Discount: <b> $ {this.state.totalPrices.discountPrice} </b></div>
					}
				</div>
				<div class="divider"/> 
				<div className="section">
					<span> Enter your name to check special discounts on your purchase </span>
					<div className="row">
						<input className="col m7" type="text" ref="customerName" />
						<button className="col m4" onClick={this.setCustomerName} > Save </button>
					</div>
				</div>
				<div className="center link"> <span class="btn grey lighten-2"> <Link to="/">continue shopping...</Link></span></div>
			</div>
		)
	}
}
