import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {loadAllAds} from '../actions/AdActions';
import {addToCart, checkOut} from '../actions/CartActions';
import AdsStore from '../stores/AdsStore';
import CartStore from '../stores/CartStore';
import Constant from '../constants/Constants'
import AdShelf from "../components/AdShelf.jsx";
import {
  Link
} from 'react-router-dom';

export default class AdsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ads: AdsStore.currentState(),
			cartItemNos: CartStore.getTotalNumberOfItems()
		}
	}

	componentDidMount() {
		AdsStore.addChangeListner(Constant.EVENT_CONSTANT.ADS_LOADED, this.updateAllAds)
		CartStore.addChangeListner(Constant.EVENT_CONSTANT.ITEM_ADDED_TO_CART, this.updateCartItemNos)
		loadAllAds();
	}

	componentWillUnmount() {
		AdsStore.removeChangeListner(Constant.EVENT_CONSTANT.ADS_LOADED, this.updateAllAds)
		CartStore.removeChangeListner(Constant.EVENT_CONSTANT.ITEM_ADDED_TO_CART, this.updateCartItemNos)
	}

	updateAllAds = () => {
		console.log("dgvgfd");
		this.setState({
			ads: AdsStore.currentState()
		})
	}

	updateCartItemNos = () => {
		this.setState({
			cartItemNos: CartStore.getTotalNumberOfItems()
		})
	}

	render() {
		return !this.state.ads.length ? <div> Loading ... </div> : (
			<div class="section">
				<div className="header"> <span className="btn btn-floating right" style={{marginTop: -40}}> {this.state.cartItemNos}</span></div>
				<div className="row"> {this.state.ads.map(ad => <AdShelf key={ad.id} ad={ad} addToCart={addToCart}/>)} </div>
				<div className="center"> <span class="btn grey lighten-2"> <Link to="/cart">goto cart</Link></span></div>
			</div>
		)
	}
}
