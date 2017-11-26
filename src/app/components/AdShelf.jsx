import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdPackage from './AdPackage.jsx';

export default class AdShelf extends Component {
	static propTypes = {
	  ad: PropTypes.shape({
	    id: PropTypes.string.isRequired,
	    title: PropTypes.string.isRequired,
	    price: PropTypes.number.isRequired,
	    description: PropTypes.array.isRequired
	  }).isRequired,
	  addToCart: PropTypes.func.isRequired
	}
	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	updateQuntity = (e) => {
		this.setState({
			quantity: parseInt(e.target.value, 10)
		})
	} 

	addItem = () => {
		this.props.addToCart(this.props.ad, this.state.quantity);
	}

	render() {
		return (
			<div className="col s12 m4">
				<div> <AdPackage {...this.props.ad} /> </div>
				<div>	
					<input type="number" min="1" value={this.state.quantity} onChange={this.updateQuntity}/>
					<button onClick={this.addItem} > Add to Cart </button>
				</div>
			</div>
		)
	}
}
